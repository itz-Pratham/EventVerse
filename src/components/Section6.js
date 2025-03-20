import React from "react";
import "../css/section6.css"; 

const Section6 = () => {
  return (
    <div className="marquee">
      <div className="marquee-inner">
        <img
          alt="slideArtist"
          loading="lazy"
          className="marquee-img"
          src="https://www.jashnerekhta.org/_next/image?url=%2Fassets%2Fimg%2Fhome%2FartistCollageImagenew.png&w=3840&q=75"
        />
        <img
          alt="slideArtist"
          loading="lazy"
          className="marquee-img"
          src="https://www.jashnerekhta.org/_next/image?url=%2Fassets%2Fimg%2Fhome%2FartistCollageImagenew.png&w=3840&q=75"
        />
      </div>
    </div>
  );
};

export default Section6;
