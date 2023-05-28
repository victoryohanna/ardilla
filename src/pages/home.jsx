
import '../sass/home.scss'
import HeaderComponent from "../components/header";
import Products from "../components/products";
const Home = () => {
  return (
    <div className="home-main">
      <div className="header">
        <HeaderComponent />
      </div>
      <div className="products">
        <Products />
      </div>
    </div>
  );
};

export default Home;
