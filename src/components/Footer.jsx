import React from 'react';
import FooterBG from '../assets/images/footer-bg.jpg';
import IconGitHub from 'remixicon-react/GithubLineIcon';
import IconLinkedin from 'remixicon-react/LinkedinLineIcon';
import IconTwitter from 'remixicon-react/TwitterLineIcon';
import IconTwich from 'remixicon-react/TwitchLineIcon';
import IconService from 'remixicon-react/HeartFillIcon';

class Footer extends React.Component {
    render() {
return <div>
  <footer className="footer" style={{backgroundImage: "url(" + FooterBG + ")"}}>
    <div className="container">
      <div className="row py-sm-5 py-3">
        <div className="col-lg-4 col-md-3  mt-4">
          <p className="mb-0"></p>
          <p className="mt-2"></p>
        </div>
        <div className="col-lg-3 col-md-3 offset-lg-1 offset-md-1  mt-4">
          <p className="mb-0"></p>
          <p className="mt-2"></p>
        </div>
        <div className="col-lg-3 col-md-4 offset-lg-1 offset-md-1 mt-4">
          <ul className="list-unstyled">
            <li className="list-inline d-inline-block social-list">
              <a className="list-inline-item rounded mr-2 social-link" href="#"><IconTwich className="ri-facebook-fill" /></a>
            </li>
            <li className="list-inline d-inline-block social-list">
              <a className="list-inline-item rounded mr-2 social-link" href="#"><IconTwitter className="ri-twitter-fill" /></a>
            </li>
            <li className="list-inline d-inline-block social-list">
              <a className="list-inline-item rounded mr-2 social-link" href="#"><IconGitHub className="ri-github-fill" /></a>
            </li>
            <li className="list-inline d-inline-block social-list">
              <a className="list-inline-item rounded mr-2 social-link" href="#"><IconLinkedin className="ri-instagram-fill" /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  <section className="py-3">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <p className="text-muted mb-0">2021 Pig Design</p>
        </div>
        <div className="col-lg-4 offset-lg-4 col-md-6 text-md-right">
          <p className="text-muted mb-0">Creado con<IconService className="ri-service-fill align-middle text-primary px-1" /> By Pig Design</p>
        </div>
      </div>
    </div>
  </section>
</div>

    }
}

export default Footer