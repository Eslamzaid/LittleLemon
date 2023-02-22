import React, { Component, useEffect, useState } from "react";
import Numo from "./../../../assets/Main/noma.png";
import AA from "./../../../assets/Main/aa.png";
import Tglobe from "./../../../assets/Main/theglob.png";
import BurgerK from "./../../../assets/Main/BurgerKing.png";
import Subway from "./../../../assets/Main/Subway.png";
import KFC from "./../../../assets/Main/KFC.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function PauseOnHover() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    adaptiveHeight: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1044,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 834,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="TheBIgdog">
      <Slider {...settings}>
        <div className="TheImgges">
          <img src={Numo} alt="numo is one of our partenrs" id="SoemWIthg" />
        </div>
        <div className="TheImgges">
          <img src={AA} alt="A.a is one of our partenrs" id="SoemWIthg" />
        </div>
        <div className="TheImgges">
          <img
            src={Tglobe}
            alt="The globe is one of our partenrs"
            id="SoemWIthg"
          />
        </div>
        <div className="TheImgges">
          <img
            src={BurgerK}
            alt="Burger King is one of our partenrs"
            id="SoemWIthg"
          />
        </div>
        <div className="TheImgges">
          <img
            src={Subway}
            alt="Subway is one of our partenrs"
            id="SoemWIthg"
          />
        </div>
        <div className="TheImgges">
          <img src={KFC} alt="Kfc is one of our partenrs" id="SoemWIthg" />
        </div>
      </Slider>
    </div>
  );
}
