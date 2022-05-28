import React from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const BootstrapButton = styled(Button)({
  borderRadius: "1rem",
  backgroundColor: "#eff3f9",
  borderRadius: "10px",
  border: "1px solid #32e7a4",
  padding: "0.5rem",
});
function ActionButton() {
  return (
    <>
      <BootstrapButton>Take Action</BootstrapButton>
    </>
  );
}

export default ActionButton;
