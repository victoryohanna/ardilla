import "../sass/partners.scss";
import { partners } from "./data";
import image17 from '../assets/image17.png';

const Partners = () => {
  return (
    <div className="partners-main">
      <div className="container">
        <div className="parners-logo">
          {partners.map((item) => {
            return <img src={item.logo} alt="" key={item.id} />;
          })}
        </div>
        <div className="card-section">
          <div className="partner-card">
            <h1>Also Available on the Web</h1>
            <p>
              Increase your bread & butter on the app or on the web.The Ardilla
              app services are also available on the web.
            </p>

            <img src={image17} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
