
import '../sass/transactions.scss'
const Transactions = () => { 
  return (
    <div className="transactions-main">
      <div className="container">
        <div className="header-text">
        <h1>Transactions</h1> 
        <p>Our products and investments grossed 1.1 billion in 2022</p>
        </div>
        <div className="trans-details">
          <div className="row">
            <div className="col-md-3 col-1">
            <span>Investment <span className='bold1'>2020</span> </span>
              <h3>&#8358;10M</h3>
            </div>
            <div className="col-md-3 col-2">
              <span>Risk  <span className='bold2'> Management</span></span>
              <h3>0% Risk</h3>
            </div>
            <div className="col-md-3 col-3">
              <span>Investment  <span className='bold3'>paid back</span> </span>
              <h3>&#8358;10M</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
