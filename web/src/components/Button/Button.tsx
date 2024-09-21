import React from 'react';
import { BlueButtonText } from './BlueButton';
import { GrayButtonText } from './GrayButton';

type Texture = 'Blue' | 'Gray';

interface ButtonProps {
  text?: string;
  texture?: Texture;
}

export const Button: React.FC<ButtonProps> = ({ text, texture }) => {
  if (texture == 'Gray') {
    return <GrayButtonText text={text} />;
  }

  return <BlueButtonText text={text} />;
};
