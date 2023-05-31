import "../sass/home.scss";
import HeaderComponent from "../components/header";
import Products from "../components/products";
import Transparency from "../components/transparency";
import InvestmentIndex from "../components/invextmentIndex";
import AccessMoney from "../components/accessMoney";
import Testimonials from "../components/testimonials";
import Partners from "../components/partners";
import Transactions from "../components/transactions";
const Home = () => {
  return (
    <div className="home-main">
      <section className="header">
        <HeaderComponent />
      </section>
      <section className="products">
        <Products />
      </section>
      <section className="transparency">
        <Transparency />
      </section>
      <section className="investment">
        <InvestmentIndex/>
      </section>
      <section className="access-money">
        <AccessMoney/>
      </section>
      <section className="testimonials">
        <Testimonials/>
      </section>
      <section className="partners">
        <Partners/>
      </section>
      <section className="transactions">
        <Transactions/>
      </section>
    </div>
  );
};

export default Home;
