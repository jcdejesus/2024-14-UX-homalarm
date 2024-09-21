import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import { styled } from '@mui/material/styles';
import { Alert } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';

type Texture = 'Error' | 'Success';

interface ToastBarProps {
  text: string;
  onClose?: () => void;
  texture?: Texture;
}

export const ToastBar: React.FC<ToastBarProps> = ({ text, texture }) => {
  const CustomSnackBar = styled(Snackbar)(({ theme }) => ({
    height: '48px',
    '& .MuiPaper-root': {
      fontWeight: 'normal',
    },
  }));

  return (
    <CustomSnackBar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      open={true}
      autoHideDuration={3000}
      onClose={() => {}}
    >
      <Alert
        iconMapping={{
          success: <DoneIcon />,
          error: <CloseIcon />,
        }}
        onClose={() => {}}
        severity={texture === 'Error' ? 'error' : 'success'}
        variant="filled"
        sx={{ width: '100%' }}
      >
        {text}
      </Alert>
    </CustomSnackBar>
  );
};
