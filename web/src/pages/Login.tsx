import React from 'react';
import { InputText } from '../components/Input/InputText';
import { BlueButtonText } from '../components/Button/BlueButton';
import { Box, Link, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import logo from '../assets/logo.png';

export const Login: React.FC = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const theme = useTheme();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      sx={{
        width: '100vw',
        height: '100vh',
        padding: theme.spacing(2),
        background: theme.palette.background.default,
      }}
    >
      <img
        src={logo}
        alt="Descripción de la imagen"
        style={{ width: '450px', height: '450px' }}
      />
      <form onSubmit={handleSubmit}>
        <InputText direction="Column" text="Usuario" />
        <InputText direction="Column" text="Contraseña" />
      </form>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          // TODO: check how to increase width to inputs
          // width: '23%', 
          padding: theme.spacing(2),
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: theme.spacing(1), // Espacio entre los enlaces
          }}
        >
          <Link
            href="/forgot-password"
            sx={{
              color: theme.palette.primary.contrastText,
            }}
          >
            <Typography fontWeight="bold">Olvidó contraseña?</Typography>
          </Link>

          <Link
            href="/signup"
            sx={{
              color: theme.palette.primary.contrastText,
            }}
          >
            <Typography fontWeight="bold">Crear cuenta</Typography>
          </Link>
        </Box>
        <BlueButtonText text="Iniciar"></BlueButtonText>
      </Box>
    </Box>
  );
};
