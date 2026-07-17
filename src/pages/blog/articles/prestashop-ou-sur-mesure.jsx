export default {
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
};
