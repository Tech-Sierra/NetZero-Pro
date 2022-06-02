import React from "react";
import { AiFillInfoCircle } from "react-icons/ai";
import { Button } from "@mui/material";
import ActionButton from "../governance-sub-component/ActionButton";
import HealthSafetyCharts from "./HealthSafetyCharts";
import labels from "../../assets/images/labels.png";

function HealthSafety() {
  return (
    <div className="chart_container health_safety">
      {/* <div className="health_header"> */}
      <div className="header_title">
        <div className="title">
          <p>New Hiring in the company in the following age groups</p>
        </div>
        <Button>
          <AiFillInfoCircle color="grey"></AiFillInfoCircle>
        </Button>
      </div>
      <div className="health_charts_container">
        <HealthSafetyCharts
          Xlabel="II (excl personal transport)"
          data1="297"
          data2="212"
          data3="41"
        ></HealthSafetyCharts>
        <HealthSafetyCharts
          Xlabel="II (incl personal transport)"
          data1="546"
          data2="1062"
          data3="221"
        ></HealthSafetyCharts>
        <HealthSafetyCharts
          Xlabel="Lost Day rate"
          data1="0.256"
          data2="0.22"
          data3="0.018"
        ></HealthSafetyCharts>
        <HealthSafetyCharts
          Xlabel="II-Lost-Days (excl)"
          data1="589"
          data2="551"
          data3="39"
        ></HealthSafetyCharts>
        <HealthSafetyCharts
          Xlabel="II-Lost-Days (incl)"
          data1="9280"
          data2="6556"
          data3="2189"
        ></HealthSafetyCharts>
        <div>
          <img src={labels} alt="labels" width="140" />
        </div>
        <HealthSafetyCharts
          Xlabel="IIR (excl personal transport)"
          data1="0.144"
          data2="0.103"
          data3="0.018"
        ></HealthSafetyCharts>
        <HealthSafetyCharts
          Xlabel="IIR (incl personal transport)"
          data1="0.275"
          data2="0.526"
          data3="0.116"
        ></HealthSafetyCharts>
        <HealthSafetyCharts
          Xlabel="Diseases-Ergonomic"
          data1="1912"
          data2="2226"
          data3="449"
        ></HealthSafetyCharts>
        <HealthSafetyCharts
          Xlabel="Occupational Disease Rate"
          data1="0.928"
          data2="1.693"
          data3="0.229"
        ></HealthSafetyCharts>
        <div className="health_chart_description">
          <div className="long_forms">
            <p>II: Industrial Injury</p>
            <p>IIR: Industrial Injury Rate</p>
          </div>
          <span className="hori_line" />
          <div className="IRR_description">
            <p>
              The IIR rate is equivalent of 100 employees working for 40 hours
              per week, 50 weeks per year.
            </p>
          </div>
          <div className="action_button">
            <ActionButton></ActionButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HealthSafety;
