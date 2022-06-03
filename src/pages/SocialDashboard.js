import React from "react";
import MalesFemales from "./social-sub-components/MalesFemales";
import NewHiringAge from "./social-sub-components/NewHiringAge";
import TrainingDevelopment from "./social-sub-components/TrainingDevelopment";
import "./socialDashboard.css";
import "./chart-component.css";
import TypesTraining from "./social-sub-components/TypesTraining";
import HealthSafety from "./social-sub-components/HealthSafety";
import SubNavbar from "../componets/SubNavbar";

function SocialDashboard() {
  return (
    <div className="social_container">
      <SubNavbar></SubNavbar>
      <div className="social_charts_container">
        <MalesFemales></MalesFemales>
        <TrainingDevelopment></TrainingDevelopment>
        <NewHiringAge></NewHiringAge>
        <TypesTraining></TypesTraining>
        <HealthSafety></HealthSafety>
      </div>
    </div>
  );
}

export default SocialDashboard;
