import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ActionButton from "./Button";
import OffsettingImages from "./offsetting-sub-components/OffsettingImages";
import renewableEnergy from "../assets/images/renewable-energy.png";
import air from "../assets/images/air.png";
import forest from "../assets/images/forest.png";
import energyEfficiency from "../assets/images/EnergyEfficiency.png";
import cleanWater from "../assets/images/clean-water.png";
import soil from "../assets/images/soil.png";
import ocean from "../assets/images/ocean.png";
import mineral from "../assets/images/mine.png";
import solar from "../assets/images/solar.png";
import fuel from "../assets/images/fuel.png";
import rice from "../assets/images/rice.png";
import water from "../assets/images/water.png";
import hydroPower from "../assets/images/hydroPower.png";
import "./offSetting.css";
import OffsettingProjectsCards from "./offsetting-sub-components/OffsettingProjectsCards";

function OffSetting() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  
  return (
    <div className="offsetting_container">
      <div className="offsetting_header">Overview</div>
      <div className="offsetting_main_container">
        <div className="offsetting_infomation_container">
          <h2>Offsetting</h2>
          <p className="offsetting_info">
            As you have embarked on the climate journey, offset emissions that
            you cannot yet reduce and avoid. You can support a wide range of
            certified carbon offset projects across the world for immediate
            impact. Responsible investment in good quality offset projects sends
            a strong message to your community that you are committed to paving
            the way for a sustainable future.
          </p>
          <ActionButton buttonName="offset Now"></ActionButton>
        </div>
        <div className="offsetting_images_container">
          <OffsettingImages
            name="Renewable Engery"
            imgURL={renewableEnergy}
          ></OffsettingImages>
          <OffsettingImages
            name="Direct Air Capture"
            imgURL={air}
          ></OffsettingImages>
          <OffsettingImages name="Forestry" imgURL={forest}></OffsettingImages>
          <OffsettingImages
            name="Energy Efficiency"
            imgURL={energyEfficiency}
          ></OffsettingImages>
          <OffsettingImages
            name="Clean Water"
            imgURL={cleanWater}
          ></OffsettingImages>
          <OffsettingImages name="Soil" imgURL={soil}></OffsettingImages>
          <OffsettingImages name="Ocean" imgURL={ocean}></OffsettingImages>
          <OffsettingImages
            name="Mineralization"
            imgURL={mineral}
          ></OffsettingImages>
        </div>
        <div className="offfsetting_projects_carousel">
          <h5>Our Project Portfolio </h5>
          <Slider {...settings}>
            <div>
              <OffsettingProjectsCards
                imgURL={solar}
                type="Renewables"
                country="India"
                title="Solar Park by ABC Renewables"
              ></OffsettingProjectsCards>
            </div>
            <div>
              <OffsettingProjectsCards
                imgURL={fuel}
                type="Energy Efficiency"
                country="Rwanda"
                title="Fuel Efficient Stoves"
              ></OffsettingProjectsCards>
            </div>
            <div>
              <OffsettingProjectsCards
                imgURL={rice}
                type="Renewables"
                country="Cambodia"
                title="Rice Husk Energy Generations"
              ></OffsettingProjectsCards>
            </div>
            <div>
              <OffsettingProjectsCards
                imgURL={water}
                type="Clean Water"
                country="India"
                title="Production of Ceramic Water Purifiers"
              ></OffsettingProjectsCards>
            </div>
            <div>
              <h3>
                <OffsettingProjectsCards
                  imgURL={hydroPower}
                  type="Renewables"
                  country="India"
                  title="Girna Hydro Power Project"
                ></OffsettingProjectsCards>
              </h3>
            </div>
          </Slider>
          <ActionButton buttonName="All Projects  "></ActionButton>
        </div>
      </div>
    </div>
  );
}

export default OffSetting;
