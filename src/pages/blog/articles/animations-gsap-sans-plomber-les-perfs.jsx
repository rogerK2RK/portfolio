export default {
slug: 'animations-gsap-sans-plomber-les-perfs',
  title: 'Animer une interface sans plomber les performances',
  description:
    "GSAP permet beaucoup, y compris de rendre un site lourd. Les règles que je m'impose, illustrées par le code de ce portfolio.",
  date: '2026-07-10',
  tag: 'Développement',
  readingTime: '4 min',
  content: (
    <>
      <p>
        Ce portfolio est animé de bout en bout : titres qui montent depuis leur
        masque, révélations au scroll, parallaxe, curseur personnalisé, boutons
        magnétiques. C&apos;est exactement le genre de site qui rame si on
        l&apos;écrit sans méthode. Voici les règles que je me suis imposées en
        le construisant — toutes visibles dans le code, aucune théorique.
      </p>

      <h2>Pourquoi GSAP plutôt que du CSS</h2>
      <p>
        Le CSS suffit pour une transition. Il atteint sa limite dès qu&apos;il
        faut orchestrer. L&apos;intro du hero enchaîne quatre animations qui se
        chevauchent volontairement : les lignes du titre partent, la méta
        arrive 0,2 s plus tard, le lead à 0,5 s, l&apos;image se découvre à
        0,3 s. En CSS, ça devient un empilement de <code>animation-delay</code>{' '}
        qu&apos;on n&apos;ose plus toucher. Avec une timeline, les décalages
        sont des paramètres, et déplacer un élément ne casse pas les autres.
      </p>
      <p>
        Le second argument est moins évoqué : le nettoyage. Une animation JS
        laissée en place après le démontage d&apos;un composant, c&apos;est une
        fuite. GSAP répond à ça avec <code>gsap.context()</code>, et React avec
        la fonction de retour du <code>useEffect</code>. Toutes mes animations
        suivent le même squelette :
      </p>
      <p>
        <code>
          const ctx = gsap.context(() =&gt; {'{'} … {'}'}); return () =&gt;
          ctx.revert();
        </code>
      </p>
      <p>
        <code>revert()</code> ne se contente pas d&apos;arrêter les tweens : il
        remet le DOM dans son état d&apos;origine et détruit les ScrollTrigger
        associés. Sans ça, chaque navigation client laisse derrière elle des
        écouteurs de scroll qui continuent de calculer dans le vide.
      </p>

      <h2>Les propriétés qui coûtent cher</h2>
      <p>
        C&apos;est la règle la plus rentable, et la plus simple. Le navigateur
        peut animer <code>transform</code> et <code>opacity</code> sans
        recalculer la mise en page : il déplace une couche déjà peinte.
        Animer <code>width</code>, <code>height</code>, <code>top</code> ou{' '}
        <code>left</code> déclenche à l&apos;inverse un reflow — le navigateur
        recalcule la position de tout ce qui suit, à chaque frame.
      </p>
      <p>
        Concrètement : dans tout ce portfolio, je n&apos;anime que{' '}
        <code>x</code>, <code>y</code>, <code>yPercent</code>,{' '}
        <code>scale</code>, <code>opacity</code> et <code>clipPath</code>. Les
        barres de compétence ne changent pas de largeur, elles sont mises à
        l&apos;échelle : <code>scaleX</code> de 0 à la valeur cible, avec un{' '}
        <code>transformOrigin</code> à gauche. Le résultat visuel est identique,
        le coût ne l&apos;est pas.
      </p>
      <p>
        Deuxième réflexe, sur les événements à haute fréquence. Le curseur
        personnalisé suit la souris : un <code>mousemove</code> tire des
        dizaines d&apos;événements par seconde, et créer un tween à chaque fois
        serait absurde. <code>gsap.quickTo()</code> crée le tween une seule
        fois et se contente ensuite de mettre à jour sa valeur cible. Même
        principe pour les boutons magnétiques.
      </p>
      <p>
        Troisième réflexe : ne pas animer ce qui a déjà été animé. Mes
        ScrollTrigger de révélation portent <code>once: true</code>. Une
        révélation qui se rejoue à chaque passage n&apos;apporte rien, et
        maintient vivant un déclencheur qui aurait pu être libéré.
      </p>

      <h2>Ce qui ne doit pas s&apos;animer du tout</h2>
      <p>
        Une partie du travail consiste à décider quand ne rien faire.
      </p>
      <p>
        Le curseur personnalisé et les boutons magnétiques n&apos;ont aucun sens
        sur un écran tactile : il n&apos;y a pas de curseur à suivre, et le
        survol n&apos;existe pas. Ils sont donc conditionnés à{' '}
        <code>window.matchMedia(&apos;(pointer: fine)&apos;)</code>. Sur mobile,
        le code n&apos;est pas seulement invisible : il ne s&apos;exécute pas.
        C&apos;est autant d&apos;écouteurs en moins sur l&apos;appareil le moins
        puissant.
      </p>

      <h2>prefers-reduced-motion n&apos;est pas une case à cocher</h2>
      <p>
        Toutes mes animations commencent par la même ligne :{' '}
        <code>if (prefersReduced) return;</code>. Ce n&apos;est pas du zèle.
        Pour une personne sujette au mal des transports, aux migraines
        vestibulaires ou à certains troubles de l&apos;équilibre, une parallaxe
        et un défilement qui bougent sous les yeux ne sont pas « un peu
        désagréables » : ils déclenchent des symptômes physiques réels. Le
        système d&apos;exploitation expose déjà ce réglage, la personne l&apos;a
        activé délibérément. L&apos;ignorer, c&apos;est décider à sa place.
      </p>
      <p>
        Et le bénéfice est réciproque : sur ce site, respecter ce réglage
        revient à ne pas exécuter GSAP du tout. L&apos;accessibilité et la
        performance disent ici exactement la même chose.
      </p>

      <h2>Ce que je ferais différemment</h2>
      <p>
        Une chose me gêne encore dans mon propre code. Je calcule{' '}
        <code>prefersReduced</code> une seule fois, au chargement du module. Si
        quelqu&apos;un active le réglage pendant sa visite, la page ne le voit
        pas : il faut recharger. La forme correcte serait d&apos;écouter les
        changements du <code>MediaQueryList</code>, comme je le fais déjà pour
        le survol. C&apos;est un cas rare, mais « rare » n&apos;est pas
        « acceptable » quand on parle d&apos;accessibilité — et c&apos;est
        typiquement le raccourci qu&apos;on se pardonne trop vite.
      </p>
    </>
  ),
};
