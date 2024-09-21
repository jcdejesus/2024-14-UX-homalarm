import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

interface BlueButtonTextProps {
  text?: string;
  onClick?: () => void;
}

export const BlueButtonText: React.FC<BlueButtonTextProps> = ({
  text,
  onClick,
}) => {
  const ButtonText = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    '&:hover': {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.light,
    },
  }));
  return (
    <ButtonText variant="contained" color="primary" onClick={onClick}>
      {text}
    </ButtonText>
  );
};
