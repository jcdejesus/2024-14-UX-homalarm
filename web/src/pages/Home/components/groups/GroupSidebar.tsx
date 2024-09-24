import React from 'react';
import { BlueDrawer } from '../../../../components/Drawer/Drawer';

interface GroupSidebarProps {
  groups: { id: string; text: string; members: { img: string }[] }[];
  onCreateGroup: () => void;
  onSelectGroup: (id: string) => void;
  selectedGroupId: string;
}

export const GroupSidebar: React.FC<GroupSidebarProps> = ({
  groups,
  onCreateGroup,
  onSelectGroup,
  selectedGroupId
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
      selectedId={selectedGroupId}
    ></BlueDrawer>
  );
};
