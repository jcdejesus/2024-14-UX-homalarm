import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';

const groups = [
  { id: 1, name: 'Grupo 1', description: 'Descripción del grupo 1' },
  { id: 2, name: 'Grupo 2', description: 'Descripción del grupo 2' },
];

export const GroupComponent: React.FC = () => {
  return (
    <Box>
      {groups.map((group) => (
        <Card key={group.id} sx={{ marginBottom: 2 }}>
          <CardContent>
            <Typography variant="h5">{group.name}</Typography>
            <Typography variant="body2">{group.description}</Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};
