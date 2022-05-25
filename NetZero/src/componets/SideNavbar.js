import React from "react";
import brand from "./../assets/images/NZP-logo.png";
import "./sideNavbar.css";
import Button from "@mui/material/Button";
import fourSqaure from "./../assets/icons/foursquare.png";
import { MdArticle } from "react-icons/md";
import { styled } from "@mui/material/styles";

const BootstrapButton = styled(Button)({
  color: "primary",
  // backgroundColor: "#eff3f9",
  padding: "1rem 1.5rem",
  fontWeight: "bold",
  borderRadius: "1rem",
  width: "90%",
});

const BootstrapButton2 = styled(Button)({
  color: "secondary",
  width: "60%",
  "&:hover": {
    backgroundColor: "transparent",
    boxShadow: "none",
  },
  margin: "0 1rem",
});

function SideNavbar() {
  return (
    <>
      <div className="sideNavbar_container">
        <img src={brand} alt="Brand logo" className="brand" />
        <p>Amount</p>
        <span className="line"></span>
        {/* <div className="buttons_container"> */}
        <BootstrapButton>
          <img
            src={fourSqaure}
            width="16px"
            alt="icon"
            className="foursquare_icon"
          ></img>
          Overview
        </BootstrapButton>
        <div className="carbon_accounting">
          <span className="line"></span>
          <BootstrapButton2>
            <MdArticle size={30}></MdArticle>Carbon Accounting Ledger
          </BootstrapButton2>
          <span className="line"></span>
        </div>
        {/* </div> */}
      </div>
    </>
  );
}

export default SideNavbar;
