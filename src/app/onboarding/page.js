'use client';
import { useState } from 'react';
import axios from 'axios';
import { saveToken } from "../utils/auth";

export default function OnboardingPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('https://bildy-rpmaya.koyeb.app/api/user/register', {
        email,
        password,
      });
      saveToken(response.data.token);
      alert('Registro exitoso');
    } catch (error) {
      alert('Error al registrar usuario');
    }
  };

  return (
    <div className="p-4">
      <h1>Registro</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="block border mb-2 p-2"
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="block border mb-2 p-2"
      />
      <button onClick={handleRegister} className="bg-blue-500 text-white px-4 py-2">Registrar</button>
    </div>
  );
}
