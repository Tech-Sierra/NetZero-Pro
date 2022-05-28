import React from "react";
import ActionTaken from "./governance-sub-component/ActionTaken";
import BoardStructure from "./governance-sub-component/BoardStructure";
import OmbudsProcess from "./governance-sub-component/OmbudsProcess";
import SourceOfComplain from "./governance-sub-component/SourceOfComplain";
import Womens from "./governance-sub-component/Womens";
import "./governance.css";

function Governance() {
  return (
    <div className="governance_container">
      <Womens></Womens>
      <BoardStructure></BoardStructure>
      <ActionTaken></ActionTaken>
      <OmbudsProcess></OmbudsProcess>
      <SourceOfComplain></SourceOfComplain>
      {/* <ActionTaken></ActionTaken> */}
    </div>
  );
}

export default Governance;
