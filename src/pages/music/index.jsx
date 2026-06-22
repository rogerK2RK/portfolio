import { Element } from 'react-scroll';
import { useEditorial } from '../../hooks/useAnimations';
import NavIndex from '../../components/navIndex/index.jsx';
import SplitText from '../../components/splitText/index.jsx';

import bckgrnd1 from './imgs/bckgrnd/Section1.png';
import bckgrnd2 from './imgs/bckgrnd/Rectangle4.png';
import bckgrnd3 from './imgs/bckgrnd/Rectangle12.png';

import monitor from './imgs/icons/monitor.png';
import musicIcon from './imgs/icons/music.png';

import github from './imgs/icons/github.png';
import beatstar from './imgs/icons/beatstar.png';
import soundcloud from './imgs/icons/soundcloud.png';
import youtube from './imgs/icons/youtube.png';
import linkedin from './imgs/icons/linkedin.png';

import flstudio from './imgs/icons/flstudio.png';
import protools from './imgs/icons/protools.png';
import photoshop from './imgs/icons/photoshop.png';
import premierepro from './imgs/icons/premierepro.png';

const SKILLS = [
  { name: 'FL Studio', val: 90, icon: flstudio },
  { name: 'Pro Tools', val: 30, icon: protools },
  { name: 'Première Pro', val: 62, icon: premierepro },
  { name: 'Photoshop', val: 56, icon: photoshop }
];

const STATEMENTS = [
  { n: '01', title: 'Production', text: "J'utilise les outils plébiscités par les producteurs du monde entier." },
  { n: '02', title: 'Écoute optimale', text: 'Un son calibré pour les écouteurs comme pour les enceintes de monitoring.' }
];

const TRACKS = [
  { src: 'https://www.youtube.com/embed/EAe9R1XxQ2c', name: 'Maeva', tag: 'Afro Love ↗' },
  { src: 'https://www.youtube.com/embed/wf8e1FvriCo', name: 'Slowly', tag: 'Afro Love ↗' },
  { src: 'https://www.youtube.com/embed/Y9yoh8HDPtE', name: 'Sugar', tag: 'Afro Love ↗' },
  { src: 'https://www.youtube.com/embed/bsKZGSoZPGY', name: 'Jollof', tag: 'Afro Love ↗' },
  { src: 'https://www.youtube.com/embed/rd9gOr59KbI', name: 'Andando Pela Orla', tag: 'Slowed ↗' },
  { src: 'https://www.youtube.com/embed/LDdPd1BuTJk', name: 'Anabella', tag: 'Afro Love ↗' }
];

const NAV = [
  { name: 'about', label: 'À propos' },
  { name: 'skills', label: 'Compétences' },
  { name: 'compositions', label: 'Compositions' },
  { name: 'contact', label: 'Contact' }
];

const MARQUEE = ['Beatmaker', 'Mixage', 'Composition', 'Afro', 'FL Studio', 'Mastering', 'Rog One Beats'];

