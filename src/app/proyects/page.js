'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const token = localStorage.getItem('jwt');
        const response = await axios.get('https://bildy-rpmaya.koyeb.app/api/project', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProjects(response.data.projects);
      } catch (error) {
        alert('Error al obtener proyectos');
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="p-4">
      <h1>Proyectos</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id} className="border p-2 mb-2">
            {project.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
