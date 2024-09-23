import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

interface GrayButtonTextProps {
  text: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}

export const GrayButtonText: React.FC<GrayButtonTextProps> = ({
  text,
  onClick,
  icon,
}) => {
  const ButtonText = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.grey.A400,
    color: theme.palette.grey.A700,
    '&:hover': {
      backgroundColor: theme.palette.grey['100'],
    },
  }));
  return (
    <ButtonText
      variant="contained"
      color="primary"
      onClick={onClick}
      startIcon={icon}
    >
      {text}
    </ButtonText>
  );
};
