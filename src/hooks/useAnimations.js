import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Hook pour animer tous les éléments .animated-title avec un stagger (fadeInUp)
 */
export const useAnimatedTitles = () => {
  useEffect(() => {
    const titles = document.querySelectorAll('.animated-title');

    if (titles.length > 0) {
      gsap.from(titles, {
        opacity: 0,
        y: -50,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
      });
    }
  }, []);
};

/**
 * Hook pour animer les images de fond avec un zoom infini (looped)
 */
export const useBackgroundZoom = () => {
  useEffect(() => {
    const bgImages = document.querySelectorAll('.bckgrnd');

    bgImages.forEach((img) => {
      const tl = gsap.timeline({ repeat: -1 });

      tl.to(
        img,
        {
          scale: 1.1,
          duration: 30,
          ease: 'sine.inOut'
        },
        0
      ).to(
        img,
        {
          scale: 1,
          duration: 30,
          ease: 'sine.inOut'
        },
        30
      );
    });

    return () => {
      gsap.killTweensOf(bgImages);
    };
  }, []);
};

/**
 * Hook pour animer les cartes du portfolio au survol
 */
export const usePortfolioHover = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.bx-one-portfolio');

    cards.forEach((card) => {
      card.addEventListener('mouseenter', () => {
        const img = card.querySelector('img');
        if (img) {
          gsap.to(img, {
            scale: 1.08,
            duration: 0.6,
            ease: 'power2.out'
          });
        }
      });

      card.addEventListener('mouseleave', () => {
        const img = card.querySelector('img');
        if (img) {
          gsap.to(img, {
            scale: 1,
            duration: 0.6,
            ease: 'power2.out'
          });
        }
      });
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener('mouseenter', null);
        card.removeEventListener('mouseleave', null);
      });
    };
  }, []);
};

/**
 * Hook pour animer les sections au scroll (fade in + slide up)
 */
export const useScrollAnimations = () => {
  useEffect(() => {
    const sections = document.querySelectorAll(
      '.apropos-section, .skills-section, .portfolio-section, .contact-section'
    );

    sections.forEach((section, index) => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
          once: true
        },
        opacity: 0,
        y: 80,
        duration: 1,
        delay: index * 0.1,
        ease: 'power3.out'
      });
    });

    const contentElements = document.querySelectorAll(
      '.apropos-section h2, .skills-section h2, .portfolio-head-content, .contact-section h2'
    );

    contentElements.forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          once: true
        },
        opacity: 0,
        x: -30,
        duration: 0.8,
        ease: 'power3.out'
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
};

/**
 * Hook pour animer les barres de progression au scroll
 */
export const useSkillBars = () => {
  useEffect(() => {
    const progressBars = document.querySelectorAll('.progress-bar');

    progressBars.forEach((bar) => {
      gsap.from(bar, {
        scrollTrigger: {
          trigger: bar,
          start: 'top 80%',
          once: true
        },
        width: '0%',
        duration: 1.2,
        ease: 'power3.out'
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
};

/**
 * Hook pour animer les cartes du portfolio avec stagger au scroll + hover glow
 */
export const usePortfolioReveal = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.bx-one-portfolio');

    // Stagger reveal au scroll
    cards.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          once: true
        },
        opacity: 0,
        y: 40,
        x: index % 2 === 0 ? -40 : 40,
        duration: 0.8,
        delay: index * 0.1,
        ease: 'power3.out'
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
};

/**
 * Hook pour parallax des images de background au scroll
 */
export const useParallax = () => {
  useEffect(() => {
    const heroBackgrounds = document.querySelectorAll('.first-section .bckgrnd, .contact-section .bckgrnd');

    heroBackgrounds.forEach((bg) => {
      gsap.to(bg, {
        scrollTrigger: {
          trigger: bg,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
          markers: false
        },
        y: -window.innerHeight * 0.3,
        ease: 'none'
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
};

/**
 * Hook pour les skill boxes : hover avec glow et border color
 */
export const useSkillBoxHover = () => {
  useEffect(() => {
    const skillBoxes = document.querySelectorAll('.bx-one-comp');

    skillBoxes.forEach((box) => {
      box.addEventListener('mouseenter', () => {
        gsap.to(box, {
          backgroundColor: 'rgba(0, 212, 255, 0.15)',
          duration: 0.3,
          ease: 'power2.out'
        });
      });

      box.addEventListener('mouseleave', () => {
        gsap.to(box, {
          backgroundColor: 'rgba(255, 255, 255, 0.02)',
          duration: 0.3,
          ease: 'power2.out'
        });
      });
    });

    return () => {
      skillBoxes.forEach((box) => {
        box.removeEventListener('mouseenter', null);
        box.removeEventListener('mouseleave', null);
      });
    };
  }, []);
};

/**
 * Hook pour les liens dans la section contact : underline animation sophisticated
 */
export const useContactLinks = () => {
  useEffect(() => {
    const links = document.querySelectorAll('.contact-section-content a');

    links.forEach((link) => {
      link.addEventListener('mouseenter', () => {
        gsap.to(link, {
          color: '#00D4FF',
          duration: 0.3,
          ease: 'power2.out'
        });
      });

      link.addEventListener('mouseleave', () => {
        gsap.to(link, {
          color: '#00D4FF',
          duration: 0.3,
          ease: 'power2.out'
        });
      });
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener('mouseenter', null);
        link.removeEventListener('mouseleave', null);
      });
    };
  }, []);
};

/**
 * Hook pour l'animation du footer icons au scroll/hover
 */
export const useFooterIcons = () => {
  useEffect(() => {
    const icons = document.querySelectorAll('.footer-bx-icon a');

    icons.forEach((icon, index) => {
      gsap.from(icon, {
        scrollTrigger: {
          trigger: icon,
          start: 'top 95%',
          once: true
        },
        opacity: 0,
        y: 20,
        duration: 0.6,
        delay: index * 0.08,
        ease: 'power3.out'
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
};
