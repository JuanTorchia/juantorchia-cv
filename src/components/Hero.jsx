import React from "react";
import LinkedinIcon from 'remixicon-react/LinkedinFillIcon';
import GithubIcon from 'remixicon-react/GithubFillIcon';
import TwitterIcon from 'remixicon-react/TwitterFillIcon';
import MiSetup from '../assets/images/heroactual.gif'

class Hero extends React.Component {
    render() {
        return <section className="hero-6 position-relative d-flex" style={{backgroundImage: "url(" + MiSetup + ")"}
        } id="home">
  <div className="hero-6-overlay" />
  <div className="container">
    <div className="row">
      <div className="col-md-8">
        <div className="content-box position-relative">
          <div className="hero-6-content rounded bg-white position-relative p-5 mt-sm-5">
            <span className="position-relative text-uppercase font-weight-medium font-size-12 text-white bg-dark comment">Hola</span>
            <h1 className="font-weight-medium mt-4 mb-1 text-uppercase">Soy</h1>
            <h1 className="font-weight-medium mb-3 text-uppercase">Juan Torchia</h1>
            <p className="font-size-16 text-muted my-4">
              Trabajo en sistemas desde mis 18 años, actualmente me desempeño como desarrollador Java.<br />
              Me interesa y gusta estar siempre realizando projectos e implementando nuevas tecnolgias.<br />
              Estoy estudiando en la UBA la carrea de Licenciado en Ciencias de la Computación.
            </p>
            <a href="#" className="btn btn-outline-dark">Descargar CV</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="hero-social-icon d-none d-md-block">
    <a className="social-media bg-white border-bottom" href="#"><LinkedinIcon className="ri-facebook-fill" /></a>
    <a className="social-media bg-white border-bottom" href="#"><GithubIcon className="ri-github-fill" /></a>
    <a className="social-media bg-white" href="#"><TwitterIcon className="ri-github-fill" /></a>
  </div>
</section>;
    }
}

export default Hero;

