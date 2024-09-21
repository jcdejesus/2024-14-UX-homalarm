import React from "react";
import { BlueCardChip } from "./BlueCardChip";
import { RedwineCardChip } from "./RedwineCardChip";

export type Texture = "Redwine" | "Blue";

interface CardChipProps {
  text: string;
  texture?: Texture;
}

export const CardChip: React.FC<CardChipProps> = ({ text, texture }) => {
  if (texture === "Redwine") {
    return <RedwineCardChip text={text} />;
  }

  return <BlueCardChip text={text} />;
};