function Music() {
  useEditorial();

  return (
    <div className="page page--music">
      <NavIndex sections={NAV} />

      {/* ---------- HERO ---------- */}
      <header className="hero">
        <div className="hero__meta eyebrow js-hero-meta">
          <span>Lille · FR</span>
          <span>MAO · 6+ ans</span>
          <span className="accent">(00 — Accueil)</span>
        </div>

        <div className="hero__grid">
          <div className="hero__type">
            <p className="hero__kicker eyebrow js-hero-fade">Rog One Beats · 27 ans</p>
            <h1 className="hero__title">
              <span className="line"><span className="js-line" aria-label="Beatmaker"><SplitText text="Beatmaker" /></span></span>
              <span className="line"><span className="js-line stroke" aria-label="Mixeur"><SplitText text="Mixeur" /></span></span>
              <span className="line"><span className="js-line" aria-label="Compositeur">
                <SplitText text="Compositeur" /><span className="mark char" aria-hidden="true">.</span>
              </span></span>
            </h1>
            <p className="hero__lead js-hero-fade">
              Laissez-vous transporter par le rythme de la musique.
            </p>
          </div>

          <figure className="hero__media js-hero-media js-parallax">
            <img src={bckgrnd1} alt="Studio de production musicale" />
            <figcaption>Fig. 01 — Studio</figcaption>
          </figure>
        </div>

        <div className="marquee" aria-hidden="true">
          <div className="marquee__track">
            {[...MARQUEE, ...MARQUEE].map((word, i) => (
              <span key={i}>{word}<span className="dot"> ✦ </span></span>
            ))}
          </div>
        </div>
      </header>

      {/* ---------- À PROPOS ---------- */}
      <Element name="about">
        <section className="block">
          <div className="block__head">
            <span className="block__num">01</span>
            <h2 className="block__title js-clip">À&nbsp;Propos</h2>
          </div>
          <div className="about__body">
            <div className="about__lead js-mask">
              <p className="js-mask-line">Autodidacte,</p>
              <p className="js-mask-line">la musique <span className="accent">au détail</span></p>
              <p className="js-mask-line">près.</p>
            </div>
            <div className="about__cols" data-reveal>
              <p>Je m&apos;appelle Roger RETITA, j&apos;ai 27 ans. Né et grandi à Madagascar, j&apos;ai toujours été passionné par l&apos;art sous toutes ses formes. Dès mon plus jeune âge, j&apos;ai pratiqué le dessin, puis exploré la musique : chant, flûte, clavier, guitare et batterie. Au collège, je me suis intéressé au théâtre, rejoignant une troupe en troisième.</p>
              <p>Arrivé en France, j&apos;ai renoué avec la musique, plus précisément la MAO. Depuis plus de six ans, je m&apos;y adonne en autodidacte. La création musicale exige une attention minutieuse aux détails pour que le son soit optimal, sur des écouteurs, un téléphone ou des enceintes de monitoring.</p>
              <p>Je suis une personne appliquée, prenant le temps nécessaire avant de finaliser un projet. Travailler avec moi, c&apos;est s&apos;entourer de ma curiosité et de ma joie de vivre.</p>
            </div>
          </div>
          <figure className="about__media js-parallax" data-reveal>
            <img src={bckgrnd2} alt="Rog One Beats en studio" />
          </figure>
        </section>
      </Element>

      {/* ---------- COMPÉTENCES ---------- */}
      <Element name="skills">
        <section className="block">
          <div className="block__head">
            <span className="block__num">02</span>
            <h2 className="block__title js-clip">Compétences</h2>
          </div>

          <div className="statements">
            {STATEMENTS.map((s) => (
              <div className="statement" data-reveal key={s.n}>
                <span className="statement__num">{s.n}</span>
                <h3>
                  <img
                    src={s.n === '01' ? monitor : musicIcon}
                    alt=""
                    style={{ width: 22, height: 22, display: 'inline-block', verticalAlign: 'middle', marginRight: 10, filter: 'grayscale(1)' }}
                  />
                  {s.title}
                </h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>

          <ul className="skill-index">
            {SKILLS.map((s, i) => (
              <li className="skill-row" data-value={s.val} key={s.name}>
                <span className="skill-row__num">{String(i + 1).padStart(2, '0')}</span>
                <span className="skill-row__name"><img src={s.icon} alt="" />{s.name}</span>
                <span className="skill-row__track"><span className="skill-row__fill" /></span>
                <span className="skill-row__val">{s.val}</span>
              </li>
            ))}
          </ul>
        </section>
      </Element>

      {/* ---------- COMPOSITIONS ---------- */}
      <Element name="compositions">
        <section className="block block--work">
          <div className="block__head">
            <span className="block__num">03</span>
            <h2 className="block__title js-clip">Compositions</h2>
          </div>
          <p className="work-intro" data-reveal>
            Un aperçu de mes compositions, de mon mixage et de mes créations en tant que beatmaker.
            Pour tout écouter, rendez-vous sur ma chaîne{' '}
            <a href="https://www.youtube.com/channel/UCDECuuPMRTnP4NWFvSC2jaA">YouTube</a>.
          </p>
          <div className="work-grid">
            {TRACKS.map((t, i) => (
              <div className="work-item work-item--video" data-reveal key={t.src}>
                <div className="work-item__frame">
                  <iframe
                    src={t.src}
                    title={t.name}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
                <div className="work-item__bar">
                  <span className="name">{String(i + 1).padStart(2, '0')} / {t.name}</span>
                  <span className="tag">{t.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Element>

      {/* ---------- CONTACT ---------- */}
      <Element name="contact">
        <section className="block block--contact">
          <div className="contact__bg js-parallax">
            <img src={bckgrnd3} alt="" />
          </div>
          <div className="contact__inner">
            <div className="block__head">
              <span className="block__num">04</span>
              <h2 className="block__title js-clip">Contact</h2>
            </div>
            <a className="contact__mail" href="mailto:rogonebeats@gmail.com" data-reveal>
              rogonebeats@gmail.com
            </a>
            <div className="contact__rows">
              <div className="contact__row" data-reveal>
                <span className="label">Adresse</span>
                <p>Lille, France</p>
              </div>
              <div className="contact__row" data-reveal>
                <span className="label">Téléphone</span>
                <a href="tel:+33668347755">06 68 34 77 55</a>
              </div>
              <div className="contact__row" data-reveal>
                <span className="label">Mobilité</span>
                <p>Disponible dans toute la France</p>
              </div>
            </div>
          </div>
        </section>
      </Element>

      {/* ---------- FOOTER ---------- */}
      <footer className="footer">
        <div className="footer__strip">
          <p className="footer__credit">© 2026 — Retita Roger / Rog One Beats</p>
          <div className="footer__socials">
            <a href="https://github.com/rogerK2RK?tab=repositories" aria-label="GitHub"><img src={github} alt="GitHub" /></a>
            <a href="https://www.linkedin.com/in/roger-retita-9402b1197/" aria-label="LinkedIn"><img src={linkedin} alt="LinkedIn" /></a>
            <a href="https://www.youtube.com/channel/UCDECuuPMRTnP4NWFvSC2jaA" aria-label="YouTube"><img src={youtube} alt="YouTube" /></a>
            <a href="https://soundcloud.com/user-406770951" aria-label="SoundCloud"><img src={soundcloud} alt="SoundCloud" /></a>
            <a href="https://www.beatstars.com/rogerretita14426" aria-label="BeatStars"><img src={beatstar} alt="BeatStars" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Music;
