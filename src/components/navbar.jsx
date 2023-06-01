import { Link } from "react-router-dom";
import image5 from "../assets/image5.png";
import image16 from "../assets/image16.png";
import "../sass/navbar.scss"; 
const Navbar = () => {


  return (
    <>
      <nav className="navbar navbar-expand-lg  ">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src={image16} alt="" /> <span>Ardilla</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <Link
                  to="/"
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Products
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/" className="dropdown-item">
                      Product 1
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="dropdown-item">
                      Product 2
                    </Link>
                  </li>

                  <li>
                    <Link to="/" className="dropdown-item">
                      Product 3
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link active">
                  Business
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  to="/"
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Company
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/" className="dropdown-item">
                      Company 1
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="dropdown-item">
                      Company 2
                    </Link>
                  </li>

                  <li>
                    <Link to="/" className="dropdown-item">
                      Company 3
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/learn" className="nav-link ">
                  Learn
                </Link>
              </li>
            </ul>
            <ul className="signin">
              <li className="nav-item ">
                <Link
                  to="/"
                  type="submit"
                  className="nav-link btn btn-signIn me-2"
                >
                  Sing In
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" type="submit" className="nav-link btn btn-account">
                  Create Account
                </Link>
              </li>
              <div className="image-section">
                <img src={image5} alt="" />
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
