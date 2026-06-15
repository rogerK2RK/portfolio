import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import monitor from './monitor.png';
import video from './video-circle.png';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SwitchButtonWrapper = styled.button`
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;

  width: 280px;
  height: 70px;

  background-color: var(--bg-mid);
  border: 3px solid var(--web-red);
  border-radius: 40px;
  cursor: pointer;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;

  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);

  /* Hover effect */
  &:hover {
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
  }

  /* Focus (accessibilité clavier) */
  &:focus {
    outline: 2px solid var(--web-red);
    outline-offset: 4px;
  }

  @media (max-width: 768px) {
    width: 240px;
    height: 60px;
    top: 18%;
    padding: 0 15px;
  }

  @media (max-width: 480px) {
    width: 200px;
    height: 50px;
    top: 16%;
    padding: 0 10px;
    border-width: 2px;
  }
`;

const Label = styled.span`
  font-family: var(--font-title);
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  user-select: none;
  transition: color 0.3s ease;

  @media (max-width: 480px) {
    font-size: 12px;
    letter-spacing: 0.5px;
  }
`;

const LeftLabel = styled(Label)`
  color: var(--web-red);
  order: 1;
  opacity: 1;
`;

const RightLabel = styled(Label)`
  color: var(--music-blue);
  order: 3;
  opacity: 0.6;
`;

const SliderTrack = styled.div`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);

  width: 50%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;

  img {
    width: 24px;
    height: 24px;
    object-fit: contain;
  }

  @media (max-width: 480px) {
    width: 30px;
    height: 30px;
    img {
      width: 18px;
      height: 18px;
    }
  }
`;

const SwitchButton = ({ isPageOne, onClick }) => {
  const buttonRef = useRef(null);
  const sliderRef = useRef(null);

  // Animation d'entrée au montage
  useEffect(() => {
    if (buttonRef.current) {
      gsap.from(buttonRef.current, {
        opacity: 0,
        y: -40,
        duration: 0.9,
        ease: 'power3.out',
        delay: 0.2
      });
    }
  }, []);

  // Animation du slider et couleur de bordure quand isPageOne change
  useEffect(() => {
    if (sliderRef.current && buttonRef.current) {
      // Anime la position du slider
      gsap.to(sliderRef.current, {
        left: isPageOne ? '0%' : '50%',
        duration: 0.6,
        ease: 'power3.inOut'
      });

      // Anime la couleur de la bordure
      gsap.to(buttonRef.current, {
        borderColor: isPageOne ? 'var(--web-red)' : 'var(--music-blue)',
        duration: 0.6,
        ease: 'power3.inOut'
      });
    }
  }, [isPageOne]);

  const handleKeyDown = (e) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      onClick();
      buttonRef.current?.focus();
    }
  };

  return (
    <ButtonContainer>
      <SwitchButtonWrapper
        ref={buttonRef}
        onClick={onClick}
        onKeyDown={handleKeyDown}
        aria-label={isPageOne ? 'Basculer vers Musique' : 'Basculer vers Web'}
        aria-pressed={isPageOne}
        role="switch"
        tabIndex={0}
      >
        <LeftLabel>Web</LeftLabel>

        <SliderTrack ref={sliderRef}>
          <IconWrapper>
            {isPageOne ? (
              <img src={monitor} alt="Mode Web" />
            ) : (
              <img src={video} alt="Mode Musique" />
            )}
          </IconWrapper>
        </SliderTrack>

        <RightLabel>Music</RightLabel>
      </SwitchButtonWrapper>
    </ButtonContainer>
  );
};

export default SwitchButton;
