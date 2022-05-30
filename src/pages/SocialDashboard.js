import React from "react";
import MalesFemales from "./social-sub-components/MalesFemales";
import TrainingDevelopment from "./social-sub-components/TrainingDevelopment";
import "./socialDashboard.css";

function SocialDashboard() {
  return (
    <div className="social_container">
      <MalesFemales></MalesFemales>
      <TrainingDevelopment></TrainingDevelopment>
      <MalesFemales></MalesFemales>
      <TrainingDevelopment></TrainingDevelopment>
    </div>
  );
}

export default SocialDashboard;
