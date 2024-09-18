import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

interface BlueButtonTextProps {
  text?: String;
}

export const BlueButtonText: React.FC<BlueButtonTextProps> = ({
  text,
}) => {
  const ButtonText = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    "&:hover": {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.light,
    },
  }));
  return (
    <ButtonText variant="contained" color="primary">
      {text}
    </ButtonText>
  );
};
