import React from 'react';

import bckgrnd1 from './imgs/bckgrnd/Section1.png'
import bckgrnd2 from './imgs/bckgrnd/Rectangle4.png'
import bckgrnd3 from './imgs/bckgrnd/Rectangle12.png'

import monitor from './imgs/icons/monitor.png'
import music from './imgs/icons/music.png'

import location from './imgs/icons/location.png'
import mail from './imgs/icons/sms.png'
import call from './imgs/icons/call.png'

import github from './imgs/icons/github.png'
import beatstar from './imgs/icons/beatstar.png'
import soundcloud from './imgs/icons/soundcloud.png'
import youtube from './imgs/icons/youtube.png'


import flstudio from './imgs/icons/flstudio.png'
import protools from './imgs/icons/protools.png'
import photoshop from './imgs/icons/photoshop.png'
import premierepro from './imgs/icons/premierepro.png'



function Music() {
 

  return (
    <>
      <section className="first-section">
        <div className='first-section-box-img-bckgrnd'>
          <img className='bckgrnd' src={bckgrnd1} alt="image of progremer how work" />
        </div>
        <div className='first-section-content'>
          <h2 className='animated-title'>ROG ONE BEATS <br /> 25ANS</h2>
          <h1 className='animated-title'>Beatmaker / Mixeur / Compositeur</h1>
          <hr className='animated-title music'/>
          <span className='animated-title'>Laissez-vous transporter par le rythme de la musique.</span>
        </div>
      </section>
      <section className="apropos-section">
        <div className="contents">
          <h2 className='animated-title'>A PROPOS</h2>
          <div className="box-text">
            <p >Je m'appelle Roger RETITA, j'approche de mes 25 ans cette année. Né et grandi à Madagascar, j'ai toujours été passionné par l'art sous toutes ses formes. Dès mon plus jeune âge, j'ai pratiqué le dessin, puis j'ai exploré la musique sous diverses facettes : le chant, la flûte, le clavier, la guitare et la batterie. Au collège, je me suis intéressé au théâtre, rejoignant une troupe en troisième.</p>
            <p >Une fois arrivé en France, j'ai renoué avec ma passion pour la musique, plus précisément la MAO (musique assistée par ordinateur). Depuis bientôt 5 ans, je m'y adonne en autodidacte. Vous pouvez écouter certaines de mes créations sur ma chaîne YouTube. Pour moi, la création musicale exige une attention minutieuse aux détails pour garantir que le son soit optimal, que ce soit sur des écouteurs, un téléphone ou des enceintes de monitoring.</p>
            <p >Je suis une personne appliquée dans mon travail, prenant le temps nécessaire avant de finaliser un projet, peu importe le temps que cela peut prendre. M'accepter au sein de votre entreprise, c'est accepter ma curiosité et ma joie de vivre.</p>
          </div>
          <button className='music'>Contact</button>
        </div>
        <div className="box-img">
          <img src={bckgrnd2} alt="image of progremer how work" />
        </div>
      </section>
      <section className="skills-section">
        <h2 className='animated-title'>SKILLS</h2>
        <div className='skills-section-bx-contents'>
          <div className='one-box-content'>
            <h3><img src={monitor} alt="icon de crayon" />Outils de Production</h3>
            <p>Utilise les outils de production les plus avancés, plébiscités par les producteurs du monde entier.</p>
          </div>
          <div className='one-box-content'>
            <h3><img src={music} alt="icon de crayon" />Écoute Optimale</h3>
            <p>Profitez d'une expérience d'écoute optimale sur des enceintes stéréo de qualité ou des écouteurs de haute fidélité.</p>
          </div>
        </div>
        <div className='skills-section-bx-contents'>
          <div className='bx-group-comp'>
            <div className='bx-one-comp'>
              <img src={flstudio} alt="icon html" />
              <div className='bx-one-comp-content'>
                <div className='bx-one-comp-infos'>
                  <p>FL Studio</p>
                  <p>90%</p>
                </div>
                <div className='progress-container'>
                  <div className="progress-bar music" style={{width: '90%'}}>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='bx-group-comp'>
            <div className='bx-one-comp'>
              <img src={protools} alt="icon html" />
              <div className='bx-one-comp-content'>
                <div className='bx-one-comp-infos'>
                  <p>Pro Tools</p>
                  <p>30%</p>
                </div>
                <div className='progress-container'>
                  <div className="progress-bar music" style={{width: '30%'}}>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='bx-group-comp'>
            <div className='bx-one-comp'>
              <img src={premierepro} alt="icon figma" />
              <div className='bx-one-comp-content'>
                <div className='bx-one-comp-infos'>
                  <p>Premiere Pro</p>
                  <p>62%</p>
                </div>
                <div className='progress-container'>
                  <div className="progress-bar music" style={{width: '62%'}}>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='bx-group-comp'>
            <div className='bx-one-comp'>
              <img src={photoshop} alt="icon figma" />
              <div className='bx-one-comp-content'>
                <div className='bx-one-comp-infos'>
                  <p>Photoshop</p>
                  <p>56%</p>
                </div>
                <div className='progress-container'>
                  <div className="progress-bar music" style={{width: '56%'}}>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='portfolio-section'>
        <div className='portfolio-head-content'>
          <h2 className='animated-title'>MES COMPOSITIONS</h2>
          <p>Laissez vous transporter par le rythme de la musique. Découvrez un aperçu de mes compositions musicales, de mes talents de mixeur et de mes créations en tant que beatmaker. Pour écouter toutes mes œuvres, consultez ma chaine <a className='txt-music' href="https://www.youtube.com/channel/UCDECuuPMRTnP4NWFvSC2jaA">YouTube</a>.</p>
        </div>
        <div className='bx-all-portfolio'>
          <div className='bx-one-portfolio'>
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/EAe9R1XxQ2c" title="[FREE] Tayc x Dadju x Teni Type Beat - &quot; Maeva &quot; | Instru Afro Love 2024" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div className='bx-one-portfolio'>
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/wf8e1FvriCo" title="[FREE] Ckay x Rema x Oxlade x Omah Lay x Tayc Type Beat - &quot; Slowly &quot; | Instru Afro Love 2024" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div className='bx-one-portfolio'>
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Y9yoh8HDPtE" title="[FREE] Dadju x Tayc x Rema x Aya Nakamura x Victony Type Beat - &quot; Sugar &quot; | Instru Afro Love 2024" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div className='bx-one-portfolio'>
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/bsKZGSoZPGY" title="[FREE] Teni x Rema x Oxlade x Tyla Type Beat - &quot; Jollof &quot; | Instru Afro Love 2024" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div className='bx-one-portfolio'>
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/rd9gOr59KbI" title="&quot;Andando Pela Orla&quot; Gabriel Won [Slowed] Rog One Beats @gabrielwon" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div className='bx-one-portfolio'>
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/LDdPd1BuTJk" title="[FREE]  Khaid x Nasboy x Davido x Wande Coal Type Beat - &quot; Anabella &quot; | Instru Afro Love 2024" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
      </section>
      <section className='contact-section'>
        <div className='contact-section-box-img-bckgrnd'>
          <img className='bckgrnd' src={bckgrnd3} alt="image of code web" />
        </div>
        <div className='contact-section-content'>
          <h2 className='animated-title'>CONTACT</h2>
          <hr />
          <div>
            <h3><img src={location} alt="icon location" />Adresse Postale</h3>
            <a className='txt-music' href="https://maps.app.goo.gl/hCJrmcsMZjsA9vKX8">1 bd Jean Baptiste Carpeaux, 95200 Sarcelles</a>
            <h3><img src={mail} alt="icon mail" />Adresse Mail</h3>
            <a className='txt-music' href="mailto:rogonebeats@gmail.com">rogonebeats@gmail.com</a>
            <h3><img src={call} alt="icon call" />Téléphone</h3>
            <a className='txt-music' href="tel:+33668347755">06.68.34.77.55</a>
          </div>
          <p className='mobilite'>Mobilité dans toute la France</p>
        </div>
      </section>
      <footer>
        <p>© 2024 by RETITA Roger.</p>
        <div className='footer-bx-icon'>
          <a href="https://github.com/rogerK2RK?tab=repositories">
            <img src={github} alt="icon github" />
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

export default Music;
