import React, { useState } from 'react';
import { Box, SnackbarCloseReason } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { GroupSidebar } from './GroupSidebar';
import { theme } from '../../../../styles/Theme';
import { BlueButtonText } from '../../../../components/Button/BlueButton';
import MemberCard from './MemberCard';
import { CustomDialog } from '../../../../components/Dialog/Dialog';
import { Texture, ToastBar } from '../../../../components/ToastBar/ToastBar';
import { InputText } from '../../../../components/Input/InputText';
import { YellowButtonText } from '../../../../components/Button/YellowButton';
import { RedButtonText } from '../../../../components/Button/RedButton';
import { v4 as uuidv4 } from 'uuid';

const initialGroups = [
  {
    id: uuidv4(),
    text: 'Grupo 1',
    members: [
      { id: uuidv4(), name: 'Juan', img: 'https://picsum.photos/id/64/250' },
      { id: uuidv4(), name: 'Pepé', img: 'https://picsum.photos/id/237/250' },
      { id: uuidv4(), name: 'Axis', img: 'https://picsum.photos/id/375/250' },
    ],
  },
  {
    id: uuidv4(),
    text: 'Grupo 2',
    members: [
      { id: uuidv4(), name: 'Fer', img: 'https://picsum.photos/id/399/250' },
    ],
  },
];

const sampleNames = [
  'Alice',
  'Bob',
  'Charlie',
  'David',
  'Eve',
  'Frank',
  'Grace',
  'Hannah',
  'Ivy',
  'Jack',
];

const drawerWidth = 327;

const renderCreateGroupDialog = (
  dialogOpen: boolean,
  setDialogOpen: React.Dispatch<React.SetStateAction<boolean>>,
  handleDialogSubmit: () => void
) => (
  <CustomDialog
    title="Crear grupo"
    open={dialogOpen}
    setOpen={setDialogOpen}
    handleSubmit={handleDialogSubmit}
    content={
      <Box sx={{ marginTop: theme.spacing(3) }}>
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
      </Box>
    }
    actionText="Crear"
  />
);

const renderEditGroupDialog = (
  dialogOpen: boolean,
  setDialogOpen: React.Dispatch<React.SetStateAction<boolean>>,
  handleDialogSubmit: () => void,
  handleDeleteGroup: () => void,
  handleAddUser: () => void
) => (
  <CustomDialog
    title="Editar grupo"
    open={dialogOpen}
    setOpen={setDialogOpen}
    handleSubmit={handleDialogSubmit}
    content={
      <Box sx={{ marginTop: theme.spacing(3) }}>
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
        <Box sx={{ width: '100%' }}>
          <YellowButtonText text="Agregar usuario" onClick={handleAddUser} />
          <RedButtonText text="Eliminar grupo" onClick={handleDeleteGroup} />
        </Box>
      </Box>
    }
    actionText="Guardar"
  />
);

const renderAddUserDialog = (
  dialogOpen: boolean,
  setDialogOpen: React.Dispatch<React.SetStateAction<boolean>>,
  handleDialogSubmit: () => void
) => (
  <CustomDialog
    title="Agregar usuario"
    open={dialogOpen}
    setOpen={setDialogOpen}
    handleSubmit={handleDialogSubmit}
    content={
      <Box sx={{ marginTop: theme.spacing(3) }}>
        <InputText
          direction="Column"
          text="Nombre del usuario"
          color={theme.palette.common.black}
        />
        <InputText
          direction="Row"
          text="Correo/telefono"
          color={theme.palette.common.black}
        />
      </Box>
    }
    actionText="Guardar"
  />
);

