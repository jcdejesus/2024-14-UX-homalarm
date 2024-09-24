import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

interface BlueButtonTextProps {
  text?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}

export const YellowButtonText: React.FC<BlueButtonTextProps> = ({
  text,
  onClick,
  icon,
}) => {
  const ButtonText = styled(Button)(({ theme }) => ({
    width: 'inherit',
    backgroundColor: '#F3A333',
    color: theme.palette.primary.contrastText,
    '&:hover': {
      color: theme.palette.primary.contrastText,
      backgroundColor: '#F5B85C', // Light color for #F3A333
    },
    marginBottom: '2rem'
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
