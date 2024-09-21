import React, { useState } from 'react';
import { InputText } from '../components/Input/InputText';
import { BlueButtonText } from '../components/Button/BlueButton';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Grid2,
  Link,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import logo from '../assets/logo.png';

export const Signup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const theme = useTheme();
  const navigate = useNavigate();

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
        background: theme.palette.background.default,
      }}
    >
      <Grid2 container spacing={2} columns={16}>
        <Grid2
          size={7}
          sx={{
            padding: `0 0 ${theme.spacing(10)} ${theme.spacing(25)}`,
          }}
        >
          <img
            src={logo}
            alt="Descripción de la imagen"
            style={{ width: '450px', height: '450px' }}
          />
          <Typography
            variant="h6"
            sx={{ color: theme.palette.secondary.contrastText }}
          >
            ¡Bienvenido a <strong>Homalarm!</strong> 🎉
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: theme.palette.secondary.contrastText }}
          >
            <strong>Homalarm</strong> es la solución perfecta para mantenerte
            conectado y organizado con tus seres queridos. Nuestra app de
            alarmas compartidas te permite crear, gestionar y sincronizar
            alarmas con amigos, familiares o compañeros de trabajo, asegurando
            que todos estén siempre en la misma página.
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: theme.palette.secondary.contrastText }}
          >
            ¿Por qué deberías registrarte?
          </Typography>
          <List
            sx={{
              color: theme.palette.secondary.contrastText,
              paddingTop: 0,
              paddingBottom: 0,
            }}
          >
            <ListItem sx={{ paddingTop: 0, paddingBottom: 0 }}>
              <ListItemText
                primary="• Coordinación Simplificada"
                primaryTypographyProps={{ fontWeight: 'bold' }}
              />
            </ListItem>
            <ListItem sx={{ paddingTop: 0, paddingBottom: 0 }}>
              <ListItemText
                primary="• Conexión Constante"
                primaryTypographyProps={{ fontWeight: 'bold' }}
              />
            </ListItem>
            <ListItem sx={{ paddingTop: 0, paddingBottom: 0 }}>
              <ListItemText
                primary="• Fácil de Usar"
                primaryTypographyProps={{ fontWeight: 'bold' }}
              />
            </ListItem>
            <ListItem sx={{ paddingTop: 0, paddingBottom: 0 }}>
              <ListItemText
                primary="• Notificaciones en Tiempo Real"
                primaryTypographyProps={{ fontWeight: 'bold' }}
              />
            </ListItem>
          </List>
          <Typography
            variant="body1"
            sx={{ color: theme.palette.secondary.contrastText }}
          >
            Regístrate hoy y descubre cómo <strong>Homalarm</strong> puede
            ayudarte a mantenerte organizado y conectado con las personas que
            más te importan. 🚀
          </Typography>
        </Grid2>

        <Grid2 size={3} />
        <Grid2
          size={6}
          sx={{
            padding: `${theme.spacing(10)} ${theme.spacing(25)} 0 0`,
          }}
        >
          <form onSubmit={handleSubmit}>
            <InputText
              direction="Row"
              text="Nombre"
              color={theme.palette.secondary.contrastText}
            />
            <InputText
              direction="Row"
              text="Apellido"
              color={theme.palette.secondary.contrastText}
            />
            <InputText
              direction="Row"
              text="Correo"
              color={theme.palette.secondary.contrastText}
            />
            <InputText
              direction="Row"
              text="Correo"
              color={theme.palette.secondary.contrastText}
            />
            <InputText
              direction="Row"
              text="Celular"
              color={theme.palette.secondary.contrastText}
            />
            <InputText
              direction="Row"
              text="Contraseña"
              color={theme.palette.secondary.contrastText}
            />
            <InputText
              direction="Row"
              text="Contraseña"
              color={theme.palette.secondary.contrastText}
            />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <Typography
                  variant="caption"
                  sx={{ color: theme.palette.secondary.contrastText }}
                >
                  Ya posee cuenta
                </Typography>
                <Link
                  href="/"
                  sx={{
                    color: theme.palette.primary.contrastText,
                  }}
                >
                  <Typography variant="caption" fontWeight="bold">
                    Inicie sesion aquí
                  </Typography>
                </Link>
              </Box>
              <BlueButtonText text="Crear" onClick={() => navigate('/')} />
            </Box>
          </form>
        </Grid2>
      </Grid2>
    </Box>
  );
};
