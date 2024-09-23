import React from 'react';
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import { styled } from '@mui/material/styles';
import { Alert } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';

export type Texture = 'Error' | 'Success';

interface ToastBarProps {
  text: string;
  onClose?: (event: React.SyntheticEvent | Event, reason?: SnackbarCloseReason) => void;
  texture?: Texture;
  open: boolean
}

export const ToastBar: React.FC<ToastBarProps> = ({ text, texture, open, onClose }) => {
  const CustomSnackBar = styled(Snackbar)(({ theme }) => ({
    height: '48px',
    '& .MuiPaper-root': {
      fontWeight: 'normal',
    },
  }));

  return (
    <CustomSnackBar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      open={open}
      autoHideDuration={3000}
      onClose={onClose}
    >
      <Alert
        iconMapping={{
          success: <DoneIcon />,
          error: <CloseIcon />,
        }}
        severity={texture === 'Error' ? 'error' : 'success'}
        variant="filled"
        sx={{ width: '100%' }}
        action={null} 
      >
        {text}
      </Alert>
    </CustomSnackBar>
  );
};
