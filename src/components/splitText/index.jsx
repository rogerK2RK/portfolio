/**
 * Découpe une chaîne en lettres individuelles (<span class="char">).
 * Les espaces sont préservés ; les lettres sont masquées aux lecteurs
 * d'écran (le mot complet est porté par l'aria-label du parent).
 */
const SplitText = ({ text }) =>
  [...text].map((ch, i) =>
    ch === ' ' ? (
      <span key={i} className="char char--space" aria-hidden="true">{' '}</span>
    ) : (
      <span key={i} className="char" aria-hidden="true">{ch}</span>
    )
  );

export default SplitText;
