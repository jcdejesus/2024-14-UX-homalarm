import { Chip, styled } from "@mui/material";
import React from "react";

type Texture = "Redwine" | "Blue";

interface RedwineCardChipProps {
  text: string;
  texture?: Texture;
}

export const RedwineCardChip: React.FC<RedwineCardChipProps> = ({
  text,
}) => {
  const InternalChip = styled(Chip)(({ theme }) => ({
    minWidth: "45px",
    border: `1px solid ${theme.palette.grey.A400}`,
    "&:hover": {
      backgroundColor: theme.palette.grey["100"],
      color: theme.palette.common.white,
    },
  }));

  return (
    <InternalChip onClick={() => {}} label={text} color="secondary" />
  );
};
