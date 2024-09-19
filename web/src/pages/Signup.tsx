import React, { useState } from 'react';
import { InputText } from '../components/Input/InputText';
import { BlueButtonText } from '../components/Button/BlueButton';

export const Signup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle signup logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <InputText direction="Column" text="Usuario" />
        </div>
        <div>
          <InputText direction="Column" text="Contraseña" />
        </div>
        <BlueButtonText text="Iniciar"></BlueButtonText>
      </form>
    </div>
  );
};
