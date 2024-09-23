import React from 'react';
import { BlueButtonText } from './BlueButton';
import { GrayButtonText } from './GrayButton';

type Texture = 'Blue' | 'Gray';

interface ButtonProps {
  text?: string;
  texture?: Texture;
  icon?: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({ text, texture, icon }) => {
  if (texture == 'Gray') {
    return <GrayButtonText text={text} icon={icon} />;
  }

  return <BlueButtonText text={text} icon={icon} />;
};
