import React, { useState } from 'react';
import { InputText } from '../components/Input/InputText';
import { BlueButtonText } from '../components/Button/BlueButton';
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

export const Signup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const theme = useTheme();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle signup logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        padding: theme.spacing(2),
        background: theme.palette.background.default,
      }}
    >
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <InputText direction="Column" text="Usuario" />
        </div>
        <div>
          <InputText direction="Column" text="Contraseña" />
        </div>
        <BlueButtonText text="Iniciar"></BlueButtonText>
      </form>
    </Box>
  );
};
