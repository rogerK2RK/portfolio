export default {
  slug: 'react-nest-pas-toujours-la-reponse',
  title: "React n'est pas toujours la réponse",
  description:
    "J'ai construit ce portfolio en SPA React, puis j'ai dû le prérendre pour qu'il soit lisible par Google. Retour sur une erreur de départ.",
  date: '2026-06-26',
  tag: 'Développement',
  readingTime: '3 min',
  content: (
    <>
      <p>
        Ce portfolio a longtemps été une application React classique : Vite,
        React Router, tout rendu dans le navigateur. Ça marchait très bien. Et
        pourtant il fallait le refaire, pour une raison que je n&apos;avais pas
        vue en le construisant : le HTML que le serveur envoyait était vide.
      </p>

      <h2>Le HTML que personne ne regarde</h2>
      <p>
        Dans une application rendue côté client, le fichier envoyé par le
        serveur contient à peu près ceci : une balise{' '}
        <code>&lt;div id=&quot;root&quot;&gt;&lt;/div&gt;</code> et un script. Le
        contenu n&apos;existe qu&apos;après l&apos;exécution du JavaScript. Pour
        un visiteur, c&apos;est invisible : son navigateur exécute le script en
        quelques dizaines de millisecondes.
      </p>
      <p>
        Pour un robot, c&apos;est autre chose. Google sait exécuter du
        JavaScript, mais il le fait dans une seconde passe, plus tard, et sans
        garantie. Les autres — Bing, les aperçus de lien sur LinkedIn, les
        agrégateurs — ne le font tout simplement pas. Partager mon portfolio sur
        LinkedIn produisait une carte vide, parce que le robot lisait un fichier
        où le titre et la description n&apos;étaient pas encore écrits.
      </p>

      <h2>Ce que ça change, concrètement</h2>
      <p>
        Le déclic est venu en voulant ajouter un blog. Un site vitrine sans
        référencement, on peut vivre avec : les gens y arrivent par un lien
        direct, depuis un CV ou un message. Un blog dont personne ne trouve les
        articles ne sert à rien. Écrire dix articles invisibles, c&apos;est dix
        soirées perdues.
      </p>
      <p>
        La correction n&apos;a pas consisté à quitter React. J&apos;ai gardé les
        composants, les animations, le routeur. J&apos;ai simplement ajouté une
        étape au build : le rendu est exécuté une fois, au moment de la
        compilation, et chaque route est écrite dans un vrai fichier HTML — avec
        son titre, sa description, son contenu. Le navigateur reprend ensuite la
        main normalement. Le visiteur ne voit aucune différence. Le robot, si.
      </p>

      <h2>La vraie leçon</h2>
      <p>
        Mon erreur n&apos;a pas été de choisir React. Elle a été de choisir un{' '}
        <em>mode de rendu</em> sans me demander qui allait lire le résultat.
        C&apos;est une distinction que je ne faisais pas : je pensais choisir
        une bibliothèque, je choisissais en réalité ce que voit un moteur de
        recherche.
      </p>
      <p>
        Le rendu client est parfait pour une application derrière un écran de
        connexion — un tableau de bord, un back-office, un outil interne. Rien
        de tout ça n&apos;a besoin d&apos;être indexé, et l&apos;interactivité y
        prime. Dès qu&apos;un contenu est public et doit être trouvé, la
        question change complètement de nature.
      </p>
      <p>
        La bonne question n&apos;est donc pas « React ou pas React ». C&apos;est :{' '}
        <strong>qui doit pouvoir lire cette page sans exécuter mon
        JavaScript ?</strong> Si la réponse est « personne », le rendu client
        convient. Si la réponse inclut un moteur de recherche, il faut du HTML
        dès le départ.
      </p>

      <h2>Le coût du retard</h2>
      <p>
        Ce qui m&apos;a le plus coûté, ce n&apos;est pas le prérendu en
        lui-même — c&apos;est une étape de build, quelques lignes de
        configuration. C&apos;est tout ce que j&apos;avais construit en
        supposant que ça n&apos;arriverait jamais.
      </p>
      <p>
        Mon routeur, par exemple, dérivait l&apos;état de mon switch web/musique
        d&apos;un état React, puis forçait l&apos;URL à correspondre. Résultat :
        toute URL autre que les deux prévues était immédiatement redirigée. Le
        jour où j&apos;ai voulu ajouter <code>/blog</code>, la page était
        littéralement inatteignable — et ma route 404 ne s&apos;était jamais
        déclenchée depuis le début sans que je le remarque.
      </p>
      <p>
        Ce genre de dette ne se voit pas tant qu&apos;on ne change rien. Elle se
        présente le jour où on ajoute la fonctionnalité qu&apos;on n&apos;avait
        pas anticipée. Et à ce moment-là, ce n&apos;est plus une ligne à
        changer : c&apos;est une hypothèse de départ à défaire.
      </p>
    </>
  ),
};
