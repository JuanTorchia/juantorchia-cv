import React from "react";
import PortfolioWork1 from '../assets/images/work-1.jpg';
import PortfolioWork2 from '../assets/images/work-2.jpg';
import PortfolioWork3 from '../assets/images/work-3.jpg';
import PortfolioWork4 from '../assets/images/work-4.jpg';
import PortfolioWork5 from '../assets/images/work-5.jpg';
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Portfolio extends React.Component {
  state = {
    isOpen: false
  };

  openModalCV = () => this.setState({ isOpenCV: true });
  closeModalCV = () => this.setState({ isOpenCV: false });
  openModalIOT = () => this.setState({ isOpenIOT: true });
  closeModalIOT = () => this.setState({ isOpenIOT: false });
  openModalPIG = () => this.setState({ isOpenPIG: true });
  closeModalPIG = () => this.setState({ isOpenPIG: false });

    render() {
return <section className="section" id="portfolio">
  <div className="container">
    <div className="row">
      <div className="col-12 mb-4">
        <h2 className="mb-0 title">Proyectos <span className="title-border ml-4 pl-3" /></h2>
      </div>
    </div>
    <div className="row projects-wrapper">
      <div className="col-lg-4 col-md-6 mt-4 pt-2 web-design">
        <div className="position-relative rounded overflow-hidden img-box">
          <img className="img-fluid" src={PortfolioWork2} alt />
          <div className="item-caption">
            <div className="text-center text-white work-content">
            <div
          className="d-flex align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
          <Button variant="primary" className="btn btn-primary mt-3" onClick={this.openModalCV}>
            CV personal en REACT
          </Button>
        </div>
        <Modal animation='true' size="lg" show={this.state.isOpenCV} onHide={this.closeModalCV}>
          <Modal.Header closeButton>
            <Modal.Title><h2 className="mb-0 title">Curriculum Vitae React<span className="title-border ml-4 pl-3" /></h2></Modal.Title>
          </Modal.Header>
          <Modal.Body><h5 class="font-size-17 font-weight-semibold mt-4 pt-2">Proyecto</h5>
                <p class="text-muted mt-3">
                Este proyecto surgio para poder poner en practica todo lo aprendiendo en los cursos de React, SASS y Webpack.
                Parti con el boceto de mi CV en HTML, CSS Y JS</p>
                <h5 class="font-size-17 font-weight-semibold mt-4 pt-2">Objetivos</h5>
                <ul>
                <li class="text-muted mt-3">Dividir el CV en componentes y adaptarlos a React</li>
                <li class="text-muted mt-3">Utilizar metodologia BEM</li>
                <li class="text-muted mt-3">Configurar Webpack y NPM</li>
                <li class="text-muted mt-3">Poder realizar deploy de la web de forma automatica</li>
                <li class="text-muted mt-3">Adaptar la web para obtener </li>
                </ul>
                <h5 class="font-size-17 font-weight-semibold mt-4 pt-2">Documentacion</h5>
                <p class="text-muted mt-3">
                Este proyecto surgio para poder poner en practica todo lo aprendiendo en los cursos de React, SASS y Webpack.
                Parti con el boceto de mi CV en HTML, CSS Y JS</p>
                <h5 class="font-size-17 font-weight-semibold mt-4 pt-2">Descripcion del proyecto</h5>
                <p class="text-muted mt-3">
                Este proyecto surgio para poder poner en practica todo lo aprendiendo en los cursos de React, SASS y Webpack.
                Parti con el boceto de mi CV en HTML, CSS Y JS</p>
                </Modal.Body>
          <Modal.Footer>
            <Button variant="primarys" className="btn btn-primary mt-3" onClick={this.closeModalCV}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 mt-4 pt-2 web-design graphic-design">
        <div className="position-relative rounded overflow-hidden img-box">
          <img className="img-fluid" src={PortfolioWork2} alt />
          <div className="item-caption">
            <div className="text-center text-white work-content">
            <div
          className="d-flex align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
          <Button variant="primary" className="btn btn-primary mt-3" onClick={this.openModalIOT}>
            TorchiHost IOT
          </Button>
        </div>
        <Modal animation='true' size="lg" show={this.state.isOpenIOT} onHide={this.closeModalCVIOT}>
          <Modal.Header closeButton>
            <Modal.Title><h2 className="mb-0 title">3 Curriculum Vitae en React <span className="title-border ml-4 pl-3" /></h2></Modal.Title>
          </Modal.Header>
          <Modal.Body><h5 class="font-size-17 font-weight-semibold mt-4 pt-2">Proyecto</h5>
                <p class="text-muted mt-3">
                Este proyecto surgio para poder poner en practica todo lo aprendiendo en los cursos de React, SASS y Webpack.
                Parti con el boceto de mi CV en HTML, CSS Y JS</p>
                <h5 class="font-size-17 font-weight-semibold mt-4 pt-2">Objetivos</h5>
                <ul>
                <li class="text-muted mt-3">Dividir el CV en componentes y adaptarlos a React</li>
                <li class="text-muted mt-3">Utilizar metodologia BEM</li>
                <li class="text-muted mt-3">Configurar Webpack y NPM</li>
                <li class="text-muted mt-3">Poder realizar deploy de la web de forma automatica</li>
                <li class="text-muted mt-3">Adaptar la web para obtener </li>
                </ul>
                <h5 class="font-size-17 font-weight-semibold mt-4 pt-2">Documentacion</h5>
                <p class="text-muted mt-3">
                Este proyecto surgio para poder poner en practica todo lo aprendiendo en los cursos de React, SASS y Webpack.
                Parti con el boceto de mi CV en HTML, CSS Y JS</p>
                <h5 class="font-size-17 font-weight-semibold mt-4 pt-2">Descripcion del proyecto</h5>
                <p class="text-muted mt-3">
                Este proyecto surgio para poder poner en practica todo lo aprendiendo en los cursos de React, SASS y Webpack.
                Parti con el boceto de mi CV en HTML, CSS Y JS</p>
                </Modal.Body>
          <Modal.Footer>
            <Button variant="primarys" className="btn btn-primary mt-3" onClick={this.closeModalIOT}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 mt-4 pt-2 graphic-design ui-ux-design">
        <div className="position-relative rounded overflow-hidden img-box">
          <img className="img-fluid" src={PortfolioWork3} alt />
          <div className="item-caption">
            <div className="text-center text-white work-content">
            <div
          className="d-flex align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
          <Button variant="primary" className="btn btn-primary mt-3" onClick={this.openModalIOT}>
            Pig Design
          </Button>
        </div>
        <Modal animation='true' size="lg" show={this.state.isOpenPIG} onHide={this.closeModalCVPIG}>
          <Modal.Header closeButton>
            <Modal.Title><h2 className="mb-0 title">2 Curriculum Vitae en React <span className="title-border ml-4 pl-3" /></h2></Modal.Title>
          </Modal.Header>
          <Modal.Body><h5 class="font-size-17 font-weight-semibold mt-4 pt-2">Proyecto</h5>
                <p class="text-muted mt-3">
                Este proyecto surgio para poder poner en practica todo lo aprendiendo en los cursos de React, SASS y Webpack.
                Parti con el boceto de mi CV en HTML, CSS Y JS</p>
                <h5 class="font-size-17 font-weight-semibold mt-4 pt-2">Objetivos</h5>
                <ul>
                <li class="text-muted mt-3">Dividir el CV en componentes y adaptarlos a React</li>
                <li class="text-muted mt-3">Utilizar metodologia BEM</li>
                <li class="text-muted mt-3">Configurar Webpack y NPM</li>
                <li class="text-muted mt-3">Poder realizar deploy de la web de forma automatica</li>
                <li class="text-muted mt-3">Adaptar la web para obtener </li>
                </ul>
                <h5 class="font-size-17 font-weight-semibold mt-4 pt-2">Documentacion</h5>
                <p class="text-muted mt-3">
                Este proyecto surgio para poder poner en practica todo lo aprendiendo en los cursos de React, SASS y Webpack.
                Parti con el boceto de mi CV en HTML, CSS Y JS</p>
                <h5 class="font-size-17 font-weight-semibold mt-4 pt-2">Descripcion del proyecto</h5>
                <p class="text-muted mt-3">
                Este proyecto surgio para poder poner en practica todo lo aprendiendo en los cursos de React, SASS y Webpack.
                Parti con el boceto de mi CV en HTML, CSS Y JS</p>
                </Modal.Body>
          <Modal.Footer>
            <Button variant="primarys" className="btn btn-primary mt-3" onClick={this.closeModalPIG}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>;
    }
}

export default Portfolio