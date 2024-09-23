import React, { useState } from 'react';
import {
  Box,
  SnackbarCloseReason,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { GroupSidebar } from './GroupSidebar';
import { theme } from '../../../../styles/Theme';
import { BlueButtonText } from '../../../../components/Button/BlueButton';
import MemberCard from './MemberCard';
import { CustomDialog } from '../../../../components/Dialog/Dialog';
import { Texture, ToastBar } from '../../../../components/ToastBar/ToastBar';
import { InputText } from '../../../../components/Input/InputText';
const initialGroups = [
  {
    id: '1',
    text: 'Grupo 1',
    members: [
      { id: '1', name: 'Juan', img: 'https://picsum.photos/id/64/250' },
      { id: '2', name: 'Pepé', img: 'https://picsum.photos/id/237/250' },
      { id: '3', name: 'Axis', img: 'https://picsum.photos/id/375/250' },
    ],
  },
  {
    id: '2',
    text: 'Grupo 2',
    members: [
      { id: '1', name: 'Fer', img: 'https://picsum.photos/id/399/250' },
    ],
  },
];
const drawerWidth = 327;

export const GroupComponent: React.FC = () => {
  const [groups, setGroups] = useState(initialGroups);
  const [selectedGroupId, setSelectedGroupId] = useState<string>('1');
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [snackOpen, setSnackOpen] = React.useState(false);
  const [snacktype, setSnackType] = React.useState<{
    text: string;
    texture: Texture;
  }>({ text: 'Fallo crear grupo', texture: 'Error' });

  const handleCreateGroup = () => {
    setDialogOpen(true);
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

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogSubmit = () => {
    setDialogOpen(false);
    setSnackOpen(true);
    const error = Math.random() > 0.5;
    setSnackType(
      error
        ? { text: 'Fallo crear grupo', texture: 'Error' }
        : { text: 'Grupo creado', texture: 'Success' }
    );
    if (!error) {
      const newGroup = {
        id: `${groups.length + 1}`,
        text: `Grupo ${groups.length + 1}`,
        members: [] as { id: string; name: string; img: string }[],
      };
      setGroups([...groups, newGroup]);
    }
  };

  const handleSnackClose = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackOpen(false);
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
          height: '95vh',
        }}
      >
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
                <MemberCard
                  key={index}
                  member={member}
                  groupId={group.id}
                  memberIndex={index}
                  handleDeleteMember={handleDeleteMember}
                />
              ))
            )}
        </Box>

        <CustomDialog
          title="Crear grupo"
          open={dialogOpen}
          setOpen={setDialogOpen}
          handleSubmit={handleDialogSubmit}
          content={
            <>
              <InputText
                direction="Row"
                text="Nombre"
                color={theme.palette.common.black}
              />
              <InputText
                direction="Column"
                text="Descripción"
                color={theme.palette.common.black}
              />
              <InputText
                direction="Row"
                text="Miembros"
                color={theme.palette.common.black}
              />
            </>
          }
          actionText="Crear"
        />
        <ToastBar
          text={snacktype.text}
          texture={snacktype.texture}
          open={snackOpen}
          onClose={handleSnackClose}
        ></ToastBar>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'left',
            padding: theme.spacing(2),
          }}
        >
          <BlueButtonText text="Editar grupo" icon={<EditIcon />} />
        </Box>
      </Box>
    </Box>
  );
};
