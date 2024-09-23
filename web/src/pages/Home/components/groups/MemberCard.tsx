import React from 'react';
import { Card, CardHeader, CardMedia, IconButton } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { theme } from '../../../../styles/Theme';

interface Member {
  name: string;
  img: string;
}

interface MemberCardProps {
  member: Member;
  groupId: string;
  memberIndex: number;
  handleDeleteMember: (groupId: string, memberIndex: number) => void;
}

const MemberCard: React.FC<MemberCardProps> = ({
  member,
  groupId,
  memberIndex,
  handleDeleteMember,
}) => {
  return (
    <Card
      sx={{
        margin: theme.spacing(2),
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
        borderRadius: theme.shape.borderRadius, // Add rounded corners
      }}
    >
      <CardHeader
        action={
          <IconButton
            sx={{
              color: theme.palette.secondary.contrastText,
            }}
            onClick={() => handleDeleteMember(groupId, memberIndex)}
          >
            <HighlightOffIcon />
          </IconButton>
        }
        title={member.name}
      />
      <CardMedia component="img" height="247" image={member.img} />
    </Card>
  );
};

export default MemberCard;