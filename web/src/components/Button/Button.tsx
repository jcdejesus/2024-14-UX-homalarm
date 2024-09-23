import React from 'react';
import { BlueButtonText } from './BlueButton';
import { GrayButtonText } from './GrayButton';

type Texture = 'Blue' | 'Gray';

interface ButtonProps {
  text?: string;
  texture?: Texture;
  onClick?: () => void;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  texture,
  onClick,
  icon,
}) => {
  if (texture == 'Gray') {
    return <GrayButtonText onClick={onClick} text={text} icon={icon} />;
  }

  return <BlueButtonText onClick={onClick} text={text} icon={icon} />;
};
