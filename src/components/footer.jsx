import { Link } from "react-router-dom";
import { BsTwitter, BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";


import "../sass/footer.scss";

const Footer = () => {
  return (
    <div className="footer-main">
      {/* <div className="logo-section">
        <img src="" className="footer-logo" alt="..." />
      </div> */}
      <div className="container">
        <div className="row">
          <div className="col-md-2 quick-links">
            <h4>Products</h4>
            <ul>
              <li>
                <Link to="/">Savings</Link>
              </li>
              <li>
                <Link to="/">Dilla</Link>
              </li>
              <li>
                <Link to="/">Financial Coach</Link>
              </li>
              <li>
                <Link to="/">Halal</Link>
              </li>
              <li>
                <Link to="/">Budgetting</Link>
              </li>
              <li>
                <Link to="/">Investment</Link>
              </li>
              <li>
                <Link to="/">Insurance</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-2 quick-links">
            <h4>Company</h4>
            <ul>
              <li>
                <Link to="/">About Us</Link>
              </li>
              <li>
                <Link to="/">Careers</Link>
              </li>
              <li>
                <Link to="/">FAQs</Link>
              </li>
              <li>
                <Link to="/">Press</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-2 quick-links">
            <h4>Transparency</h4>
            <ul>
              <li>
                <Link to="/">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/">Information Security Policy</Link>
              </li>
              <li>
                <Link to="/">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/">Interest Tool</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-2 quick-links">
            <h4>Developer</h4>
            <ul>
              <li>
                <Link to="/">Connect API </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 quick-links">
            <h4>Address</h4>
            <p>33B, Ogundana street, Allen, Ikeja.</p>
            <h4>Contact</h4>
            <ul>
            <li>support@ardilla.africa</li>
            <li>(234)801 000 1234</li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="container copyright d-flex justify-content-between">
        <span>&copy; Copyright 2023 All Rights Reserved</span>
        <div className="social-media">
          <ul>
            <li>
              <Link to="/">
                <BsInstagram />
              </Link>
            </li>
            <li>
              <Link to="/">
                <BsFacebook />
              </Link>
            </li>
            <li>
              <Link to="/">
                <BsLinkedin />
              </Link>
            </li>
            <li>
              <Link to="/">
                <BsTwitter />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
