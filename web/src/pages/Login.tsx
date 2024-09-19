import React from 'react';
import { InputText } from '../components/Input/InputText';
import { BlueButtonText } from '../components/Button/BlueButton';

export const Login: React.FC = () => {
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="div">
      <img src="../../assets/logo.png" alt="Descripción de la imagen" />
      <form onSubmit={handleSubmit}>
        <InputText direction="Column" text="Usuario" />
        <InputText direction="Column" text="Contraseña" />
        <BlueButtonText text="Iniciar"></BlueButtonText>
      </form>
      <a className="link" href="/signup">
        Sign Up
      </a>
    </div>
  );
};
