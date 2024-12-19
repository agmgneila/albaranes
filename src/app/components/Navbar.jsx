"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className="flex min-h-screen">
            <div className={`w-64 bg-gradient-to-r from-purple-600 to-indigo-800 text-white p-6 fixed top-0 left-0 h-full ${isOpen ? 'block' : 'hidden'} md:block`}>
                <div className="flex items-center mb-6">
                    <h2 className="text-3xl font-bold">Bidly</h2>
                </div>
                <ul>
                    <li className="mb-4">
                        <Link href="/onboarding" className="text-lg hover:text-blue-400 transition duration-300 ease-in-out transform hover:scale-105">
                            Onboarding
                        </Link>
                    </li>
                    <li className="mb-4">
                        <Link href="/clients" className="text-lg hover:text-blue-400 transition duration-300 ease-in-out transform hover:scale-105">
                            Clientes
                        </Link>
                    </li>
                    <li className="mb-4">
                        <Link href="/projects" className="text-lg hover:text-blue-400 transition duration-300 ease-in-out transform hover:scale-105">
                            Proyectos
                        </Link>
                    </li>
                    <li className="mb-4">
                        <Link href="/delivery-notes" className="text-lg hover:text-blue-400 transition duration-300 
