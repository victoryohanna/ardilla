import { Link } from "react-router-dom";
import "../sass/transparency.scss";
const Transparency = () => {
  return (
    <div className="transparency-container"> 
      <div className="container">
        <div className="row ">
          <div className="col-md-5">
            <div className="trn-details">
              <div className="hero-text">
                <span>We're Keen On</span>
                <p>Transparency</p>
              </div>
              <div className="hero-subtext">
                <p>
                  Calculate your interest everytime you save on our plateform
                </p>
              </div>
              <div className="button-section">
                <Link type="button" className="btn btn-submit" to="/">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="form-section">
              <form className="form">
                <div className="input-section">
                  <p>Calculate your interest</p>
                  <div className="mb-3">
                    <label htmlFor="" className="form-label">
                      How often are you saving?
                    </label>
                    <select
                      className="form-select form-select-sm"
                      aria-label=".form-select-sm example"
                    >
                      <option>Monthly</option>
                      <option value="1">Weekly</option>
                      <option value="2">Daily</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="amount" className="form-label">
                      How much are you saving?
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="amount"
                      placeholder=""
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="savingDuration" className="form-label">
                      How long are you saving for? [in months]
                    </label>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        id="savingDuration"
                        placeholder=""
                      />
                    </div>
                  </div>
                </div>
                <div className="interest-section">
                  <div className="mb-3">
                    <label htmlFor="amount" className="label">
                      Total balance
                    </label><br/>
                    <span className="amount">&#8358;6,600</span>
                  </div>
                  <p>
                    Saving &#8358;2000 monthly for 3 months will result ina balance of
                    &#8358;6600{" "}
                  </p>
                  <div className="mb-3">
                    <label htmlFor="amount" className="label">
                      Interest
                    </label> <br/>
                    <span className="amount">
                    &#8358;600 [2%]
                    </span>
                  </div> 
                  <div className="mb-3">
                    <label htmlFor="amount" className="label">
                      Total Savings
                    </label><br/>
                    <span className="amount">&#8358;600</span>
                  </div>
                  <div className="chart-section">
                
              </div>
              <div className="btn-section">
                <button type="submit" className="btn "> Start Saving Now</button>
              </div>
                </div>
              </form>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transparency;
