import React from "react";
import LinkedinIcon from 'remixicon-react/LinkedinFillIcon';
import MiSetup from '../assets/images/miSetup.jpg'

class Hero extends React.Component {
    render() {
        return <section className="hero-6 position-relative align-items-center justify-content-center d-flex" style={{backgroundImage: "url(" + MiSetup + ")"}
        } id="home">
  <div className="hero-6-overlay" />
  <div className="container">
    <div className="row">
      <div className="col-md-8">
        <div className="content-box position-relative">
          <div className="hero-6-content rounded bg-white position-relative p-5 mt-sm-5">
            <span className="position-relative text-uppercase font-weight-medium font-size-12 text-white bg-primary comment">Hola</span>
            <h1 className="font-weight-medium mt-4 mb-1 text-uppercase">Soy</h1>
            <h1 className="font-weight-medium mb-3 text-uppercase">Juan Torchia</h1>
            <p className="font-size-16 text-muted my-4">
              Soy fanatico de la tecnologia, trabajo en el area hace mas de 10 años <br />
              Siempre estoy investigando nuevas tecnologias para poder desarrollar mis proyectos profesionales y personales.
            </p>
            <a href="#" className="btn btn-primary">Descargar CV</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="hero-social-icon d-none d-md-block">
    <a className="social-media bg-white border-bottom" href="#"><LinkedinIcon className="ri-facebook-fill" /></a>
    <a className="social-media bg-white border-bottom" href="#"><LinkedinIcon className="ri-twitter-fill" /></a>
    <a className="social-media bg-white" href="#"><LinkedinIcon className="ri-github-fill" /></a>
  </div>
</section>; 
    }
}

export default Hero;

