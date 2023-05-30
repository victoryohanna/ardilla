import "../sass/accessMoney.scss";
import { FaLock } from "react-icons/fa"; 
import { GiFlamer, GiFlameSpin } from "react-icons/gi";
import {RiHeartPulseFill} from "react-icons/ri" 
import { Link } from "react-router-dom";

const AccessMoney = () => {
  return (
    <div className="access-main">
      <div className="container">
        <div className="main-body">
          <h1>Access More With Your Money</h1>
          <p>
            Earn, learn, parlay, and grow financially. With Ardilla, you have
            more opportunities than ever at your finger tips. Why not take
            advantage today?
          </p>
          <div className="btn-section">
            <button>Learn more about savings</button>
          </div>
          <div className="card-section">
            <div className="row">
              <div className="col-md-6">
                <div className="items">
                  <div className="icon1">
                    <GiFlamer />
                  </div>
                  <div className="title-text">
                    <p>DIB</p>
                  </div>
                  <p>
                    Nothing beats an emergency quite like an emergency fund.
                    With Ardilla you can get started building that emergency
                    fund.
                  </p>
                  <div className="link-text">
                    <Link to="/">Learn More</Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6 ">
                <div className="items">
                  <div className="icon2">
                    <FaLock />
                  </div>
                  <div className="title-text">
                    <p>Dreams</p>
                  </div>
                  <p>
                    Helping you make your dreams a reality is important to us.
                    We have helped so many others. We can help you as well.
                  </p>
                  <div className="link-text">
                    <Link to="/">Learn More</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="items">
                  <div className="icon3">
                    <GiFlameSpin />
                  </div>
                  <div className="title-text">
                    <p>Vault</p>
                  </div>
                  <p>
                    Lock away excess funds you don't know what to do with. We
                    can help you safeguard it till you are ready. It definitely
                    beats spending it and wondering where all that money went
                    to.
                  </p>
                  <div className="link-text">
                    <Link to="/">Learn More</Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6 ">
                <div className="items">
                  <div className="icon4">
                    <RiHeartPulseFill />
                  </div>
                  <div className="title-text">
                    <p>Grit</p>
                  </div>
                  <p>
                    Become a VIP when you save more money with us. Enjoy better
                    benefits.
                  </p>
                  <div className="link-text">
                    <Link to="/">Learn More</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessMoney;
