import React from 'react';
import { Box } from '@mui/material';
import { Texture } from '../../../../components/CardChip/CardChip';
import { AlarmCard } from './AlarmCard';

const alarms = [
  {
    id: 1,
    title: '7:00',
    description: 'AM',
    chips: [
      { text: 'L' },
      { text: 'M', texture: 'Redwine' as Texture },
      { text: 'M' },
      { text: 'J', texture: 'Redwine' as Texture },
      { text: 'V' },
      { text: 'S', texture: 'Redwine' as Texture },
      { text: 'D' },
    ],
    isShared: false,
  },
  {
    id: 2,
    title: '7:00',
    description: 'PM',
    chips: [
      { text: 'L' },
      { text: 'M' },
      { text: 'M' },
      { text: 'J' },
      { text: 'V', texture: 'Redwine' as Texture },
      { text: 'S', texture: 'Redwine' as Texture },
      { text: 'D' },
    ],
    isShared: true,
  },
];

export const AlarmComponent: React.FC = () => {
  return (
    <Box
      sx={{ display: 'flex', direction: 'row', justifyContent: 'space-around' }}
    >
      {alarms.map((alarm) => (
        <AlarmCard key={alarm.id} alarm={alarm} />
      ))}
    </Box>
  );
};
