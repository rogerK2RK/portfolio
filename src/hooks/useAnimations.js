import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const prefersReduced =
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Intro du hero : les lignes du titre montent depuis leur masque,
 * la méta et le lead apparaissent en stagger.
 */
export const useHeroIntro = () => {
  useEffect(() => {
    if (prefersReduced) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'expo.out' },
        // Le masque ne sert qu'à la révélation : on le libère ensuite pour que
        // les lettres agrandies (effet ballon) ne soient pas rognées.
        onComplete: () => gsap.set('.hero__title .line', { overflow: 'visible' })
      });

      tl.from('.js-line', {
        yPercent: 115,
        duration: 1.1,
        stagger: 0.12
      })
        .from(
          '.js-hero-meta > *',
          { yPercent: -120, opacity: 0, duration: 0.7, stagger: 0.06, ease: 'power3.out' },
          0.2
        )
        .from(
          '.js-hero-fade',
          { y: 24, opacity: 0, duration: 0.9, stagger: 0.1, ease: 'power3.out' },
          0.5
        )
        .from(
          '.js-hero-media',
          { clipPath: 'inset(0 0 100% 0)', duration: 1.2, ease: 'expo.out' },
          0.3
        );
    });
    return () => ctx.revert();
  }, []);
};

/**
 * Reveals génériques au scroll.
 * - [data-reveal]        : montée + fondu
 * - [data-reveal="line"] : barre de titre qui se découpe (clip-path)
 * - .js-mask-line        : lignes de texte masquées (À propos, etc.)
 */
export const useScrollReveal = () => {
  useEffect(() => {
    if (prefersReduced) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray('[data-reveal]').forEach((el) => {
        gsap.from(el, {
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
          y: 48,
          opacity: 0,
          duration: 1,
          ease: 'power3.out'
        });
      });

      gsap.utils.toArray('.js-clip').forEach((el) => {
        gsap.from(el, {
          scrollTrigger: { trigger: el, start: 'top 90%', once: true },
          clipPath: 'inset(0 100% 0 0)',
          duration: 1.1,
          ease: 'expo.out'
        });
      });

      gsap.utils.toArray('.js-mask').forEach((group) => {
        const lines = group.querySelectorAll('.js-mask-line');
        gsap.from(lines, {
          scrollTrigger: { trigger: group, start: 'top 85%', once: true },
          yPercent: 110,
          duration: 1,
          stagger: 0.08,
          ease: 'expo.out'
        });
      });
    });
    return () => ctx.revert();
  }, []);
};

/**
 * Barres de compétence : remplissage à l'arrivée dans le viewport + compteur de %.
 */
export const useSkillBars = () => {
  useEffect(() => {
    if (prefersReduced) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.skill-row').forEach((row) => {
        const fill = row.querySelector('.skill-row__fill');
        const val = row.querySelector('.skill-row__val');
        const target = parseInt(row.dataset.value || '0', 10);

        gsap.set(fill, { scaleX: 0, transformOrigin: 'left center' });

        ScrollTrigger.create({
          trigger: row,
          start: 'top 90%',
          once: true,
          onEnter: () => {
            gsap.to(fill, { scaleX: target / 100, duration: 1.3, ease: 'power3.inOut' });
            if (val) {
              const counter = { v: 0 };
              gsap.to(counter, {
                v: target,
                duration: 1.3,
                ease: 'power3.inOut',
                onUpdate: () => {
                  val.textContent = String(Math.round(counter.v)).padStart(2, '0');
                }
              });
            }
          }
        });
      });
    });
    return () => ctx.revert();
  }, []);
};

/**
 * Parallaxe douce sur les médias plein cadre (hero + contact).
 */
export const useParallax = () => {
  useEffect(() => {
    if (prefersReduced) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.js-parallax').forEach((media) => {
        const img = media.querySelector('img');
        if (!img) return;
        gsap.fromTo(
          img,
          { yPercent: -8 },
          {
            yPercent: 8,
            ease: 'none',
            scrollTrigger: {
              trigger: media,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true
            }
          }
        );
      });
    });
    return () => ctx.revert();
  }, []);
};

/**
 * Survol des projets : zoom image + bascule N&B → couleur.
 */
