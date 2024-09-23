import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { Button } from '../Button/Button';
import { theme } from '../../styles/Theme';

interface CustomDialogProps {
  title: string;
  open: boolean;
  setOpen: (open: boolean) => void;
  handleSubmit: () => void
  content: React.ReactNode;
  actionText: string;
}
export const CustomDialog: React.FC<CustomDialogProps> = ({
  title,
  open,
  setOpen,
  handleSubmit,
  content,
  actionText,
}) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        sx={{
          '& .MuiDialog-paper': {
            minWidth: '312px',
          },
        }}
      >
        <DialogTitle
          sx={{
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.secondary.contrastText,
          }}
        >
          {title}
        </DialogTitle>
        <DialogContent>{content}</DialogContent>
        <DialogActions
          sx={{
            backgroundColor: theme.palette.secondary.main,
            justifyContent: 'space-between',
          }}
        >
          <Button text="Cancelar" onClick={handleClose} />
          <Button text={actionText} texture="Gray" onClick={handleSubmit} />
        </DialogActions>
      </Dialog>
    </div>
  );
};
