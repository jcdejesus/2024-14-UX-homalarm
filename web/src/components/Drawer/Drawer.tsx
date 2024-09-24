import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from '@mui/material';
import React, { useState } from 'react';
import { theme } from '../../styles/Theme';

interface DrawerProps {
  id: string;
  drawerList: {
    id?: string;
    text: string;
    icon?: React.ReactNode;
  }[];
  buttonAction?: {
    text: string;
    onButtonClick: () => void;
  };
  onItemClick: (text: string) => void;
  selectedId: string
}

const DrawerList: React.FC<{
  drawerList: { id?: string; text: string; icon?: React.ReactNode }[];
  onItemClick: (text: string) => void;
  buttonAction?: {
    text: string;
    onButtonClick: () => void;
  };
  selectedId: string;
}> = ({ drawerList, onItemClick, buttonAction, selectedId }) => {
  const [selectedItem, setSelectedItem] = useState<string>(selectedId);

  const handleItemClick = (id: string) => {
    setSelectedItem(id);
    onItemClick(id);
  };

  return (
    <Box role="presentation">
      <List
        sx={{
          color: theme.palette.secondary.contrastText,
        }}
      >
        {buttonAction && (
          <ListItem key="Create" disablePadding>
            <ListItemButton onClick={buttonAction.onButtonClick}>
              <ListItemText
                primary={buttonAction.text}
                primaryTypographyProps={{ fontWeight: 'bold' }}
              />
            </ListItemButton>
          </ListItem>
        )}
        <Divider sx={{ backgroundColor: theme.palette.primary.main }} />
        {drawerList.map((item) => (
          <>
            <ListItem
              key={item.text}
              disablePadding
              sx={{
                backgroundColor:
                  selectedItem === item.id
                    ? theme.palette.primary.light
                    : 'inherit',
              }}
            >
              <ListItemButton onClick={() => handleItemClick(item.id)}>
                {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{ fontWeight: 'bold' }}
                />
              </ListItemButton>
            </ListItem>
            {!item.icon && (
              <Divider sx={{ backgroundColor: theme.palette.primary.main }} />
            )}
          </>
        ))}
      </List>
    </Box>
  );
};

export const BlueDrawer: React.FC<DrawerProps> = (props) => {
  const StyledDrawer = styled(Drawer)({
    '& .MuiDrawer-paper': {
      width: props.id === 'home-sidebar' ? '327px' : '249px',
      marginLeft: props.id !== 'home-sidebar' ? '327px' : '',
      backgroundColor:
        props.id === 'home-sidebar' ? '#113F67' : 'rgba(17, 63, 103, 0.8)',
    },
  });

  return (
    <StyledDrawer id={props.id} variant="permanent" anchor="left">
      <DrawerList
        drawerList={props.drawerList}
        onItemClick={props.onItemClick}
        buttonAction={props.buttonAction}
        selectedId={props.selectedId}
      />
    </StyledDrawer>
  );
};
