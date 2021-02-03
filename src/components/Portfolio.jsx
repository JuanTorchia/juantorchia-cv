import React from "react";
import PortfolioWork1 from '../assets/images/work-1.jpg';
import PortfolioWork2 from '../assets/images/work-2.jpg';
import PortfolioWork3 from '../assets/images/work-3.jpg';
import PortfolioWork4 from '../assets/images/work-4.jpg';
import PortfolioWork5 from '../assets/images/work-5.jpg';


class Portfolio extends React.Component {
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
              <p className="font-size-13 text-uppercase font-weight-medium mb-2">Photoshop</p>
              <h4><a href="#" className="text-white">Cerative Design</a></h4>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 mt-4 pt-2 web-design graphic-design">
        <div className="position-relative rounded overflow-hidden img-box">
          <img className="img-fluid" src={PortfolioWork2} alt />
          <div className="item-caption">
            <div className="text-center text-white work-content">
              <p className="font-size-13 text-uppercase font-weight-medium mb-2">Illustration</p>
              <h4><a href="#" className="text-white">Icons</a></h4>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 mt-4 pt-2 graphic-design ui-ux-design">
        <div className="position-relative rounded overflow-hidden img-box">
          <img className="img-fluid" src={PortfolioWork3} alt />
          <div className="item-caption">
            <div className="text-center text-white work-content">
              <p className="font-size-13 text-uppercase font-weight-medium mb-2">Web Design</p>
              <h4><a href="#" className="text-white">Cerative Layout</a></h4>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 mt-4 pt-2 graphic-design ui-ux-design">
        <div className="position-relative rounded overflow-hidden img-box">
          <img className="img-fluid" src={PortfolioWork4} alt />
          <div className="item-caption">
            <div className="text-center text-white work-content">
              <p className="font-size-13 text-uppercase font-weight-medium mb-2">Graphics</p>
              <h4> <a href="#" className="text-white">UI/UX Design</a></h4>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 mt-4 pt-2 ui-ux-design">
        <div className="position-relative rounded overflow-hidden img-box">
          <img className="img-fluid" src={PortfolioWork5} alt />
          <div className="item-caption">
            <div className="text-center text-white work-content">
              <p className="font-size-13 text-uppercase font-weight-medium mb-2">Adobe XD</p>
              <h4> <a href="#" className="text-white">App Design</a></h4>
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