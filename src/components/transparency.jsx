import { useState } from "react";
import { Link } from "react-router-dom";
import "../sass/transparency.scss";

const Transparency = () => {
  const [savingOption, setSavingOption] = useState("");
  const [savingDuration, setSavingDuration] = useState("");
  const [totalBalance, setTotalBalance] = useState("");
  const [totalSavings, setTotalSavings] = useState("");
  const [interest, setInterest] = useState("");
  const [amount, setAmount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const savings = { savingOption, savingDuration, amount };
    console.log(savings);
  };

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
              <form className="form" onSubmit={handleSubmit}>
                <div className="input-section">
                  <p>Calculate your interest</p>
                  <div className="mb-3">
                    <label htmlFor="" className="form-label">
                      How often are you saving?
                    </label>
                    <select
                      className="form-select form-select-sm"
                      aria-label=".form-select-sm example"
                      name="savingOption"
                      onChange={(e) => setSavingOption(e.target.value)}
                    >
                      <option>Select</option>
                      <option>Monthly</option>
                      <option>Weekly</option>
                      <option>Daily</option>
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
                      name="amount"
                      onChange={(e) => setAmount(e.target.value)}
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
                        name="savingDuration"
                        onChange={(e) => setSavingDuration(e.target.value)}
                        placeholder=""
                      />
                    </div>
                  </div>
                </div>
                <div className="interest-section">
                  <div className="mb-3">
                    <label htmlFor="amount" className="label">
                      Total balance
                    </label>
                    <br />
                    <span className="amount">&#8358;6,200</span>
                  </div>
                  <p>
                    Saving &#8358;2000 monthly for 3 months will result ina
                    balance of &#8358;6600{" "}
                  </p>
                  <div className="mb-3">
                    <label htmlFor="amount" className="label">
                      Interest
                    </label>{" "}
                    <br />
                    <span className="amount">&#8358;600 [2%]</span>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="amount" className="label">
                      Total Savings
                    </label>
                    <br />
                    <span className="amount">&#8358;600</span>
                  </div>
                  <div className="chart-section"></div>
                  <div className="btn-section">
                    <button type="submit" className="btn ">
                      {" "}
                      Start Saving Now
                    </button>
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
