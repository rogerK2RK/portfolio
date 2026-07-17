export default {
  slug: 'coder-avec-une-ia-sans-perdre-la-main',
  title: "Coder avec une IA sans perdre la main",
  description:
    "Une IA écrit du code plausible, ce qui n'est pas la même chose que du code correct. Comment je m'en sers sans signer ce que je n'ai pas compris.",
  date: '2026-05-29',
  tag: 'IA',
  readingTime: '4 min',
  content: (
    <>
      <p>
        Claude Code et ChatGPT figurent dans mes outils, au même titre que mon
        éditeur. Autant le dire franchement plutôt que de laisser croire que
        tout sort de ma tête. Mais il y a une règle que je ne négocie pas :{' '}
        <strong>je signe le code que je livre.</strong> Pas l&apos;IA. Ce
        qu&apos;elle produit n&apos;est pas un livrable, c&apos;est une
        proposition.
      </p>

      <h2>Plausible n&apos;est pas correct</h2>
      <p>
        C&apos;est le point que je mets le plus de temps à expliquer, et
        c&apos;est le seul qui compte vraiment. Une IA génère du code qui{' '}
        <em>ressemble</em> à du code juste. C&apos;est très exactement ce
        qu&apos;elle sait faire, et c&apos;est très exactement le problème.
      </p>
      <p>
        Un débutant produit du code visiblement faux : ça ne compile pas, ça
        plante tout de suite. Une IA produit du code qui compile, qui passe les
        cas évidents, qui a de bons noms de variables et des commentaires
        soignés — et qui se trompe sur le cas limite. Le bug n&apos;est pas
        devant vos yeux : il est dans ce que le code ne gère pas.
      </p>
      <p>
        Ce déplacement est important. Le risque n&apos;est plus l&apos;erreur
        grossière, c&apos;est <strong>l&apos;erreur bien habillée</strong>. Et une
        erreur bien habillée traverse une relecture distraite sans difficulté.
      </p>

      <h2>La question que je me pose avant d&apos;accepter</h2>
      <p>
        Une seule, mais elle est impitoyable : est-ce que je saurais réécrire ça
        sans l&apos;IA, et est-ce que je saurais le déboguer à deux heures du
        matin quand le site du client sera cassé ?
      </p>
      <p>
        Si la réponse est non, je ne l&apos;accepte pas. Pas parce que le code
        serait mauvais — il est souvent meilleur que mon premier jet. Mais parce
        que du code que je ne comprends pas est une dette dont je ne connais pas
        le montant. Ça marche jusqu&apos;au jour où ça casse, et ce jour-là, je
        suis face à un fichier écrit par personne.
      </p>
      <p>
        Le raccourci n&apos;est jamais dans l&apos;écriture. Écrire, c&apos;est
        la partie rapide. Le temps réel part dans la compréhension, et
        c&apos;est celle-là qu&apos;on ne peut pas déléguer.
      </p>

      <h2>Là où c&apos;est franchement utile</h2>
      <p>
        Ce n&apos;est pas un plaidoyer contre l&apos;outil. Il y a des usages où
        il change réellement la donne.
      </p>
      <p>
        <strong>Le travail mécanique.</strong> Renommer partout, convertir un
        format, écrire la centième variation d&apos;une même structure. Rien à
        comprendre, tout à vérifier : c&apos;est le terrain idéal.
      </p>
      <p>
        <strong>Le premier contact avec un code inconnu.</strong> Faire expliquer
        un fichier que je découvre me fait gagner un temps considérable —
        à condition de vérifier ensuite dans le code, parce qu&apos;un résumé
        confiant peut être faux.
      </p>
      <p>
        <strong>Le contradicteur.</strong> C&apos;est l&apos;usage que je
        sous-estimais le plus. Demander « qu&apos;est-ce qui casse dans cette
        approche ? » avant de coder fait souvent apparaître le cas auquel je
        n&apos;avais pas pensé. Là, l&apos;IA ne produit rien : elle m&apos;évite
        de produire la mauvaise chose.
      </p>

      <h2>Ce que je surveille chez moi</h2>
      <p>
        Le vrai risque n&apos;est pas technique, il est cognitif. À force
        d&apos;accepter des propositions correctes, on prend l&apos;habitude de
        les accepter. La vigilance coûte de l&apos;énergie, la confiance n&apos;en
        coûte pas, et l&apos;outil a raison assez souvent pour rendre la
        confiance rationnelle.
      </p>
      <p>
        C&apos;est comme ça qu&apos;on se retrouve à livrer du code plausible
        qu&apos;on n&apos;a jamais vraiment lu. Le signal d&apos;alarme, chez
        moi, c&apos;est le moment où je suis surpris par mon propre code en le
        relisant. Si je ne reconnais pas ce que j&apos;ai livré, c&apos;est que
        j&apos;ai signé quelque chose que je n&apos;avais pas compris.
      </p>
      <p>
        L&apos;IA ne me rend pas meilleur développeur. Elle rend le mauvais
        développement plus rapide, et le bon développement plus rapide aussi.
        Lequel des deux accélère dépend entièrement de ce que je fais après
        avoir lu sa proposition.
      </p>
    </>
  ),
};
