import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content grid">
        <div className="footer-section m-3 mt-4">
          <a href="/" className="brand">Chinn Clothings</a>
          <p className="mt-3 text-muted">
          Refresh your daily rotation with our women's clothing range. With the freshest styles
           available all in one place, you can expect everyday basics, like women's tops and skirts, as well as must-have knitwear and cozy loungewear for downtime days.
          </p>
        </div>

        <div className="footer-section m-3">
          <h5 className='fw-4 fs-19'>Links</h5>
          <ul className="footer-links">
            <li>
              <a href="#home" className='text-muted'>
                <i className="fas fa-chevron-right icon"></i> Home
              </a>
            </li>
            <li>
              <a href="#collection" className='text-muted'>
                <i className="fas fa-chevron-right icon"></i> Collection
              </a>
            </li>
            <li>
              <a href="#blogs" className='text-muted'>
                <i className="fas fa-chevron-right icon"></i> Blogs
              </a>
            </li>
            <li>
              <a href="#about" className='text-muted'>
                <i className="fas fa-chevron-right icon"></i> About us
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-section m-3">
          <h5 className='fw-4 fs-19'>Contact Us</h5>
          <div className="footer-contact text-muted">
            <div className="icon">
              <i className="fas fa-map-marked-alt"></i>
              <span>&nbsp;&nbsp;71 Nguyễn Đức Cảnh, Thành Phố Buôn Ma Thuột, Tỉnh Đăk Lăk, Việt Nam</span>
            </div>
          </div>
          <div className="footer-contact text-muted">
            <div className="icon">
              <i className="fas fa-envelope"></i>
            <span>&nbsp;&nbsp;chinn.support@gmail.com</span>
            </div>
          </div>
          <div className="footer-contact text-muted">
            <div className="icon">
              <i className="fas fa-phone-alt"></i>
            <span>&nbsp;&nbsp;+84 94. 162. 46. 46</span>
            </div>
          </div>
        </div>

        <div className="footer-section m-3">
          <h5 className='fw-4 fs-19'>Follow Us</h5>
          <div className="footer-follow">
            <ul className="list-unstyled flex">
              <li>
                <a href="https://www.facebook.com/mun.twichan" className="social-icon">
                  <i className="fab fa-facebook-f text-muted me-3"></i>
                </a>
              </li>
              <li>
                <a href="#" className="social-icon">
                  <i className="fab fa-twitter text-muted me-3"></i>
                </a>
              </li>
              <li>
                <a href="#" className="social-icon">
                  <i className="fab fa-instagram text-muted me-3"></i>
                </a>
              </li>
              <li>
                <a href="#" className="social-icon">
                  <i className="fab fa-pinterest text-muted me-3"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
