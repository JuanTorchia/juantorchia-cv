import React from "react";
import GitMergeFillIcon from 'remixicon-react/GitMergeFillIcon';
import Window2 from 'remixicon-react/Window2FillIcon';
import ServerFillIcon from 'remixicon-react/ServerFillIcon';
import { Modal, Button } from "react-bootstrap";
import GalleryDev from './GalleryDev';

class Speciality extends React.Component {
    state = {
        isOpen: false
      };
    
      openModalDEV = () => this.setState({ isOpenDEV: true });
      closeModalDEV = () => this.setState({ isOpenDEV: false });
      openModalIOT = () => this.setState({ isOpenIOT: true });
      closeModalIOT = () => this.setState({ isOpenIOT: false });
      openModalDEVOPS = () => this.setState({ isOpenDEVOPS: true });
      closeModalDEVOPS = () => this.setState({ isOpenDEVOPS: false });
      openModalIdiomas = () => this.setState({ isOpenIdiomas: true });
      closeModalIdiomas = () => this.setState({ isOpenIdiomas: false });

    

    render() {
return <section className="section bg-light" id="service">
<div className="container">
    <div className="row">
        <div className="col-12 mb-4">
            <h2 className="title">Especialidades <span className="title-border ml-4 pl-3"></span></h2>
        </div>
    </div>
    
    <div className="row">
        <div className="col-lg-3 col-md-6 mt-4 pt-2 d-flex align-items-stretch">
            <div className="service-box rounded position-relative d-flex flex-column h-100">
                <div className="service-icon rounded"><ServerFillIcon className="ri-lightbulb-flash-fill"></ServerFillIcon></div>
                <h5 className="font-size-17 font-weight-semibold mt-4 pt-2">Desarrollo Profesional</h5>
                <p className="text-muted mt-3">
                Dentro de un mundo cada vez más competitivo, el desarrollo profesional implica comunicar,
                liderar, pensar de forma creativa y crear ambientes de colaboración.
                Comence a desarrollar mis habilidades en estas areas para poder destacar profesionalmente.
                </p>
                <div  style={{ marginTop: "auto" }} id="footer--card">
          <Button variant="secondary" className="btn btn-primary mt-4" onClick={this.openModalIOT}>
            Certificados
          </Button>
        </div>
        <Modal animation='true' size="lg" show={this.state.isOpenIOT} onHide={this.closeModalCVIOT}>
          <Modal.Header >
            <Modal.Title><h2 className="mb-0 title">Desarrollo Profesional<span className="title-border ml-4 pl-3" /></h2></Modal.Title>
          </Modal.Header>
          <Modal.Body><h5 class="font-size-17 font-weight-semibold mt-4 pt-2">Certificados</h5>
          <div className="row">
                {GalleryDev.map( ({id, description, src, title}) => (
          
            <div className="column" key={id}>
                <a href={src} target="_blank" rel="noreferrer noopener"><img src={src} alt={description} style={{width: '100%'}} /></a>
                <div className={title}>
                <p>{title}</p>
                </div>
            </div>
          ))}
            </div>
                </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" className="btn btn-primary mt-4" onClick={this.closeModalIOT}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
            </div>
        </div>

        <div className="col-lg-3 col-md-6 mt-4 pt-2 d-flex align-items-stretch">
            <div className="service-box rounded position-relative d-flex flex-column h-100" >
                <div className="service-icon rounded"><Window2 className="ri-window-2-fill"></Window2></div>
                <h5 className="font-size-17 font-weight-semibold mt-4 pt-2">Desarrollo Web</h5>
                <p className="text-muted mt-3">
                Comence a estudiar los fundamentos de HTML, CSS y Javascript, para aparender las bases, fundamentos
                y especializarme en estos lenguajes.
                Actualmente estoy aprendiendo REACT y poniendo en practica todo lo aprendido.
                </p>
                <div style={{ marginTop: "auto" }}>
                <Button variant="secondary" className="btn btn-primary mt-4 mt-auto" onClick={this.openModalDEV}>
                    Certificados
                </Button>
                </div>
                <Modal animation='true' size="lg" show={this.state.isOpenDEV} onHide={this.closeModalDEV}>
                <Modal.Header >
                    <Modal.Title><h2 className="mb-0 title">Desarrollo Web<span className="title-border ml-4 pl-3" /></h2></Modal.Title>
                </Modal.Header>
                <Modal.Body><h5 class="font-size-17 font-weight-semibold mt-4 pt-2">Certificados</h5>
                        <div className="row">
                        {GalleryDev.map( ({id, description, src, title}) => (
                    <div className="column" key={id}>
                        <a href={src} target="_blank" rel="noreferrer noopener"><img src={src} alt={description} style={{width: '100%'}} /></a>
                        <div className={title}>
                        <p>{title}</p>
                        </div>
                    </div>
                ))}
                    </div>
                        </Modal.Body>
                <Modal.Footer>
                    <Button variant="primarys" className="btn btn-primary mt-4" onClick={this.closeModalDEV}>
                    Cerrar
                    </Button>
                </Modal.Footer>
                </Modal>
            </div>
        </div>

        <div className="col-lg-3 col-md-6 mt-4 pt-2 d-flex align-items-stretch">
            <div className="service-box rounded position-relative d-flex flex-column h-100">
                <div className="service-icon rounded"><GitMergeFillIcon className="ri-award-fill"></GitMergeFillIcon></div>
                <h5 className="font-size-17 font-weight-semibold mt-4 pt-2">DevOps</h5>
                <p className="text-muted mt-3">
                Trabajo como SysAdmin LINUX y WINDOWS comence a estudiar DevOps automatizar las tareas
                que realizo habitualmente en mi trabajo, esto me llevo a aprender las metodologias de DevOps.      
                </p>
                <div style={{ marginTop: "auto" }}>
                <Button variant="secondary" className="btn btn-primary mt-4 mt-auto" onClick={this.openModalDEVOPS}>
                    Certificados
                </Button>
                </div>
                <Modal animation='true' size="lg" show={this.state.isOpenDEVOPS} onHide={this.closeModalDEVOPS}>
                <Modal.Header >
                    <Modal.Title><h2 className="mb-0 title">DevOps<span className="title-border ml-4 pl-3" /></h2></Modal.Title>
                </Modal.Header>
                <Modal.Body><h5 class="font-size-17 font-weight-semibold mt-4 pt-2">Certificados</h5>
                <div className="row">
                        {GalleryDev.map( ({id, description, src, title}) => (
                    <div className="column" key={id}>
                        <a href={src} target="_blank" rel="noreferrer noopener"><img src={src} alt={description} style={{width: '100%'}} /></a>
                        <div className={title}>
                        <p>{title}</p>
                        </div>
                    </div>
                ))}
                    </div>
                        </Modal.Body>
                <Modal.Footer>
                    <Button variant="primarys" className="btn btn-primary mt-4" onClick={this.closeModalDEVOPS}>
                    Cerrar
                    </Button>
                </Modal.Footer>
                </Modal>
            </div>
        </div>
        
        <div className="col-lg-3 col-md-6 mt-4 pt-2 d-flex align-items-stretch">
            <div className="service-box rounded position-static d-flex flex-column h-100">
                <div className="service-icon rounded"><GitMergeFillIcon className="ri-award-fill"></GitMergeFillIcon></div>
                <h5 className="font-size-17 font-weight-semibold mt-4 pt-2">Idiomas</h5>
                <p className="text-muted mt-3">
                Comence a estudiar Ingles a mis 6 años, fui a un colegio Bilingue tanto en mi educacion Inicial y Secundaria, actualmente estoy perfeccionándome
                para hablarlo de forma profesional, calaboro en proyectos OpenSource lo que me hace estar en contacto
                con personas de todo el mundo y utilizamos el Ingles para comunicarnos.
                </p>
                <div style={{ marginTop: "auto" }}>
                <Button variant="secondary" className="btn btn-primary mt-4 mt-auto" onClick={this.openModalIdiomas}>
                    Certificados
                </Button>
                </div>
                <Modal animation='true' size="lg" show={this.state.isOpenIdiomas} onHide={this.closeModalIdiomas}>
                <Modal.Header >
                    <Modal.Title><h2 className="mb-0 title">Idiomas <span className="title-border ml-4 pl-3" /></h2></Modal.Title>
                </Modal.Header>
                <Modal.Body><h5 class="font-size-17 font-weight-semibold mt-4 pt-2">Certificados</h5>
                <div className="row">
                        {GalleryDev.map( ({id, description, src, title}) => (
                    <div className="column" key={id}>
                        <a href={src} target="_blank" rel="noreferrer noopener"><img src={src} alt={description} style={{width: '100%'}} /></a>
                        <div className={title}>
                        <p>{title}</p>
                        </div>
                    </div>
                ))}
                    </div>
                        </Modal.Body>
                <Modal.Footer>
                    <Button variant="primarys" className="btn btn-primary mt-4" onClick={this.closeModalIdiomas}>
                    Cerrar
                    </Button>
                </Modal.Footer>
                </Modal>
            </div>
        </div>

    </div>
</div>
</section>;
    }
}

export default Speciality