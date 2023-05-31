import "../sass/partners.scss";
import { partners } from "./data";
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
          <div className="card">
            <div className="card-body">
              <h1>Also Available on the Web</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                impedit. Ut esse quasi doloremque ullam ducimus aliquid cum
                possimus earum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
