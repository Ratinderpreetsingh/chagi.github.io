import React from "react";
import Slider from "react-slick";
import banner1 from "./img/banner1.jpg";
import banner2 from "./img/banner2.jpg";
import banner3 from "./img/banner3.jpg";
import banner4 from "./img/banner4.jpg";
const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="flex flex-wrap">
  
        <div>
          <img src={banner1} alt="" />
        </div>
        <div>
          <img src={banner3} alt="" />
        </div>
        <div>
          <img src={banner1} alt="" />
        </div>
        <div>
          <img  src={banner2}alt="" />
        </div>
       
        <div>
          <img src={banner4} alt="" />
        </div>
        
     
    </div>
  );
};

export default Banner;
