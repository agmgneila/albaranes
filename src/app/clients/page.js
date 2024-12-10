'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ClientsPage() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const token = localStorage.getItem('jwt');
        const response = await axios.get('https://bildy-rpmaya.koyeb.app/api/client', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setClients(response.data.clients);
      } catch (error) {
        alert('Error al obtener clientes');
      }
    };

    fetchClients();
  }, []);

  return (
    <div className="p-4">
      <h1>Clientes</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id} className="border p-2 mb-2">
            {client.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
