import "../sass/home.scss";
import HeaderComponent from "../components/header";
import Products from "../components/products";
import Transparency from "../components/transparency";
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
    </div>
  );
};

export default Home;
