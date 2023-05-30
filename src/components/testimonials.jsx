import "../sass/testimonials.scss";
import { testimonials } from "./data";

const Testimonials = () => {
  return (
    <div className="testimonial-main">
      <div className="container">
        <div className="head-text">
          <h1>
            Don’t Take Our <span>Word</span> For It
          </h1>
          <p>Listen to testimonials from Ardilla users building wealth</p>
        </div>
        <div className="image-section">
          <div className="row">
            {testimonials.map(items=> {
              return (
                <div className="col-md-4" key={items.id}>
                  <img src={items.image} alt="" />
                  <div className="text">
                    <p>{items.name}</p>
                  <span>{items.messages}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="videos-testimonials"></div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