export const usePortfolioHover = () => {
  useEffect(() => {
    if (prefersReduced) return;
    const cards = gsap.utils.toArray('.work-item');
    const enter = (card) => () => {
      const img = card.querySelector('img');
      if (img) gsap.to(img, { scale: 1.06, filter: 'grayscale(0)', duration: 0.7, ease: 'power3.out' });
    };
    const leave = (card) => () => {
      const img = card.querySelector('img');
      if (img) gsap.to(img, { scale: 1, filter: 'grayscale(1)', duration: 0.7, ease: 'power3.out' });
    };
    const handlers = cards.map((card) => {
      const e = enter(card);
      const l = leave(card);
      card.addEventListener('mouseenter', e);
      card.addEventListener('mouseleave', l);
      return { card, e, l };
    });
    return () => handlers.forEach(({ card, e, l }) => {
      card.removeEventListener('mouseenter', e);
      card.removeEventListener('mouseleave', l);
    });
  }, []);
};

/**
 * Boutons / liens magnétiques : suivent légèrement le curseur.
 */
export const useMagnetic = () => {
  useEffect(() => {
    if (prefersReduced || !window.matchMedia('(pointer: fine)').matches) return;
    const items = gsap.utils.toArray('[data-magnetic]');
    const moves = items.map((el) => {
      const setX = gsap.quickTo(el, 'x', { duration: 0.4, ease: 'power3.out' });
      const setY = gsap.quickTo(el, 'y', { duration: 0.4, ease: 'power3.out' });
      const onMove = (ev) => {
        const r = el.getBoundingClientRect();
        const mx = ev.clientX - (r.left + r.width / 2);
        const my = ev.clientY - (r.top + r.height / 2);
        setX(mx * 0.35);
        setY(my * 0.35);
      };
      const onLeave = () => { setX(0); setY(0); };
      el.addEventListener('mousemove', onMove);
      el.addEventListener('mouseleave', onLeave);
      return { el, onMove, onLeave };
    });
    return () => moves.forEach(({ el, onMove, onLeave }) => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    });
  }, []);
};

/**
 * Curseur custom : un anneau qui suit la souris et grossit sur les éléments interactifs.
 */
export const useCursor = () => {
  useEffect(() => {
    if (prefersReduced || !window.matchMedia('(pointer: fine)').matches) return;

    const ring = document.createElement('div');
    ring.className = 'cursor-ring';
    const dot = document.createElement('div');
    dot.className = 'cursor-dot';
    document.body.append(ring, dot);
    document.body.classList.add('has-custom-cursor');

    const setRingX = gsap.quickTo(ring, 'x', { duration: 0.45, ease: 'power3.out' });
    const setRingY = gsap.quickTo(ring, 'y', { duration: 0.45, ease: 'power3.out' });
    const setDotX = gsap.quickTo(dot, 'x', { duration: 0.08, ease: 'power3.out' });
    const setDotY = gsap.quickTo(dot, 'y', { duration: 0.08, ease: 'power3.out' });

    const onMove = (e) => {
      setRingX(e.clientX);
      setRingY(e.clientY);
      setDotX(e.clientX);
      setDotY(e.clientY);
    };

    const interactive = 'a, button, [data-magnetic], .work-item, [role="switch"]';
    const onOver = (e) => {
      if (e.target.closest(interactive)) ring.classList.add('cursor-ring--active');
    };
    const onOut = (e) => {
      if (e.target.closest(interactive)) ring.classList.remove('cursor-ring--active');
    };

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
      ring.remove();
      dot.remove();
      document.body.classList.remove('has-custom-cursor');
    };
  }, []);
};

/**
 * Effet "ballon d'eau" : chaque lettre du titre gonfle au survol avec un
 * rebond élastique (le scale augmente puis se stabilise en tremblotant).
 */
export const useLetterBalloon = () => {
  useEffect(() => {
    if (prefersReduced) return;
    const chars = gsap.utils.toArray('.hero__title .char');
    const handlers = chars.map((ch) => {
      const enter = () =>
        gsap.to(ch, { scale: 1.65, duration: 0.55, ease: 'elastic.out(1, 0.3)' });
      const leave = () =>
        gsap.to(ch, { scale: 1, duration: 0.7, ease: 'elastic.out(1, 0.35)' });
      ch.addEventListener('mouseenter', enter);
      ch.addEventListener('mouseleave', leave);
      return { ch, enter, leave };
    });
    return () => handlers.forEach(({ ch, enter, leave }) => {
      ch.removeEventListener('mouseenter', enter);
      ch.removeEventListener('mouseleave', leave);
    });
  }, []);
};

/**
 * Regroupe tous les comportements d'une page pour alléger les composants.
 */
export const useEditorial = () => {
  useHeroIntro();
  useScrollReveal();
  useSkillBars();
  useParallax();
  usePortfolioHover();
  useMagnetic();
  useCursor();
  useLetterBalloon();
};
