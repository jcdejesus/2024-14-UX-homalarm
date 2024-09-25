import React from 'react';
import { styled } from '@mui/material/styles';
import { InputBase, Typography } from '@mui/material';

import Box from '@mui/material/Box';

interface InputTextProps {
  text: string;
  direction: 'Row' | 'Column';
  color?: string;
}

export const InputText: React.FC<InputTextProps> = ({
  text,
  direction,
  color,
}) => {
  const Button = styled(InputBase)(({ theme }) => ({
    '& .MuiInputBase-input': {
      color: theme.palette.text.primary,
      boxSizing: 'border-box',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid',
      borderColor: theme.palette.primary.main,
      width: direction == 'Column' ? '100%' : '340px',
      padding: `0 ${theme.spacing(4)}`,
      borderRadius: theme.shape.borderRadius,
      height: '48px',
      transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow',
      ]),
      '&:focus': {
        boxShadow: theme.palette.common.white,
        borderColor: theme.palette.primary.main,
      },
    },
  }));

  const Label = styled(Typography)(({ theme }) => ({
    color: color ?? theme.palette.text.primary,
    fontSize: '1.375rem', // TODO: check this as this is Figma value
    // fontSize: '1rem',
  }));

  const boxStyle = {
    display: 'flex',
    flexDirection: '',
    columnGap: '',
    rowGap: '',
    alignItems: '',
    justifyContent: '',
    marginBottom: '2rem',
  };

  if (direction == 'Row') {
    boxStyle.flexDirection = 'row';
    boxStyle.columnGap = '12px';
    boxStyle.alignItems = 'center';
    boxStyle.justifyContent = 'space-between';
  } else {
    boxStyle.flexDirection = 'column';
    boxStyle.rowGap = '12px';
  }

  return (
    <Box id="input-div-id" component="div" sx={boxStyle}>
      <Label> {text} </Label>
      <Button />
    </Box>
  );
};
