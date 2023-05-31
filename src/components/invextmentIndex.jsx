import "../sass/investmentIndex.scss";
import image15 from '../assets/image15.png' 
const InvestmentIndex = () => {
  return (
    <div className="investment-main">
      <div className="container">
        <div className="row ">
          <div className="col-md-7">
            <div className="hero-text"> 
              <p>
                Unlimited <span>Investment</span>
              </p>
              <span>Opportunities</span> 
            </div>
            <div className="sub-text"> 
              <p>
                Plan toward your future by investing in ardilla. Grow your money
                confidently and securely with available investment Opportunities
              </p>
            </div>
            <div className="btn-section">
            <button>Invest with ardilla coming soon</button>
          </div>
          </div>
          <div className="col-md-5">
            <div className="image-section">
            <img src={image15} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentIndex;
