import React, { useState } from "react";
import { Button } from "@mui/material";
import "./subNavbar.css";
import { styled } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { FaBars } from "react-icons/fa";

const BootstrapButton = styled(Button)({
  color: "primary",
  marginRight: "1rem",
  backgroundColor: "#155EA2",
  minWidth: "3rem",
  color: "white",
  "&:hover": {
    backgroundColor: "none",
    boxShadow: "none",
  },
});
const BootstrapButton2 = styled(Button)({
  color: "primary",
  backgroundColor: "#32E7A4",
  minWidth: "2rem",
});

function SubNavbar() {
  const [organization, setOrganization] = useState("");
  const [industry, setIndustry] = useState("");
  const [facility, setFacility] = useState("");

  const handleChangeOrganization = (e) => {
    setOrganization(e.target.value);
  };

  const handleChangeIndustry = (e) => {
    setIndustry(e.target.value);
  };

  const handleChangeFacility = (e) => {
    setFacility(e.target.value);
  };
  return (
    <div className="sub_navbar_container">
      <div className="top_bar">
        <div className="tabs">
          <BootstrapButton>E</BootstrapButton>
          <BootstrapButton>S</BootstrapButton>
          <BootstrapButton>G</BootstrapButton>
        </div>
        <div className="selectionTypes">
          <FormControl
            sx={{ m: 1, width: 250, marginRight: "2rem" }}
            size="small"
          >
            <InputLabel id="demo-select-small">Organization</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={organization}
              label="organization"
              onChange={handleChangeOrganization}
            >
              <MenuItem value={10}>Apple</MenuItem>
              <MenuItem value={20}>Tata</MenuItem>
              <MenuItem value={30}>Uber</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            sx={{ m: 1, width: 250, marginRight: "2rem" }}
            size="small"
          >
            <InputLabel id="demo-select-small">Industry</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={industry}
              label="industry"
              onChange={handleChangeIndustry}
            >
              <MenuItem value={10}>Auto-Mobile</MenuItem>
              <MenuItem value={20}>Banking</MenuItem>
              <MenuItem value={30}>Information Technology</MenuItem>
            </Select>
          </FormControl>
          <BootstrapButton2 variant="contained" color="success" size="small">
            <FaBars></FaBars>
          </BootstrapButton2>
        </div>
      </div>
      <div className="bottom_bar">
        <div className="page_title">Overview</div>
        <div className="selection">
          <FormControl
            sx={{ m: 1, width: 250, marginRight: "2rem" }}
            size="small"
          >
            <InputLabel id="demo-select-small">Facility</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={facility}
              label="facility"
              onChange={handleChangeFacility}
            >
              <MenuItem value={10}>Beta office</MenuItem>
              <MenuItem value={20}>Alpha office</MenuItem>
              <MenuItem value={30}>Sigma office</MenuItem>
            </Select>
          </FormControl>
          {/* <div className="years">
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <Select
                value={age}
                onChange={handleChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">
                  <em>2020-2021</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default SubNavbar;
