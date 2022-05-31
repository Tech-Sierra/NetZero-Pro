import React from "react";
import MalesFemales from "./social-sub-components/MalesFemales";
import NewHiringAge from "./social-sub-components/NewHiringAge";
import TrainingDevelopment from "./social-sub-components/TrainingDevelopment";
import "./socialDashboard.css";

function SocialDashboard() {
  return (
    <div className="social_container">
      <MalesFemales></MalesFemales>
      <TrainingDevelopment></TrainingDevelopment>
      <NewHiringAge></NewHiringAge>
    </div>
  );
}

export default SocialDashboard;
