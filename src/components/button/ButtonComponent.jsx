import React from "react";
import Button from "@mui/material/Button";

const ButtonComponent = (props) => {
  return (
    <div>
      <Button
        variant={props.variant}
        sx={{
          width: props.width,
          textTransform: "none",
          color: props.color,
          borderColor: props.borderColor,
          backgroundColor: props.backgroundColor,
          padding:props.padding,
          borderRadius:"6px",
          borderWidth: props.borderWidth,
          font:props.font,
          justifyContent: props.endIcon ? "space-between" : null
        }}
        startIcon={props.icon}
        endIcon={props.endIcon}
        onClick={props.onClick}
      >
        {props.value}
      </Button>
    </div>
  );
};

export default ButtonComponent;
