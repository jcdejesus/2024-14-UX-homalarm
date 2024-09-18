import { Switch } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

interface SwitchProps {}

export const GreenSwitch: React.FC = () => {
  const Component = styled((props: SwitchProps) => (
    <Switch disableRipple {...props} />
  ))(({ theme }) => ({
    width: theme.spacing(13),
    height: theme.spacing(8),
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: theme.spacing(0.5),
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(20px)",
        color: theme.palette.common.white,
        "& + .MuiSwitch-track": {
          backgroundColor: theme.palette.info.light,
          opacity: 1,
          border: 0,
        },
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: theme.spacing(7),
      height: theme.spacing(7),
      backgroundColor: theme.palette.common.white,
    },
    "& .MuiSwitch-track": {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.grey.A400,
      opacity: 1,
      transition: theme.transitions.create(["background-color"], {
        duration: 500,
      }),
    },
  }));

  return <Component />;
};
