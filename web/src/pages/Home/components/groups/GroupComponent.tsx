import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import EditIcon from '@mui/icons-material/Edit';
import { GroupSidebar } from './GroupSidebar';
import { theme } from '../../../../styles/Theme';
import { BlueButtonText } from '../../../../components/Button/BlueButton';
const initialGroups = [
  {
    id: '1',
    text: 'Grupo 1',
    members: [
      { id: '1', name:"Juan", img: 'https://picsum.photos/id/64/250' },
      { id: '2', name:"Pepé", img: 'https://picsum.photos/id/237/250' },
      { id: '3', name:"Axis", img: 'https://picsum.photos/id/375/250' },
    ],
  },
  {
    id: '2',
    text: 'Grupo 2',
    members: [{ id: '1', name:"Fer", img: 'https://picsum.photos/id/399/250' }],
  },
];
const drawerWidth = 327;

export const GroupComponent: React.FC = () => {
  const [groups, setGroups] = useState(initialGroups);
  const [selectedGroupId, setSelectedGroupId] = useState<string>('1');

  const handleCreateGroup = () => {
    const newGroup = {
      id: `${groups.length + 1}`,
      text: `Grupo ${groups.length + 1}`,
      members: [] as { id: string; name:string; img: string }[],
    };
    setGroups([...groups, newGroup]);
  };

  const handleSelectGroup = (id: string) => {
    setSelectedGroupId(id);
  };

  const handleDeleteMember = (groupId: string, memberIndex: number) => {
    setGroups((prevGroups) =>
      prevGroups.map((group) =>
        group.id === groupId
          ? {
              ...group,
              members: group.members.filter(
                (_, index) => index !== memberIndex
              ),
            }
          : group
      )
    );
  };

  return (
    <Box sx={{ display: 'flex', marginLeft: `${drawerWidth}px` }}>
      <GroupSidebar
        groups={groups}
        onCreateGroup={handleCreateGroup}
        onSelectGroup={handleSelectGroup}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          justifyContent: 'space-between',
          height: '95vh'
        }}>
        <Box
          sx={{
            display: 'flex',
            direction: 'row',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
          }}
        >
          {groups
            .filter((group) => group.id === selectedGroupId)
            .map((group) =>
              group.members.map((member, index) => (
                <Card
                  key={index}
                  sx={{
                    margin: theme.spacing(2),
                    backgroundColor: theme.palette.secondary.main,
                    color: theme.palette.secondary.contrastText,
                    borderRadius: theme.shape.borderRadius, // Añadir esquinas redondeadas
                  }}
                >
                  <CardHeader
                    action={
                      <IconButton
                        sx={{
                          color: theme.palette.secondary.contrastText,
                        }}
                        onClick={() => handleDeleteMember(group.id, index)}
                      >
                        <HighlightOffIcon />
                      </IconButton>
                    }
                    title={member.name}
                  />
                  <CardMedia component="img" height="247" image={member.img} />
                </Card>
              ))
            )}
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'left', padding: theme.spacing(2) }}>
          <BlueButtonText text="Editar grupo" icon={<EditIcon/>} />
        </Box>
      </Box>
    </Box>
  );
};
