import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from '@mui/material';
import React from 'react';
import { theme } from '../../styles/Theme';

interface DrawerProps {
  drawerList: {
    text: string;
    icon: React.ReactNode;
  }[];
  onItemClick: (text: string) => void;
}

const DrawerList: React.FC<{
  drawerList: { text: string; icon: React.ReactNode }[];
  onItemClick: (text: string) => void;
}> = ({ drawerList, onItemClick }) => (
  <Box role="presentation">
    <List
      sx={{
        color: theme.palette.secondary.contrastText,
      }}
    >
      {drawerList.map((item) => (
        <ListItem key={item.text} disablePadding>
          <ListItemButton onClick={() => onItemClick(item.text)}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText
              primary={item.text}
              primaryTypographyProps={{ fontWeight: 'bold' }}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </Box>
);

export const BlueDrawer: React.FC<DrawerProps> = (props) => {
  const StyledDrawer = styled(Drawer)({
    '& .MuiDrawer-paper': {
      width: 327,
      backgroundColor: '#113F67',
    },
  });

  return (
    <StyledDrawer variant="permanent" anchor="left">
      <DrawerList
        drawerList={props.drawerList}
        onItemClick={props.onItemClick}
      />
    </StyledDrawer>
  );
};
