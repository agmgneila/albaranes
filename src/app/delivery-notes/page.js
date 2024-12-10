'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function DeliveryNotesPage() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const token = localStorage.getItem('jwt');
        const response = await axios.get('https://bildy-rpmaya.koyeb.app/api/deliverynote', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setNotes(response.data.deliveryNotes);
      } catch (error) {
        alert('Error al obtener albaranes');
      }
    };

    fetchNotes();
  }, []);

  return (
    <div className="p-4">
      <h1>Albaranes</h1>
      <ul>
        {notes.map((note) => (
          <li key={note.id} className="border p-2 mb-2">
            {note.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
