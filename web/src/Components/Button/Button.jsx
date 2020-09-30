import React from "react";
import Button from "@material-ui/core/Button";

export default function SampleButton({ color, label, onclick, icon }) {
  return (
    <Button variant='contained' color={color || "primary"} onClick={onclick} endIcon={icon}>
      {label || "button"}
    </Button>
  );
}
