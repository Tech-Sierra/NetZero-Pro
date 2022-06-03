import React from "react";
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
import "./offSetting.css";
function OffSetting() {
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
        <div className="offfsetting_projects_carousel"></div>
      </div>
    </div>
  );
}

export default OffSetting;
