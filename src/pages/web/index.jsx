import { Link, Element } from 'react-scroll';
import { useEditorial } from '../../hooks/useAnimations';
import NavIndex from '../../components/navIndex/index.jsx';
import SplitText from '../../components/splitText/index.jsx';

import bckgrnd1 from './imgs/bckgrnd/bckgrnd-web1.png';
import bckgrnd2 from './imgs/bckgrnd/bckgrnd-web2.png';
import bckgrnd3 from './imgs/bckgrnd/bckgrnd-web3.png';

import github from './imgs/icons/github.png';
import beatstar from './imgs/icons/beatstar.png';
import soundcloud from './imgs/icons/soundcloud.png';
import youtube from './imgs/icons/youtube.png';
import linkedin from './imgs/icons/linkedin.png';

import doohit from './imgs/prtfl/doohit.fr_.png';
import gameone from './imgs/prtfl/rogerk2rk.github.io_P4_RETITA_Roger_.png';
import photographe from './imgs/prtfl/rogerk2rk.github.io_P6_Retita_Roger_.png';
import portfolio from './imgs/prtfl/rogerretita.editorx.io_mysite.png';
import harmonia from './imgs/prtfl/127.0.0.1_5500_index.html.png';
import ohmyfood from './imgs/prtfl/rogerk2rk.github.io_P3_01_lienGithub_index.html.png';

const STACK = [
  { cat: 'Front', items: ['JavaScript', 'React', 'Next.js'] },
  { cat: 'Back', items: ['Node.js'] },
  { cat: 'CMS', items: ['WordPress', 'Elementor', 'PrestaShop'] },
  { cat: 'Design', items: ['Figma'] },
  { cat: 'Outils', items: ['VS Code', 'ChatGPT', 'Claude Code'] },
  { cat: 'Marketing', items: ['Brevo', 'Connectif'] }
];

const STATEMENTS = [
  { n: '01', title: 'Front-end', text: "Des interfaces modernes en JavaScript (React, Next.js), pensées pour la performance et la conversion." },
  { n: '02', title: 'Back & CMS', text: 'Du sur-mesure avec Node.js, ou des sites évolutifs sous WordPress, Elementor et PrestaShop.' },
  { n: '03', title: 'Marketing', text: "De l'emailing à l'automatisation (Brevo, Connectif) pour transformer le trafic en clients." }
];

const WORK = [
  { img: portfolio, url: 'https://rogerretita.editorx.io/mysite', name: 'Portfolio', tag: 'Site vitrine ↗' },
  { img: doohit, url: 'https://doohit.fr/', name: 'Doohit', tag: 'Plateforme ↗' },
  { img: ohmyfood, url: 'https://rogerk2rk.github.io/P3_01_lienGithub/index.html', name: 'Ohmyfood', tag: 'Animation CSS ↗' },
  { img: photographe, url: 'https://rogerk2rk.github.io/P6_Retita_Roger/', name: 'Photographe', tag: 'Site photo ↗' },
  { img: harmonia, url: 'https://rogerk2rk.github.io/projetfinal-semaine1/', name: 'Harmonia', tag: 'Projet final ↗' },
  { img: gameone, url: 'https://rogerk2rk.github.io/P4_RETITA_Roger/', name: 'Game One', tag: 'Landing ↗' }
];

const NAV = [
  { name: 'about', label: 'À propos' },
  { name: 'skills', label: 'Compétences' },
  { name: 'portfolio', label: 'Portfolio' },
  { name: 'contact', label: 'Contact' }
];

const MARQUEE = ['HTML', 'CSS', 'JavaScript', 'React', 'WordPress', 'PrestaShop', 'Figma', 'UI / UX', 'Claude Code', 'Full Stack'];

