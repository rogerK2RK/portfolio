export default {
  slug: 'figma-nest-pas-un-livrable',
  title: "Figma n'est pas un livrable",
  description:
    "Une maquette validée n'est pas un site. Ce que Figma ne dit jamais, et les questions que je pose avant d'écrire la première ligne de CSS.",
  date: '2026-06-05',
  tag: 'Design',
  readingTime: '3 min',
  content: (
    <>
      <p>
        Une maquette validée donne un sentiment de fin de parcours : c&apos;est
        beau, c&apos;est approuvé, il ne reste « qu&apos;à » l&apos;intégrer.
        C&apos;est le moment le plus dangereux d&apos;un projet, parce que tout
        ce que la maquette ne dit pas est encore à décider — et sera décidé par
        moi, en silence, sans que personne ne l&apos;ait validé.
      </p>

      <h2>Une maquette est une photo, un site est un film</h2>
      <p>
        Figma montre un état. Un site en a des dizaines, et aucun n&apos;est
        dans le fichier.
      </p>
      <p>
        Que fait ce bouton pendant le chargement ? À quoi ressemble ce champ
        quand la saisie est refusée ? Cette liste, quand elle est vide au
        premier lancement ? Et ce titre, quand le client écrit quarante mots là
        où la maquette en montrait six ? Aucune de ces situations n&apos;est
        dessinée. Toutes arriveront.
      </p>
      <p>
        Le cas de la liste vide est le plus révélateur. On la dessine toujours
        pleine, avec de belles données. Or le tout premier écran que verra
        l&apos;utilisateur, le jour du lancement, c&apos;est la version vide.
        L&apos;état le moins dessiné est celui qui fait la première impression.
      </p>

      <h2>Entre deux largeurs, il y a tout le reste</h2>
      <p>
        Une maquette montre en général deux artboards : desktop et mobile. Entre
        les deux, il y a un continuum de largeurs, et c&apos;est là que vit la
        moitié du trafic.
      </p>
      <p>
        La question n&apos;est donc jamais « à quoi ça ressemble en 390 et en
        1440 », mais « qu&apos;est-ce qui cède en premier quand la place
        manque ». Le titre rétrécit-il, ou passe-t-il à la ligne ? Ces trois
        colonnes deviennent-elles une ou deux ? Ce menu s&apos;empile-t-il ou se
        replie-t-il ?
      </p>
      <p>
        Ce sont des décisions de design, pas d&apos;intégration. Si personne ne
        les prend, je les prends — et le designer découvre mes choix à la
        livraison. C&apos;est là que naissent les allers-retours pénibles, dont
        la vraie cause n&apos;est pas un désaccord de goût mais une question
        jamais posée.
      </p>

      <h2>Ce que je demande avant de commencer</h2>
      <p>
        Trois questions suffisent à éviter l&apos;essentiel des mauvaises
        surprises.
      </p>
      <p>
        <strong>Ce texte peut-il doubler ?</strong> Les vrais contenus sont
        toujours plus longs que le faux latin. Si un titre a été dessiné sur
        deux lignes exactement, je veux savoir si c&apos;est une contrainte ou
        un hasard.
      </p>
      <p>
        <strong>Cette valeur est-elle une intention ou une conséquence ?</strong>{' '}
        Un écart de 37 pixels est presque toujours le résidu d&apos;un
        déplacement à la souris. Un écart de 40 est une décision. Savoir lequel
        m&apos;évite de reproduire au pixel près une approximation — et de
        transformer un système en cent valeurs uniques.
      </p>
      <p>
        <strong>Qu&apos;est-ce qui bouge ?</strong> Une maquette est muette sur
        le mouvement. Si personne ne le spécifie, c&apos;est moi qui décide de
        chaque durée et de chaque transition, et le designer n&apos;a plus qu&apos;à
        réagir après coup à des choix qui étaient les siens.
      </p>

      <h2>Ce que Figma fait très bien</h2>
      <p>
        Rien de tout ça n&apos;est un reproche à l&apos;outil. Figma est
        excellent là où il excelle : explorer vite, aligner une équipe sur une
        direction, arrêter une identité avant de dépenser des jours de
        développement.
      </p>
      <p>
        Le problème n&apos;est pas Figma. C&apos;est de confondre « la maquette
        est validée » avec « les décisions sont prises ». Une maquette est une
        hypothèse très bien dessinée. Le code est l&apos;endroit où
        l&apos;hypothèse rencontre le contenu réel, les vraies largeurs, les
        vrais temps de chargement — et où quelqu&apos;un doit trancher.
      </p>
      <p>
        Autant que ce soit avant, et à plusieurs.
      </p>
    </>
  ),
};
