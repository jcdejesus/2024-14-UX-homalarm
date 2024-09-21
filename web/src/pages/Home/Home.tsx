import { Box } from '@mui/material';
import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import GroupsIcon from '@mui/icons-material/Groups';
import AlarmIcon from '@mui/icons-material/Alarm';
import { theme } from '../../styles/Theme';
import { BlueDrawer } from '../../components/Drawer/Drawer';
import { AlarmComponent } from './components/AlarmComponent';
import { GroupComponent } from './components/GroupComponent';

const drawerList = [
  {
    text: 'Alarmas',
    icon: <AlarmIcon sx={{ color: theme.palette.secondary.contrastText }} />,
  },
  {
    text: 'Grupos',
    icon: <GroupsIcon sx={{ color: theme.palette.secondary.contrastText }} />,
  },
];

export const Home: React.FC = () => {
  const theme = useTheme();
  const [selectedComponent, setSelectedComponent] = useState<string>('Alarmas');

  const handleDrawerItemClick = (text: string) => {
    setSelectedComponent(text);
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
      <BlueDrawer
        drawerList={drawerList}
        onItemClick={handleDrawerItemClick}
      ></BlueDrawer>
      <Box sx={{ marginLeft: '327px' }}>
        {selectedComponent === 'Alarmas' && <AlarmComponent />}
        {selectedComponent === 'Grupos' && <GroupComponent />}
      </Box>
    </Box>
  );
};
