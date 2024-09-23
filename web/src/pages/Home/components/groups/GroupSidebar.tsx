import React from 'react';
import { BlueDrawer } from '../../../../components/Drawer/Drawer';

interface GroupSidebarProps {
  groups: { id: string; text: string; members: { img: string }[] }[];
  onCreateGroup: () => void;
  onSelectGroup: (id: string) => void;
}

export const GroupSidebar: React.FC<GroupSidebarProps> = ({
  groups,
  onCreateGroup,
  onSelectGroup,
}) => {
  return (
    <BlueDrawer
      id="groups-sidebar"
      drawerList={groups}
      onItemClick={onSelectGroup}
      buttonAction={{
        text: 'Crear Grupo',
        onButtonClick: onCreateGroup,
      }}
    ></BlueDrawer>
  );
};
