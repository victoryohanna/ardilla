import "../sass/home.scss";
import HeaderComponent from "../components/header";
import Products from "../components/products";
import Transparency from "../components/transparency";
import InvestmentIndex from "../components/invextmentIndex";
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
      <section>
        <InvestmentIndex/>
      </section>
    </div>
  );
};

export default Home;
