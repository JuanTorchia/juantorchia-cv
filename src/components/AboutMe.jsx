import React from "react";
import AboutMeImg from '../assets/images/unnamed.jpg';
import DotImg from '../assets/images/dot.png';
import BookOpenLine from 'remixicon-react/BookOpenLineIcon';
import GiftLine from 'remixicon-react/GiftLineIcon';
import EarthLineIcon from 'remixicon-react/EarthLineIcon';
import GameLineIcon from 'remixicon-react/GameLineIcon';
import MapPinLineIcon from 'remixicon-react/MapPinLineIcon'


class AboutMe extends React.Component {
    render() {
return <section className="section" id="about">
  <div className="container">
    <div className="row">
      <div className="col-12 mb-4">
        <h2 className="title">Acerca de mi <span className="title-border ml-4 pl-3" /></h2>
      </div>
    </div>
    <div className="row">
      <div className="col-md-4 mt-4 pt-2">
        <div className="about-border position-relative">
          <img className="img-fluid rounded about-img" src={AboutMeImg} alt />
          <img className="img-fluid about-dot d-none d-lg-block" src={DotImg} alt />
        </div>
      </div>
      <div className="col-md-7 offset-md-1 mt-4 pt-2">
        <dl className="row align-items-center about-content">
          <dt className="col-lg-3 col-md-4 col-6 font-weight-semibold"><GiftLine color="#772e8e" size="24px" style={{marginRight: 6 , paddingRight: 5, justiftyContent:"center", alignItems:"center"}}/> Cumpleaños</dt>
          <dd className="col-lg-9 col-md-8 col-6 text-muted mb-0"><span className="mr-xl-5 mr-4 font-weight-semibold">:</span>18/09/1989</dd>
          <dt className="col-lg-3 col-md-4 col-6 font-weight-semibold mt-xl-3 mt-2"><BookOpenLine color="#772e8e" size="24px" style={{marginRight: 6 , paddingRight: 5, justiftyContent:"center", alignItems:"center"}}/> Estudios</dt>
          <dd className="col-lg-9 col-md-8 col-6 text-muted mb-0 mt-xl-3 mt-2"><span className="mr-xl-5 mr-4 font-weight-semibold">:</span>Licenciado en Ciencias de la Computación: UBA</dd>
          <dt className="col-lg-3 col-md-4 col-6 font-weight-semibold mt-xl-3 mt-2"><EarthLineIcon color="#772e8e" size="24px" style={{marginRight: 6 , paddingRight: 5, justiftyContent:"center", alignItems:"center"}} /> Website</dt>
          <dd className="col-lg-9 col-md-8 col-6 text-muted mb-0 mt-xl-3 mt-2"><span className="mr-xl-5 mr-4 font-weight-semibold">:</span>www.juantorchia.com.ar</dd>
          <dt className="col-lg-3 col-md-4 col-6 font-weight-semibold mt-xl-3 mt-2"><GameLineIcon color="#772e8e" size="24px" style={{marginRight: 6 , paddingRight: 5, justiftyContent:"center", alignItems:"center"}} /> Intereses</dt>
          <dd className="col-lg-9 col-md-8 col-6 text-muted mb-0 mt-xl-3 mt-2"><span className="mr-xl-5 mr-4 font-weight-semibold">:</span>IOT, Linux, Open Source, Gaming</dd>
          <dt className="col-lg-3 col-md-4 col-6 font-weight-semibold mt-xl-3 mt-2"><MapPinLineIcon color="#772e8e" size="24px" style={{marginRight: 6 , paddingRight: 5, justiftyContent:"center", alignItems:"center"}} /> Locación</dt>
          <dd className="col-lg-9 col-md-8 col-6 text-muted mb-0 mt-xl-3 mt-2"><span className="mr-xl-5 mr-4 font-weight-semibold">:</span>Ciudad Autonoma de Buenos Aires, Argentina</dd>
        </dl>
        <div className="row">
          <div className="col-12 pt-xl-5 pt-3">
            <h6 className="font-weight-semibold">Soy Juan, Desarrollador de Software</h6>
            <p className="text-muted mt-xl-3 mt-2">
              Comence a programar hace varios años, fui aprendiendo a realizar paginas webs con PHP y aplicaciones desde muy chico. Fui mejorando en las paginas tanto en Javascript HTML y CSS, SASS. Rect, Nodejs, Webpack y realizar deploys aplicando la metodolgia devops  Actualmente me estoy especilizando en Desarrollo Java por mi actual trabajo, siempre estoy intentnado volcar todos mis conocimientos y experiencia de Infraestructura en servidores y poder destacarme como desarrollador. Mi Meta es trabajar en el desarrallo de una aplicacion de gran escala que se utilize a nivel mundial.
            </p>
            <a href="#" className="btn btn-outline-dark mt-3">Contactame</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>;
    }
}

export default AboutMe;

