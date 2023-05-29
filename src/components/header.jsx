import { Link } from "react-router-dom";
import "../sass/header.scss";
const HeaderComponent = () => {
  return (
    <div className="header-section">
      <div className="header-hero-text ">
        <h1>Your Access To More</h1>
        <p>
          Ardilla helps you save and invest in achieving your financial goals,
          we have the most flexible and seamless way to grow your funds.
        </p>
      </div>
      <div className="get-started">
        <Link to="/" className="btn btn-started">
          Get Started
        </Link>
      </div>
      <div className="droid-section">
        <div className="left-droid"></div>
        <div className="right-droid"></div>
      </div>
    </div>
  );
};

export default HeaderComponent;
