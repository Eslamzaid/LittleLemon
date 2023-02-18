import React, { Component } from "react";
import Numo from "./../../../assets/Main/noma.png";
import Roca from "./../../../assets/Main/Roca.png";
import AA from "./../../../assets/Main/aa.png";
import Tglobe from "./../../../assets/Main/theglob.png";
import Mac from "./../../../assets/Main/Mac.png";
import BurgerK from "./../../../assets/Main/BurgerKing.png";
import Subway from "./../../../assets/Main/Subway.png";
import KFC from "./../../../assets/Main/KFC.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class PauseOnHover extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      adaptiveHeight: true,
      arrows: false,
    };
    return (
      <div className="TheBIgdog">
        <Slider {...settings}>
            <div className="TheImgges">
              <img src={Numo} alt="numo is one of our partenrs" id="SoemWIthg"/>
            </div>
            <div className="TheImgges">
              <img src={AA} alt="A.a is one of our partenrs" id="SoemWIthg"/>
            </div>
            <div className="TheImgges">
              <img src={Tglobe} alt="The globe is one of our partenrs" id="SoemWIthg"/>
            </div>
            <div className="TheImgges">
              <img src={Mac} alt="Mac is one of our partenrs" id="SoemWIthg"/>
            </div>
            <div className="TheImgges">
              <img src={BurgerK} alt="Burger King is one of our partenrs" id="SoemWIthg"/>
            </div>
            <div className="TheImgges">
              <img src={Subway} alt="Subway is one of our partenrs" id="SoemWIthg"/>
            </div>
            <div className="TheImgges">
              <img src={KFC} alt="Kfc is one of our partenrs" id="SoemWIthg"/>
            </div>
        </Slider>
      </div>
    );
  }
}
