/**
 * Les articles du blog.
 *
 * Pour en ajouter un : copie un bloc, change le `slug` (il devient l'URL
 * /blog/mon-slug) et écris le `content`. Le build génère automatiquement
 * un fichier HTML par article — rien d'autre à déclarer ailleurs.
 *
 * Champs qui comptent pour le référencement :
 *  - title       : 50-60 caractères. C'est le lien bleu dans Google.
 *  - description : 150-160 caractères. C'est le texte gris sous le lien.
 *                  Écris-la pour donner envie de cliquer, pas pour caser
 *                  des mots-clés — Google réécrit les descriptions creuses.
 *  - date        : format AAAA-MM-JJ, sert au tri et à la donnée structurée.
 *
 * Les apostrophes s'écrivent &apos; (règle ESLint react/no-unescaped-entities).
 */

export const POSTS = [
  {
    slug: 'prestashop-ou-sur-mesure',
    title: 'PrestaShop ou sur-mesure : comment je choisis',
    description:
      "Quand partir sur PrestaShop et quand coder un e-commerce sur-mesure ? Les critères que j'applique avant d'écrire la première ligne de code.",
    date: '2026-07-17',
    tag: 'E-commerce',
    readingTime: '4 min',
    content: (
      <>
        <p>
          La question tombe au premier rendez-vous, et presque toujours dans le
          mauvais sens : « on part sur PrestaShop ou sur du sur-mesure ? ».
          C&apos;est une question d&apos;outil, posée avant qu&apos;on sache ce
          qu&apos;on construit. Je la repousse systématiquement à plus tard, parce
          que le bon choix ne dépend pas de l&apos;outil : il dépend de qui va
          vivre avec le site une fois que je serai parti.
        </p>

        <h2>La vraie question : qui gère le site dans six mois ?</h2>
        <p>
          Un e-commerce n&apos;est pas livré, il est habité. Quelqu&apos;un va
          ajouter des produits, corriger un prix, gérer un retour, éditer une
          fiche à 22 h un dimanche. Si cette personne n&apos;est pas
          développeuse — et elle ne l&apos;est presque jamais — alors le
          back-office n&apos;est pas un détail d&apos;implémentation. C&apos;est
          le produit principal. Le site public n&apos;en est que la conséquence.
        </p>
        <p>
          C&apos;est là que PrestaShop prend tout son sens. Il livre d&apos;emblée
          une gestion de catalogue, de stocks, de commandes, de taxes et de
          transporteurs. Rien de tout ça n&apos;est glamour à coder, tout est
          long, et surtout : tout est déjà pensé, avec des cas limites que je
          n&apos;aurais pas anticipés seul. Refaire ça à la main, c&apos;est
          facturer à un client la réécriture de quinze ans de logiciel.
        </p>

        <h2>Là où ça coince</h2>
        <p>
          PrestaShop a un coût, simplement il n&apos;est pas sur la facture de
          départ. Il arrive plus tard, et il prend trois formes.
        </p>
        <p>
          D&apos;abord les modules. Le cœur est gratuit, le reste beaucoup moins.
          Un besoin un peu spécifique se règle en achetant un module, puis un
          deuxième, et on finit avec une pile de code tiers qu&apos;on n&apos;a
          pas écrit, qu&apos;on ne peut pas vraiment auditer, et dont chaque
          montée de version est un pari.
        </p>
        <p>
          Ensuite les mises à jour. Plus on surcharge le thème et le
          comportement, plus la montée de version fait mal. Le sur-mesure a le
          défaut inverse, plus honnête : il ne se met pas à jour tout seul, mais
          il ne casse pas tout seul non plus.
        </p>
        <p>
          Enfin, la performance. PrestaShop charge par défaut bien plus que ce
          dont une boutique de quarante produits a besoin. Ça se travaille, mais
          on part d&apos;un plancher, alors qu&apos;en sur-mesure on part d&apos;un
          plafond.
        </p>

        <h2>Mes critères de décision</h2>
        <p>
          Concrètement, je regarde quatre choses, dans cet ordre.
        </p>
        <p>
          <strong>L&apos;autonomie attendue.</strong> Le client veut gérer son
          catalogue seul ? PrestaShop, sans discussion. Il ne touchera jamais au
          back-office et me rappellera pour chaque changement ? La question se
          rouvre.
        </p>
        <p>
          <strong>La complexité du parcours d&apos;achat.</strong> Panier,
          variantes, promotions, livraison, facturation : si le besoin est
          standard, tout est déjà là. Si le parcours est vraiment atypique — de
          la configuration produit, de l&apos;abonnement, une logique métier
          particulière — je me retrouve à combattre le framework au lieu de
          m&apos;en servir. Le signal d&apos;alarme, c&apos;est le moment où je
          passe plus de temps à contourner PrestaShop qu&apos;à l&apos;utiliser.
        </p>
        <p>
          <strong>Le budget réel, sur trois ans.</strong> Pas le budget de
          lancement. Le sur-mesure coûte plus cher au départ et moins cher à
          faire évoluer. PrestaShop, l&apos;inverse. Un client qui compte sur un
          site figé et un client qui compte itérer tous les mois ne devraient
          pas recevoir la même réponse.
        </p>
        <p>
          <strong>Ce qui existe déjà.</strong> Une boutique en place, avec un
          historique de commandes et des habitudes d&apos;équipe, ne se remplace
          pas parce que le code me plairait davantage. C&apos;est le critère que
          j&apos;ai le plus tendance à sous-estimer, et c&apos;est souvent le
          plus décisif.
        </p>

        <h2>En résumé</h2>
        <p>
          Par défaut, PrestaShop. Le sur-mesure se mérite : il faut une raison
          précise, formulable en une phrase, et qui parle du métier du client —
          pas de mon confort de développeur. « Je préfère React » n&apos;est pas
          une raison. « Leur configurateur produit est le cœur de leur activité
          et aucun module ne le fait » en est une.
        </p>
      </>
    ),
  },
  {
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
  },
  {
    slug: 'beatmaking-et-code-meme-metier',
    title: 'Beatmaking et code : deux fois le même métier',
    description:
      "Composer un morceau et construire une interface demandent la même chose : de la structure, du rythme, et savoir quand s'arrêter.",
    date: '2026-07-03',
    tag: 'Musique',
    readingTime: '3 min',
    content: (
      <>
        <p>
          On me demande souvent laquelle des deux activités est mon vrai métier,
          comme si l&apos;une devait être le sérieux et l&apos;autre le
          passe-temps. Je n&apos;ai jamais réussi à répondre, parce que je fais la
          même chose dans les deux cas. Les outils diffèrent — FL Studio d&apos;un
          côté, un éditeur de code de l&apos;autre — mais les gestes, les
          réflexes et les erreurs sont identiques.
        </p>

        <h2>La structure avant tout</h2>
        <p>
          Un morceau n&apos;est pas une suite de sons, c&apos;est une architecture :
          intro, couplet, refrain, pont. Le refrain revient, et il revient
          identique — ou plutôt, presque identique, avec juste ce qu&apos;il faut
          de variation pour ne pas lasser.
        </p>
        <p>
          C&apos;est un composant. Exactement un composant : défini une fois,
          réutilisé, paramétré à la marge. Un débutant en MAO recopie son refrain
          trois fois dans la timeline, puis découvre qu&apos;il doit corriger la
          même chose à trois endroits. Un débutant en React duplique son bouton
          dans trois pages et vit la même journée. Dans les deux cas, la leçon est
          la même : ce qui se répète doit être nommé et défini une seule fois.
        </p>

        <h2>Le rythme, en musique comme à l&apos;écran</h2>
        <p>
          C&apos;est le parallèle le plus littéral, et celui que j&apos;ai mis le
          plus de temps à voir. En musique, tout se joue au millier de
          millisecondes près : un contretemps trop tôt et le morceau trébuche,
          trop tard et il traîne.
        </p>
        <p>
          Une interface obéit à la même horloge. Une animation à 200 ms paraît
          nerveuse, la même à 600 ms paraît lourde. Et surtout : quand plusieurs
          éléments arrivent, ils ne doivent jamais arriver ensemble. Sur ce site,
          les lignes du titre entrent avec 0,12 s de décalage entre chaque — un
          stagger. En musique, ça s&apos;appelle un groove : c&apos;est le léger
          décalage qui fait qu&apos;une boucle sonne humaine plutôt que
          mécanique. Le mot change, le geste est identique.
        </p>

        <h2>Savoir quand c&apos;est fini</h2>
        <p>
          Voilà la vraie leçon, et c&apos;est la musique qui me l&apos;a apprise
          en premier.
        </p>
        <p>
          En mixage, il existe un moment précis où le morceau est bon. Si on
          continue — encore un peu de compression, encore un filtre, encore une
          couche — on ne l&apos;améliore plus, on le rend seulement plus chargé.
          Le piège est vicieux : à chaque étape, la modification semble une
          amélioration. C&apos;est seulement en réécoutant le lendemain qu&apos;on
          entend qu&apos;on l&apos;a étouffé. Le seul remède que je connaisse,
          c&apos;est le silence : fermer le projet et revenir avec des oreilles
          neuves.
        </p>
        <p>
          Le sur-refactoring est exactement la même maladie. Le code marchait. On
          ajoute une abstraction parce qu&apos;elle est plus élégante, puis une
          couche d&apos;indirection pour anticiper un besoin qui n&apos;existe pas
          encore. Chaque étape semble une amélioration. Trois semaines plus tard,
          personne ne comprend plus le chemin entre le clic et le résultat.
        </p>
        <p>
          Dans les deux cas, la question à se poser est la même, et elle est
          désagréable : est-ce que je rends ça meilleur, ou est-ce que je
          m&apos;occupe parce que je n&apos;ai pas envie de considérer que
          c&apos;est terminé ?
        </p>
        <p>
          Je dis souvent que je suis quelqu&apos;un d&apos;appliqué, qui prend le
          temps nécessaire avant de finaliser. C&apos;est vrai. Mais la version
          honnête, c&apos;est que ce temps sert autant à savoir quand ajouter
          qu&apos;à savoir quand arrêter — et que la seconde compétence est de
          loin la plus difficile des deux.
        </p>
      </>
    ),
  },
];

export const getPost = (slug) => POSTS.find((p) => p.slug === slug);

export const sortedPosts = () =>
  [...POSTS].sort((a, b) => b.date.localeCompare(a.date));

export const formatDate = (iso) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
