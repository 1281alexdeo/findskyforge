import React from 'react';
import './footer.scss';
import LinkedIn from '../../img/LinkedIn.svg';
import Github from '../../img/Github.svg';

function Footer() {
  const date = new Date();
  let currenYear = date.getFullYear();

  return (
    <section className="footer" id="footer">
      <div className="row">
        <div className="col-md-12">
          <div className="container">
            <a
              href="https://www.linkedin.com/in/dharmendra-alex-deo-69b34b130/"
              target="_blank"
            >
              <img src={LinkedIn} alt="linked in icon" />
            </a>
            <a href="https://github.com/1281alexdeo" target="_blank">
              <img src={Github} alt="git icon" />
            </a>
            <h3 className="mt-3" style={{ color: '#f5f5f5' }}>
              DHARMENDRA ALEX &copy;
              {'  '}
              <span style={{ color: '#08d9d6' }}>{currenYear}</span>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