function Web() {
  useEditorial();

  return (
    <div className="page page--web">
      <NavIndex sections={NAV} />

      {/* ---------- HERO ---------- */}
      <header className="hero">
        <div className="hero__meta eyebrow js-hero-meta">
          <span>Lille · FR</span>
          <span>Full Stack</span>
          <span className="accent">(00 — Accueil)</span>
        </div>

        <div className="hero__grid">
          <div className="hero__type">
            <p className="hero__kicker eyebrow js-hero-fade">Retita Roger · 27 ans</p>
            <h1 className="hero__title">
              <span className="line"><span className="js-line" aria-label="Développeur"><SplitText text="Développeur" /></span></span>
              <span className="line"><span className="js-line" aria-label="Intégrateur"><SplitText text="Intégrateur" /></span></span>
              <span className="line"><span className="js-line stroke" aria-label="Web Full"><SplitText text="Web Full" /></span></span>
              <span className="line"><span className="js-line" aria-label="Stack">
                <SplitText text="Stack" /><span className="mark char" aria-hidden="true">.</span>
              </span></span>
            </h1>
            <p className="hero__lead js-hero-fade">
              Transformons des lignes de code en expériences visuelles.
            </p>
          </div>

          <figure className="hero__media js-hero-media js-parallax">
            <img src={bckgrnd1} alt="Développeur web au travail devant son écran" />
            <figcaption>Fig. 01 — At work</figcaption>
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
              <p className="js-mask-line">Né à Madagascar,</p>
              <p className="js-mask-line">développeur <span className="accent">par passion</span></p>
              <p className="js-mask-line">en France.</p>
            </div>
            <div className="about__cols" data-reveal>
              <p>Je m&apos;appelle Roger RETITA, j&apos;ai 27 ans. Né et grandi à Madagascar, je suis une personne naturellement curieuse, aimant découvrir de nouvelles choses. En arrivant en France, j&apos;ai développé une passion pour le développement web, que j&apos;aborde avec la même rigueur et précision que mes autres intérêts artistiques. Aujourd&apos;hui développeur web full stack, j&apos;en ai fait mon métier.</p>
              <p>Pour moi, le développement web ne diffère pas tant de la création musicale. Dans les deux domaines, il est crucial que le travail soit bien présenté et accessible sur tous les supports : tablette, ordinateur ou téléphone. Cette attention au détail assure une expérience utilisateur optimale.</p>
              <p>Je suis une personne appliquée, prenant le temps nécessaire avant de finaliser un projet. Travailler avec moi, c&apos;est s&apos;entourer de ma curiosité et de ma joie de vivre.</p>
              <Link to="contact" smooth={true} duration={600}>
                <button className="btn" data-magnetic>Prendre contact <span className="arrow">→</span></button>
              </Link>
            </div>
          </div>
          <figure className="about__media js-parallax" data-reveal>
            <img src={bckgrnd2} alt="Roger Retita, développeur web" />
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
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>

          <div className="stack">
            {STACK.map((g) => (
              <div className="stack__row" data-reveal key={g.cat}>
                <span className="stack__cat">{g.cat}</span>
                <p className="stack__items">
                  {g.items.map((it, i) => (
                    <span className="stack__item" key={it}>
                      {it}
                      {i < g.items.length - 1 && <span className="sep"> / </span>}
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </section>
      </Element>

      {/* ---------- PORTFOLIO ---------- */}
      <Element name="portfolio">
        <section className="block block--work">
          <div className="block__head">
            <span className="block__num">03</span>
            <h2 className="block__title js-clip">Portfolio</h2>
          </div>
          <p className="work-intro" data-reveal>
            Un aperçu de mes réalisations pendant mon alternance et ma formation. Pour explorer
            davantage chaque projet, consultez mon profil{' '}
            <a href="https://github.com/rogerK2RK?tab=repositories">GitHub</a>.
          </p>
          <div className="work-grid">
            {WORK.map((w, i) => (
              <a className="work-item" href={w.url} target="_blank" rel="noreferrer" data-reveal key={w.name}>
                <div className="work-item__frame">
                  <img src={w.img} alt={`Aperçu du projet ${w.name}`} />
                </div>
                <div className="work-item__bar">
                  <span className="name">{String(i + 1).padStart(2, '0')} / {w.name}</span>
                  <span className="tag">{w.tag}</span>
                </div>
              </a>
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
            <a className="contact__mail" href="mailto:roger.retita@gmail.com" data-reveal>
              roger.retita@gmail.com
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
          <p className="footer__credit">© 2026 — Retita Roger / Conçu &amp; développé maison</p>
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

export default Web;
