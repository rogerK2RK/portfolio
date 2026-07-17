export default {
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
};
