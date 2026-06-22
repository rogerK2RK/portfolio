import { useRef, useEffect } from 'react';
import gsap from 'gsap';

const SwitchButton = ({ isPageOne, onClick }) => {
  const rootRef = useRef(null);
  const pillRef = useRef(null);

  // Entrée au montage
  useEffect(() => {
    if (rootRef.current) {
      gsap.from(rootRef.current, {
        y: -40,
        opacity: 0,
        duration: 0.9,
        ease: 'expo.out',
        delay: 0.3
      });
    }
  }, []);

  // Glissement de la pastille selon le mode actif
  useEffect(() => {
    if (pillRef.current) {
      gsap.to(pillRef.current, {
        left: isPageOne ? '0%' : '50%',
        duration: 0.55,
        ease: 'power3.inOut'
      });
    }
  }, [isPageOne]);

  // Un clic sur l'option inactive bascule (les deux options appellent le même toggle)
  const handleSelect = (wantWeb) => {
    if (wantWeb !== isPageOne) onClick();
  };

  return (
    <div
      className="switch"
      ref={rootRef}
      role="switch"
      aria-checked={isPageOne}
      aria-label={isPageOne ? 'Mode Web actif — basculer vers Musique' : 'Mode Musique actif — basculer vers Web'}
    >
      <span className="switch__pill" ref={pillRef} aria-hidden="true" />
      <button
        type="button"
        className={`switch__opt ${isPageOne ? 'is-active' : ''}`}
        onClick={() => handleSelect(true)}
      >
        Web
      </button>
      <button
        type="button"
        className={`switch__opt ${!isPageOne ? 'is-active' : ''}`}
        onClick={() => handleSelect(false)}
      >
        Musique
      </button>
    </div>
  );
};

export default SwitchButton;
