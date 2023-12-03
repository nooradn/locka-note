import * as React from "react";
import Button from "@mui/material/Button";

function ButtonUsage({ name, style , stateColor}) {
  return (
    <>
      <Button
        variant={style ? style : "outlined"}
        sx={{ margin: "5px" }}
        color={stateColor ? stateColor : "primary"}
      >
        {name ? name : "Jomblo"}
      </Button>
    </>
  );
}

export default ButtonUsage;
