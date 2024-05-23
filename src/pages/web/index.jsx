import React from 'react';
import { Link, Element } from 'react-scroll';

import bckgrnd1 from './imgs/bckgrnd/bckgrnd-web1.png'
import bckgrnd2 from './imgs/bckgrnd/bckgrnd-web2.png'
import bckgrnd3 from './imgs/bckgrnd/bckgrnd-web3.png'
// import bckgrnd3 from './imgs/bckgrnd/bckgrnd-web3.png'
import iconbrush from './imgs/icons/brush-2.png'
import iconsimcard from './imgs/icons/simcard.png'
import iconmobile from './imgs/icons/mobile.png'
import location from './imgs/icons/location.png'
import mail from './imgs/icons/sms.png'
import call from './imgs/icons/call.png'
import github from './imgs/icons/github.png'
import beatstar from './imgs/icons/beatstar.png'
import soundcloud from './imgs/icons/soundcloud.png'
import youtube from './imgs/icons/youtube.png'
import linkedin from './imgs/icons/linkedin.png'


import html from './imgs/icons/html.png'
import css from './imgs/icons/css.png'
import javascript from './imgs/icons/javascript.png'
import jquery from './imgs/icons/jquery.png'
import react from './imgs/icons/react.png'
import wordpress from './imgs/icons/wordpress.png'
import prestashop from './imgs/icons/prestashop.png'
import wix from './imgs/icons/wix.png'
import figma from './imgs/icons/figma.png'
import photoshop from './imgs/icons/photoshop.png'
import premierepro from './imgs/icons/premierepro.png'
import vscode from './imgs/icons/vscode.png'
import doohit from './imgs/prtfl/doohit.fr_.png'
import gameone from './imgs/prtfl/rogerk2rk.github.io_P4_RETITA_Roger_.png'
import photographe from './imgs/prtfl/rogerk2rk.github.io_P6_Retita_Roger_.png'
import portfolio from './imgs/prtfl/rogerretita.editorx.io_mysite.png'
import harmonia from './imgs/prtfl/127.0.0.1_5500_index.html.png'
import ohmyfood from './imgs/prtfl/rogerk2rk.github.io_P3_01_lienGithub_index.html.png'



