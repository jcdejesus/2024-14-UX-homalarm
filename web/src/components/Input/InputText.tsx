import React from "react";
import { styled } from "@mui/material/styles";
import { InputLabel, InputBase } from "@mui/material";

import Box from "@mui/material/Box";

interface InputTextProps {
  text: String;
  direction: "Row" | "Column";
}

export const InputText: React.FC<InputTextProps> = ({
  text,
  direction,
}) => {
  const Button = styled(InputBase)(({ theme }) => ({
    "& .MuiInputBase-input": {
      color: theme.palette.text.primary,
      boxSizing: "border-box",
      backgroundColor: theme.palette.background.paper,
      border: "1px solid",
      borderColor: theme.palette.primary.main,
      width: "auto",
      padding: `0 ${theme.spacing(4)}`,
      borderRadius: theme.shape.borderRadius,
      height: "48px",
      transition: theme.transitions.create([
        "border-color",
        "background-color",
        "box-shadow",
      ]),
      "&:focus": {
        boxShadow: theme.palette.common.white,
        borderColor: theme.palette.primary.main,
      },
    },
  }));

  const Label = styled(InputLabel)(({ theme }) => ({
    color: theme.palette.text.primary,
    fontSize: "1rem",
  }));

  const boxStyle = {
    display: "flex",
    flexDirection: "",
    columnGap: "",
    rowGap: "",
    alignItems: "",
  };

  if (direction == "Row") {
    boxStyle.flexDirection = "row";
    boxStyle.columnGap = "12px";
    boxStyle.alignItems = "center";
  } else {
    boxStyle.flexDirection = "column";
    boxStyle.rowGap = "12px";
  }

  return (
    <Box component="div" sx={boxStyle}>
      <Label> {text} </Label>
      <Button />
    </Box>
  );
};
