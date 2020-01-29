import React from "react";

function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="footer">
        <div className="left-footer">
          <ul>
            <li>
              <a
                href="https://www.giveindia.org/aboutus"
                target="_blank"
                rel="noopener noreferrer"
              >
                About GiveIndia
              </a>
            </li>
            <li> | </li>
            <li>
              <a
                href="https://www.giveindia.org/aboutus"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms & Conditions
              </a>
            </li>
          </ul>
          <span>© 2020 GiveIndia</span>
        </div>
        <div className="right-footer">
          <div className="social-links">
            <a
              href="https://www.facebook.com/GiveIndia/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i aria-hidden="true" className="fa fa-facebook"></i>
            </a>
            <a
              href="https://twitter.com/giveindia/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i aria-hidden="true" className="fa fa-twitter"></i>
            </a>
            <a
              href="https://www.youtube.com/user/GiveIndia2000"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i aria-hidden="true" className="fa fa-youtube-play"></i>
            </a>
          </div>
          <span>
            Made with <i aria-hidden="true" className="fa fa-heart"></i> by
            GiveIndia
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