function Web() {
 

  return (
    <>
      <section className="first-section">
        
        <div className='first-section-box-img-bckgrnd'>
          <img className='bckgrnd' src={bckgrnd1} alt="image of progremer how work" />
        </div>
        <div className='first-section-content'>
          <h2 className='animated-title'>RETITA ROGER <br /> 25ANS</h2>
          <h1 className='animated-title'>Alternance Développeur Web Full Stack / Front End</h1>
          <hr className='animated-title web'/>
          <span className='animated-title'>Transformons des lignes de code en expériences visuelles.</span>
        </div>
      </section>
      <section className="apropos-section">
        <div className="contents">
          <h2 className='animated-title'>A PROPOS</h2>
          <div className="box-text">
            <p >Je m'appelle Roger RETITA, j'approche de mes 25 ans cette année. Né et grandi à Madagascar, je suis une personne naturellement curieuse, aimant découvrir de nouvelles choses. En arrivant en France, j'ai développé une passion pour le développement web, que j'aborde avec la même rigueur et précision que mes autres intérêts artistiques.</p>
            <p >Pour moi, le développement web ne diffère pas tant de la création musicale. Dans les deux domaines, il est crucial de veiller à ce que le travail soit bien présenté et accessible sur tous les supports, que ce soit une tablette, un ordinateur ou un téléphone. Cette attention au détail assure une expérience utilisateur optimale, quelle que soit la plateforme utilisée.</p>
            <p >Je suis une personne appliquée dans mon travail, prenant le temps nécessaire avant de finaliser un projet, peu importe le temps que cela peut prendre. M'accepter au sein de votre entreprise, c'est accepter ma curiosité et ma joie de vivre.</p>
          </div>
          <Link to="target-section" smooth={true} duration={500}>
            <button className='web'>Contact</button>
          </Link>
        </div>
        <div className="box-img">
          <img src={bckgrnd2} alt="image of progremer how work" />
        </div>
      </section>
      <section className="skills-section">
        <h2 className='animated-title'>SKILLS</h2>
        <div className='skills-section-bx-contents'>
          <div className='one-box-content'>
            <h3><img src={iconbrush} alt="icon de crayon" />Design + Dévelopepment</h3>
            <p>Des designs épurés et modernes, optimisés pour les performances, le référencement, et la conversion des utilisateurs en clients.</p>
          </div>
          <div className='one-box-content'>
            <h3><img src={iconsimcard} alt="icon de crayon" />Technologie</h3>
            <p>Combined all the latest technologies to a progressive website.</p>
          </div>
          <div className='one-box-content'>
            <h3><img src={iconmobile} alt="icon de crayon" />Responsive</h3>
            <p>Un design réactif garantit que votre site web est accessible à tous les utilisateurs, quel que soit leur appareil.</p>
          </div>
        </div>
        <div className='skills-section-bx-contents'>
          <div className='bx-group-comp'>
            <div className='bx-one-comp'>
              <img src={html} alt="icon html" />
              <div className='bx-one-comp-content'>
                <div className='bx-one-comp-infos'>
                  <p>HTML</p>
                  <p>90%</p>
                </div>
                <div className='progress-container'>
                  <div className="progress-bar web" style={{width: '90%'}}>
                  </div>
                </div>
              </div>
            </div>
            <div className='bx-one-comp'>
              <img src={css} alt="icon css" />
              <div className='bx-one-comp-content'>
                <div className='bx-one-comp-infos'>
                  <p>CSS</p>
                  <p>85%</p>
                </div>
                <div className='progress-container'>
                  <div className="progress-bar web" style={{width: '85%'}}>
                  </div>
                </div>
              </div>
            </div>
            <div className='bx-one-comp'>
              <img src={javascript} alt="icon javascript" />
              <div className='bx-one-comp-content'>
                <div className='bx-one-comp-infos'>
                  <p>JavaScript</p>
                  <p>80%</p>
                </div>
                <div className='progress-container'>
                  <div className="progress-bar web" style={{width: '80%'}}>
                  </div>
                </div>
              </div>
            </div>
            <div className='bx-one-comp'>
              <img src={jquery} alt="icon jquery" />
              <div className='bx-one-comp-content'>
                <div className='bx-one-comp-infos'>
                  <p>JQuery</p>
                  <p>49%</p>
                </div>
                <div className='progress-container'>
                  <div className="progress-bar web" style={{width: '49%'}}>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='bx-group-comp'>
            <div className='bx-one-comp'>
              <img src={react} alt="icon html" />
              <div className='bx-one-comp-content'>
                <div className='bx-one-comp-infos'>
                  <p>React(Redux)</p>
                  <p>75%</p>
                </div>
                <div className='progress-container'>
                  <div className="progress-bar web" style={{width: '75%'}}>
                  </div>
                </div>
              </div>
            </div>
            <div className='bx-one-comp'>
              <img src={wordpress} alt="icon wordpress" />
              <div className='bx-one-comp-content'>
                <div className='bx-one-comp-infos'>
                  <p>WordPress</p>
                  <p>80%</p>
                </div>
                <div className='progress-container'>
                  <div className="progress-bar web" style={{width: '80%'}}>
                  </div>
                </div>
              </div>
            </div>
            <div className='bx-one-comp'>
              <img src={prestashop} alt="icon prestashop" />
              <div className='bx-one-comp-content'>
                <div className='bx-one-comp-infos'>
                  <p>PrestaShop</p>
                  <p>40%</p>
                </div>
                <div className='progress-container'>
                  <div className="progress-bar web" style={{width: '40%'}}>
                  </div>
                </div>
              </div>
            </div>
            <div className='bx-one-comp'>
              <img src={wix} alt="icon wix" />
              <div className='bx-one-comp-content'>
                <div className='bx-one-comp-infos'>
                  <p>Wix</p>
                  <p>50%</p>
                </div>
                <div className='progress-container'>
                  <div className="progress-bar web" style={{width: '50%'}}>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='bx-group-comp'>
            <div className='bx-one-comp'>
              <img src={figma} alt="icon figma" />
              <div className='bx-one-comp-content'>
                <div className='bx-one-comp-infos'>
                  <p>Figma</p>
                  <p>60%</p>
                </div>
                <div className='progress-container'>
                  <div className="progress-bar web" style={{width: '60%'}}>
                  </div>
                </div>
              </div>
            </div>
            <div className='bx-one-comp'>
              <img src={photoshop} alt="icon photoshop" />
              <div className='bx-one-comp-content'>
                <div className='bx-one-comp-infos'>
                  <p>Photoshop</p>
                  <p>56%</p>
                </div>
                <div className='progress-container'>
                  <div className="progress-bar web" style={{width: '56%'}}>
                  </div>
                </div>
              </div>
            </div>
            <div className='bx-one-comp'>
              <img src={premierepro} alt="icon premierepro" />
              <div className='bx-one-comp-content'>
                <div className='bx-one-comp-infos'>
                  <p>Première Pro</p>
                  <p>62%</p>
                </div>
                <div className='progress-container'>
                  <div className="progress-bar web" style={{width: '62%'}}>
                  </div>
                </div>
              </div>
            </div>
            <div className='bx-one-comp'>
              <img src={vscode} alt="icon vscode" />
              <div className='bx-one-comp-content'>
                <div className='bx-one-comp-infos'>
                  <p>Vs Code</p>
                  <p>80%</p>
                </div>
                <div className='progress-container'>
                  <div className="progress-bar web" style={{width: '80%'}}>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <button className='show-skills web'>Voir plus</button> */}
      </section>
      <section className='portfolio-section'>
        <div className='portfolio-head-content'>
          <h2 className='animated-title'>PORTFOLIO</h2>
          <p>Découvrez un aperçu de mes réalisations pendant mon alternance et ma formation. Pour explorer davantage chaque projet, consultez mon profil <a className='txt-web' href="https://github.com/rogerK2RK?tab=repositories">GitHub</a>.</p>
        </div>
        <div className='bx-all-portfolio'>
        <div className='bx-one-portfolio'>
            <a href="https://rogerretita.editorx.io/mysite">
              <img src={portfolio} className='img-prtf' alt=" minature site portfolio" />
            </a>
          </div>
          <div className='bx-one-portfolio'>
            <a href="https://doohit.fr/">
              <img src={doohit} className='img-prtf' alt=" minature site doohit" />
            </a>
          </div>
          <div className='bx-one-portfolio'>
            <a href="https://rogerk2rk.github.io/P3_01_lienGithub/index.html">
              <img src={ohmyfood} className='img-prtf' alt=" minature site oh My food" />
            </a>
          </div>
          <div className='bx-one-portfolio'>
            <a href="https://rogerk2rk.github.io/P6_Retita_Roger/">
              <img src={photographe} className='img-prtf' alt=" minature site photographe" />
            </a>
          </div>
          <div className='bx-one-portfolio'>
            <a href="https://rogerk2rk.github.io/projetfinal-semaine1/">
              <img src={harmonia} className='img-prtf' alt=" minature site harmonia" />
            </a>
          </div>
          <div className='bx-one-portfolio'>
            <a href="https://rogerk2rk.github.io/P4_RETITA_Roger/">
              <img src={gameone} className='img-prtf' alt=" minature site gameone" />
            </a>
          </div>
        </div>
      </section>
      <Element name="target-section">
        <section className='contact-section'>
          <div className='contact-section-box-img-bckgrnd'>
            <img className='bckgrnd' src={bckgrnd3} alt="image of code web" />
          </div>
          <div className='contact-section-content'>
            <h2 className='animated-title'>CONTACT</h2>
            <hr />
            <div>
              <h3><img src={location} alt="icon location" />Adresse Postale</h3>
              <a className='txt-web' href="https://maps.app.goo.gl/hCJrmcsMZjsA9vKX8">1 bd Jean Baptiste Carpeaux, 95200 Sarcelles</a>
              <h3><img src={mail} alt="icon mail" />Adresse Mail</h3>
              <a className='txt-web' href="mailto:roger.retita@gmail.com">roger.retita@gmail.com</a>
              <h3><img src={call} alt="icon call" />Téléphone</h3>
              <a className='txt-web' href="tel:+33668347755">06.68.34.77.55</a>
            </div>
            <p className='mobilite'>Mobilité dans toute la France</p>
          </div>
        </section>
      </Element>
      
      <footer>
        <p>© 2024 by RETITA Roger.</p>
        <div className='footer-bx-icon'>
          <a href="https://github.com/rogerK2RK?tab=repositories">
            <img src={github} alt="icon github" />
          </a>
          <a href="https://www.linkedin.com/in/roger-retita-9402b1197/">
            <img src={linkedin} alt="icon linkedin" />
          </a>
          <a href="https://www.youtube.com/channel/UCDECuuPMRTnP4NWFvSC2jaA">
            <img src={youtube} alt="incon youtube" />
          </a>
          <a href="https://soundcloud.com/user-406770951">
            <img src={soundcloud} alt="icon soundcloud" />
          </a>
          <a href="https://www.beatstars.com/rogerretita14426">
            <img src={beatstar} alt="icon beatstar" />
          </a>
        </div>
      </footer>
    </>
  );
}

export default Web;
