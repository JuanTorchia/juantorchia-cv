import React from "react";
import AboutMeImg from '../assets/images/aboutme.jpg';
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
          <dt className="col-lg-3 col-md-4 col-6 font-weight-semibold"><GiftLine color="#ff4d41" size="24px" style={{marginRight: 6 , paddingRight: 5, justiftyContent:"center", alignItems:"center"}}/> Cumpleaños</dt>
          <dd className="col-lg-9 col-md-8 col-6 text-muted mb-0"><span className="mr-xl-5 mr-4 font-weight-semibold">:</span>18/09/1989</dd>
          <dt className="col-lg-3 col-md-4 col-6 font-weight-semibold mt-xl-3 mt-2"><BookOpenLine color="#ff4d41" size="24px" style={{marginRight: 6 , paddingRight: 5, justiftyContent:"center", alignItems:"center"}}/> Estudios</dt>
          <dd className="col-lg-9 col-md-8 col-6 text-muted mb-0 mt-xl-3 mt-2"><span className="mr-xl-5 mr-4 font-weight-semibold">:</span>Licenciado en Ciencias de la Computación: UBA</dd>
          <dt className="col-lg-3 col-md-4 col-6 font-weight-semibold mt-xl-3 mt-2"><EarthLineIcon color="#ff4d41" size="24px" style={{marginRight: 6 , paddingRight: 5, justiftyContent:"center", alignItems:"center"}} /> Website</dt>
          <dd className="col-lg-9 col-md-8 col-6 text-muted mb-0 mt-xl-3 mt-2"><span className="mr-xl-5 mr-4 font-weight-semibold">:</span>www.juantorchia.com.ar</dd>
          <dt className="col-lg-3 col-md-4 col-6 font-weight-semibold mt-xl-3 mt-2"><GameLineIcon color="#ff4d41" size="24px" style={{marginRight: 6 , paddingRight: 5, justiftyContent:"center", alignItems:"center"}} /> Intereses</dt>
          <dd className="col-lg-9 col-md-8 col-6 text-muted mb-0 mt-xl-3 mt-2"><span className="mr-xl-5 mr-4 font-weight-semibold">:</span>IOT, Linux, Open Source, Viajar</dd>
          <dt className="col-lg-3 col-md-4 col-6 font-weight-semibold mt-xl-3 mt-2"><MapPinLineIcon color="#ff4d41" size="24px" style={{marginRight: 6 , paddingRight: 5, justiftyContent:"center", alignItems:"center"}} /> Locación</dt>
          <dd className="col-lg-9 col-md-8 col-6 text-muted mb-0 mt-xl-3 mt-2"><span className="mr-xl-5 mr-4 font-weight-semibold">:</span>CABA, Buenos Aires, Argentina</dd>
        </dl>
        <div className="row">
          <div className="col-12 pt-xl-5 pt-3">
            <h6 className="font-weight-semibold">Soy Juan, Desarrollador y DevOps</h6>
            <p className="text-muted mt-xl-3 mt-2">
              Hola soy Juan Torchia, actualmente estoy realizando la Carrera Ciencias de la Computación, trabajo en sistemas desde mis 18 años. Fui aprendiendo a realizar paginas webs y aplicaciones desde muy chico. Actualmente me estoy especilizando en Desarrollo Web para poder volcar todos mis conocimientos en Infraestructura en servidores y poder destacar como desarrollador. Mi Meta es trabajar en el desarrallo de una aplicacion que se utilize a nivel mundial.
            </p>
            <a href="#" className="btn btn-primary mt-3">Contactame</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>;
    }
}

export default AboutMe;

