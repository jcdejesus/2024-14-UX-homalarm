import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './styles/Theme';
import { CssBaseline } from '@mui/material';
import { Login } from './pages/Login';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Signup } from './pages/Signup';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/singup" element={<Signup />}></Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
