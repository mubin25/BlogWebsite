import React from "react";
import img from '../Images/aboutus.jpeg'

const Aboutus = () => {
  return (
    <>
    <div className="d-flex flex-column align-items-center ">
              <img
                src={img}
                alt="about us"
                className="mb-2 img-thumbnail" style={{width:'150px',height:'180px'}}
              />
              <p className="food-para text-dark fw-bold">Mubin Khan</p>
      </div>        
      <p className="food-para ">
        Our team of passionate writers, photographers, and locals captures the
        unique spirit of Kashmir through engaging articles, beautiful
        photography, and in-depth guides. From popular landmarks to lesser-known
        spots, and from local cuisine to community events, we aim to bring you
        closer to the heart of this place.
      </p>
    </>
  );
};

export default Aboutus;
