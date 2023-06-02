import "../sass/products.scss";
import { FaBatteryFull, FaLocationArrow } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";
import { FiWifi } from "react-icons/fi"; 
import {BiTransferAlt} from "react-icons/bi"; 

import {vector1, vector2, vector3, vector4} from "./images";

const Products = () => {
  const checkedList = [
    "Create Unlimted savings plans",
    "Withdraw anytime",
    "Save with Friends with SAN ID",
    "Be better at saving",
    "Accountability profile",
    "Activity and report",
  ];
  return (
    <div className="product-container ">
      <div className="container">
        <div className="head-text">
          <h1>Products</h1>
        </div>
        <div className="products-items">
          <div className="row">
            <div className="col-md-6">
              <div className="text">
                <h3>Save</h3>
                <p>Save at your own pace!</p>
                <span>
                  Save your money daily, weekly, or monthly. No pressure. We
                  work at your pace
                </span>
              </div>
              <div className="list-items">
                {checkedList.map((item, index) => {
                  return (
                    <div className="formCheck" key={index}>
                      <input
                        className="checkinput"
                        type="checkbox"
                        value=""
                        id="CheckChecked"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckChecked"
                      >
                        {item}
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-md-6">
              <div className="img-layout">
                <div className="img">
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
                      <div className="icon1"><FaLocationArrow/>top up</div> 
                      <div className="icon2"><FaLocationArrow/>request</div>
                      <div className="icon3"><BiTransferAlt/>transfer</div>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
