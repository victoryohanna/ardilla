import { Link } from "react-router-dom";
import "../sass/header.scss";
import { FaBatteryFull, FaLocationArrow } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";
import { FiWifi } from "react-icons/fi";
import { BiTransferAlt } from "react-icons/bi";

import { vector1, vector2, vector3, vector4 } from "./images";

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
        <div className="left-droid">
          <div className="inner-img">
            <div className="mobile-header">
              <div className="time">
                <span>12:30</span>
              </div>
              <div>
                <button></button>
              </div>
              <div className="battery">
                <div>
                  <GiNetworkBars />
                </div>
                <div>
                  <FiWifi />
                </div>
                <div>
                  <FaBatteryFull />
                </div>
              </div>
            </div>
            <div className="mobile-title">
              <h4>Dilla</h4>
            </div>
            <div className="account-balance">
              <span>Account Balance</span>
              <h6>&#8358;5,000,000.00</h6>
            </div>
            <div className="quick-links">
              <div className="icon1">
                <FaLocationArrow />
                top up
              </div>
              <div className="icon2">
                <FaLocationArrow />
                request
              </div>
              <div className="icon3">
                <BiTransferAlt />
                transfer
              </div>
            </div>
            <div className="search">
              <span>Search for friends</span>
            </div>
            <div className="friends">
              <img src={vector1} alt="" />
              <img src={vector2} alt="" />
              <img src={vector3} alt="" />
              <img src={vector4} alt="" />
            </div>
            <div></div>
          </div>
        </div>
        <div className="right-droid">
          <div className="inner-img">
            <div className="mobile-header">
              <div className="time">
                <span>12:30</span>
              </div>
              <div>
                <button></button> 
              </div>
              <div className="battery">
                <div>
                  <GiNetworkBars />
                </div>
                <div>
                  <FiWifi />
                </div>
                <div>
                  <FaBatteryFull />
                </div>
              </div>
            </div>
            <div className="friends">
              <img src={vector1} alt="" />
            </div>
            <div></div>
            <div className="account-balance">
              <h6>&#8358;4,000,000.00</h6>
            </div>
            <div className="counts">
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
