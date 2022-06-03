import React from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const BootstrapButton = styled(Button)({
  backgroundColor: "#eff3f9",
  borderRadius: "10px",
  border: "1px solid #32e7a4",
  padding: "0.5rem 0.8rem",
  fontSize: "12px",
  fontWeight: "bold",
  width: "auto",
  height: "3rem",
  // margin: " 0 1rem",
});
function ActionButton(props) {
  return (
    <>
      <BootstrapButton>{props.buttonName}</BootstrapButton>
    </>
  );
}

export default ActionButton;
