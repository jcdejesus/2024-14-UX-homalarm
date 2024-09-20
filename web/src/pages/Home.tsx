import { Box } from '@mui/material';
import React from 'react';
import { useTheme } from '@mui/material/styles';

export const Home: React.FC = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        padding: theme.spacing(2),
        background: theme.palette.background.default,
      }}
    >
      <h1>Home Page</h1>
    </Box>
  );
};
