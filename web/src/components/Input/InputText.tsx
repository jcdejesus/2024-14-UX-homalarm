import React from "react";
import { styled } from "@mui/material/styles";
import { InputLabel, InputBase } from "@mui/material";

interface InputTextProps {
  text: String;
}

export const InputText: React.FC<InputTextProps> = ({ text }) => {
  const Button = styled(InputBase)(({ theme }) => ({
    "label + &": {
      marginTop: theme.spacing(2),
    },
    "& .MuiInputBase-input": {
      color: theme.palette.text.primary,
      boxSizing: "border-box",
      position: "relative",
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
        boxShadow: "#FFF",
        borderColor: theme.palette.primary.main,
      },
    },
  }));

  const Label = styled(InputLabel)(({ theme }) => ({
    color: theme.palette.text.primary,
    fontSize: "1rem",
  }));

  return (
    <>
      <Label> {text} </Label>
      <Button />
    </>
  );
};
