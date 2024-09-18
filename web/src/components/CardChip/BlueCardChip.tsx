import { Chip, styled } from "@mui/material";
import React from "react";

interface BlueCardChip {
  text: string;
}

export const BlueCardChip: React.FC<BlueCardChip> = ({ text }) => {
  const InternalChip = styled(Chip)(({ theme }) => ({
    minWidth: "45px",
    height: "32px",
    border: `1px solid ${theme.palette.grey.A400}`,
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.common.white,
    },
  }));

  return <InternalChip onClick={() => {}} label={text} color="primary" />;
};
