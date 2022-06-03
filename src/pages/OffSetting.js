import React from "react";
import ActionButton from "./governance-sub-component/ActionButton";
import "./offSetting.css";
function OffSetting() {
  return (
    <div className="offsetting_container">
      <div className="offsetting_header">Overview</div>
      <div className="offsetting_main_container">
        <div className="offsetting_infomation_container">
          <h2>Offsetting</h2>
          <p>
            As you have embarked on the climate journey, offset emissions that
            you cannot yet reduce and avoid. You can support a wide range of
            certified carbon offset projects across the world for immediate
            impact. Responsible investment in good quality offset projects sends
            a strong message to your community that you are committed to paving
            the way for a sustainable future.
          </p>
          <ActionButton></ActionButton>
        </div>
        <div className="offsetting_images_container"></div>
        <div className="offfsetting_projects_carousel"></div>
      </div>
    </div>
  );
}

export default OffSetting;