export const GroupComponent: React.FC = () => {
  const [groups, setGroups] = useState(initialGroups);
  const [groupCounter, setGroupCounter] = useState(initialGroups.length + 1);
  const [selectedGroupId, setSelectedGroupId] = useState<string | null>(null);
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [snackOpen, setSnackOpen] = React.useState(false);
  const [snacktype, setSnackType] = React.useState<{
    text: string;
    texture: Texture;
  }>({ text: 'Fallo crear grupo', texture: 'Error' });

  const [editDialogOpen, setEditDialogOpen] = React.useState(false);
  const [editSnackOpen, setEditSnackOpen] = React.useState(false);
  const [editSnacktype, setEditSnackType] = React.useState<{
    text: string;
    texture: Texture;
  }>({ text: 'Fallo editar grupo', texture: 'Error' });

  const [deleteSnackOpen, setDeleteSnackOpen] = React.useState(false);
  const [deleteSnacktype, setDeleteSnackType] = React.useState<{
    text: string;
    texture: Texture;
  }>({ text: 'Fallo eliminar grupo', texture: 'Error' });

  const [addUserDialogOpen, setAddUserDialogOpen] = useState(false);
  const [addUserSnackOpen, setAddUserSnackOpen] = React.useState(false);
  const [addUserSnacktype, setAddUserSnackType] = React.useState<{
    text: string;
    texture: Texture;
  }>({ text: 'Fallo agregar usuario', texture: 'Error' });

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

  const handleEditDialogOpen = () => {
    setEditDialogOpen(true);
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
        id: uuidv4(),
        text: `Grupo ${groupCounter}`,
        members: [] as { id: string; name: string; img: string }[],
      };
      setGroups([...groups, newGroup]);
      setGroupCounter(groupCounter + 1);
    }
  };

  const handleEditDialogSubmit = () => {
    setEditDialogOpen(false);
    setEditSnackOpen(true);
    const error = Math.random() > 0.5;
    setEditSnackType(
      error
        ? { text: 'Fallo editar grupo', texture: 'Error' }
        : { text: 'Guardado', texture: 'Success' }
    );
  };

  const handleDeleteGroup = () => {
    const error = Math.random() > 0.5;
    if (!error) {
      setGroups(groups.filter((group) => group.id !== selectedGroupId));
    }
    setSelectedGroupId(null);
    setEditDialogOpen(false);
    setDeleteSnackOpen(true);
    setDeleteSnackType(
      error
        ? { text: 'Fallo eliminar grupo', texture: 'Error' }
        : { text: 'Grupo eliminado', texture: 'Success' }
    );
  };

  const handleAddUser = () => {
    setAddUserDialogOpen(true);
  };

  const handleAddUserSubmit = () => {
    const error = Math.random() > 0.5;
    if (!error && selectedGroupId) {
      const randomName =
        sampleNames[Math.floor(Math.random() * sampleNames.length)];
      setGroups(
        groups.map((group) => {
          if (group.id === selectedGroupId) {
            return {
              ...group,
              members: [
                ...group.members,
                {
                  id: uuidv4(),
                  name: randomName,
                  img: `https://picsum.photos/id/${Math.floor(Math.random() * 500)}/200`,
                },
              ],
            };
          }
          return group;
        })
      );
    }
    setAddUserDialogOpen(false);
    setEditDialogOpen(false);
    setAddUserSnackOpen(true);
    setAddUserSnackType(
      error
        ? { text: 'Fallo agregar usuario', texture: 'Error' }
        : { text: 'Usuario agregado', texture: 'Success' }
    );
  };

  const handleSnackClose = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackOpen(false);
    setEditSnackOpen(false);
    setDeleteSnackOpen(false);
    setAddUserSnackOpen(false);
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
        {renderCreateGroupDialog(dialogOpen, setDialogOpen, handleDialogSubmit)}
        <ToastBar
          text={snacktype.text}
          texture={snacktype.texture}
          open={snackOpen}
          onClose={handleSnackClose}
        ></ToastBar>

        {renderEditGroupDialog(
          editDialogOpen,
          setEditDialogOpen,
          handleEditDialogSubmit,
          handleDeleteGroup,
          handleAddUser
        )}
        <ToastBar
          text={editSnacktype.text}
          texture={editSnacktype.texture}
          open={editSnackOpen}
          onClose={handleSnackClose}
        ></ToastBar>

        <ToastBar
          text={deleteSnacktype.text}
          texture={deleteSnacktype.texture}
          open={deleteSnackOpen}
          onClose={handleSnackClose}
        ></ToastBar>

        {renderAddUserDialog(
          addUserDialogOpen,
          setAddUserDialogOpen,
          handleAddUserSubmit
        )}
        <ToastBar
          text={addUserSnacktype.text}
          texture={addUserSnacktype.texture}
          open={addUserSnackOpen}
          onClose={handleSnackClose}
        ></ToastBar>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'left',
            padding: theme.spacing(2),
          }}
        >
          {selectedGroupId && (
            <BlueButtonText
              text="Editar grupo"
              icon={<EditIcon />}
              onClick={handleEditDialogOpen}
            />
          )}
        </Box>
      </Box>
    </Box>
  );
};
