import React from 'react';
import './Styles.css';
import bckgrnd1 from './imgs/bckgrnd/bckgrnd-web1.png'
import bckgrnd2 from './imgs/bckgrnd/bckgrnd-web2.png'
// import bckgrnd3 from './imgs/bckgrnd/bckgrnd-web3.png'
import iconbrush from './imgs/icons/brush-2.png'
import iconsimcard from './imgs/icons/simcard.png'
import iconmobile from './imgs/icons/mobile.png'
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
          <h1>Alternance Développeur Web Full Stack / Front End</h1>
          <hr />
          <span>Transformons des lignes de code en expériences visuelles.</span>
        </div>
        <p>RETITA ROGER</p>
      </section>
      <section className="apropos-section">
        <h2>A PROPOS</h2>
        <div className="contents">
          <div className="box-text">
            <p >Je m'appelle Roger RETITA, j'approche de mes 25 ans cette année. Né et grandi à Madagascar, je suis une personne naturellement curieuse, aimant découvrir de nouvelles choses. En arrivant en France, j'ai développé une passion pour le développement web, que j'aborde avec la même rigueur et précision que mes autres intérêts artistiques.</p>
            <p >Pour moi, le développement web ne diffère pas tant de la création musicale. Dans les deux domaines, il est crucial de veiller à ce que le travail soit bien présenté et accessible sur tous les supports, que ce soit une tablette, un ordinateur ou un téléphone. Cette attention au détail assure une expérience utilisateur optimale, quelle que soit la plateforme utilisée.</p>
            <p >Je suis une personne appliquée dans mon travail, prenant le temps nécessaire avant de finaliser un projet, peu importe le temps que cela peut prendre. M'accepter au sein de votre entreprise, c'est accepter ma curiosité et ma joie de vivre.</p>
          </div>
        </div>
        <button className='web'>Contact</button>
        <div className="box-img">
          <img src={bckgrnd2} alt="image of progremer how work" />
        </div>
      </section>
      <section className="skills-section">
        <h2>SKILLS</h2>
        <div className='skills-section-bx-contents'>
          <div className='one-box-content'>
            <h3><img src={iconbrush} alt="icon de crayon" />Design + Development</h3>
            <p>Clean, modern designs, optimized for performance, search engines, and converting users to customers</p>
          </div>
          <div className='one-box-content'>
            <h3><img src={iconsimcard} alt="icon de crayon" />Technology</h3>
            <p>Combined all the latest technologies to a progressive website.</p>
          </div>
          <div className='one-box-content'>
            <h3><img src={iconmobile} alt="icon de crayon" />Always Responsive</h3>
            <p>A responsive design makes your website accesible to all users, regardless of ther device.</p>
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
                  <div className="progress-bar" style={{width: '90%'}}>
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
                  <div className="progress-bar" style={{width: '85%'}}>
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
                  <div className="progress-bar" style={{width: '80%'}}>
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
                  <div className="progress-bar" style={{width: '49%'}}>
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
                  <div className="progress-bar" style={{width: '75%'}}>
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
                  <div className="progress-bar" style={{width: '80%'}}>
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
                  <div className="progress-bar" style={{width: '40%'}}>
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
                  <div className="progress-bar" style={{width: '50%'}}>
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
                  <div className="progress-bar" style={{width: '60%'}}>
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
                  <div className="progress-bar" style={{width: '56%'}}>
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
                  <div className="progress-bar" style={{width: '62%'}}>
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
                  <div className="progress-bar" style={{width: '80%'}}>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='portfolio-section'>
        <div className='portfolio-head-content'>
          <h2>PORTFOLIO</h2>
          <p>Découvrez un aperçu de mes réalisations pendant mon alternance et ma formation. Pour explorer davantage chaque projet, consultez mon profil <a href="https://github.com/rogerK2RK?tab=repositories">GitHub</a>.</p>
        </div>
        <div className='bx-all-portfolio'>
        <div className='bx-one-portfolio'>
            <a href="https://rogerretita.editorx.io/mysite">
              <img src={portfolio} alt=" minature site portfolio" />
            </a>
          </div>
          <div className='bx-one-portfolio'>
            <a href="https://doohit.fr/">
              <img src={doohit} alt=" minature site doohit" />
            </a>
          </div>
          <div className='bx-one-portfolio'>
            <a href="https://rogerk2rk.github.io/P3_01_lienGithub/index.html">
              <img src={ohmyfood} alt=" minature site oh My food" />
            </a>
          </div>
          <div className='bx-one-portfolio'>
            <a href="https://rogerk2rk.github.io/P6_Retita_Roger/">
              <img src={photographe} alt=" minature site photographe" />
            </a>
          </div>
          <div className='bx-one-portfolio'>
            <a href="https://rogerk2rk.github.io/projetfinal-semaine1/">
              <img src={harmonia} alt=" minature site harmonia" />
            </a>
          </div>
          <div className='bx-one-portfolio'>
            <a href="https://rogerk2rk.github.io/P4_RETITA_Roger/">
              <img src={gameone} alt=" minature site gameone" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Web;
