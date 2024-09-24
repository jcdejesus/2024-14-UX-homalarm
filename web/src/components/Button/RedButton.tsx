import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

interface BlueButtonTextProps {
  text?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}

export const RedButtonText: React.FC<BlueButtonTextProps> = ({
  text,
  onClick,
  icon,
}) => {
  const ButtonText = styled(Button)(({ theme }) => ({
    width: 'inherit',
    backgroundColor: theme.palette.error.main,
    color: theme.palette.primary.contrastText,
    '&:hover': {
      color: theme.palette.primary.contrastText,
      backgroundColor: '#E57373', // Light color for #DC2F2F
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
