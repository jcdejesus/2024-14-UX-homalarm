import { Box } from '@mui/material';
import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import GroupsIcon from '@mui/icons-material/Groups';
import AlarmIcon from '@mui/icons-material/Alarm';
import { theme } from '../../styles/Theme';
import { BlueDrawer } from '../../components/Drawer/Drawer';
import { AlarmComponent } from './components/alarms/AlarmComponent';
import { GroupComponent } from './components/groups/GroupComponent';

const drawerList = [
  {
    id: '1',
    text: 'Alarmas',
    icon: <AlarmIcon sx={{ color: theme.palette.secondary.contrastText }} />,
  },
  {
    id: '2',
    text: 'Grupos',
    icon: <GroupsIcon sx={{ color: theme.palette.secondary.contrastText }} />,
  },
];

const drawerWidth = 327;
export const Home: React.FC = () => {
  const theme = useTheme();
  const [selectedComponent, setSelectedComponent] = useState<string>('1');

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
        id="home-sidebar"
        drawerList={drawerList}
        onItemClick={handleDrawerItemClick}
      ></BlueDrawer>
      <Box sx={{ marginLeft: `${drawerWidth}px` }}>
        {selectedComponent === '1' && <AlarmComponent />}
        {selectedComponent === '2' && <GroupComponent />}
      </Box>
    </Box>
  );
};