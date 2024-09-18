import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

interface GrayButtonTextProps {
  text: String;
}

export const GrayButtonText: React.FC<GrayButtonTextProps> = ({
  text,
}) => {
  const ButtonText = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.grey.A400,
    color: theme.palette.grey.A700,
    "&:hover": {
      backgroundColor: theme.palette.grey["100"],
    },
  }));
  return (
    <ButtonText variant="contained" color="primary">
      {text}
    </ButtonText>
  );
};
