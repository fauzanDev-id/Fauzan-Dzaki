'use client';

import { useEffect, useRef, useState } from 'react';
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';
import Image from 'next/image';

const menu = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
];

export default function Navbar() {
    const [active, setActive] = useState('home');
    const menuRef = useRef<HTMLUListElement>(null);

    const [underline, setUnderline] = useState({
        width: 0,
        left: 0,
    });

    // ===================== SCROLL SPY =====================
    useEffect(() => {
        const handleScroll = () => {
            // Menggunakan viewport top sebagai reference point
            const viewportTop = window.scrollY + 100; // offset kecil

            let activeSection = 'home';
            let highestSection = -Infinity;

            menu.forEach(item => {
                const element = document.getElementById(item.id);
                if (!element) return;

                const sectionTop = element.offsetTop;

                // Jika section top di atas atau sama dengan viewport top
                // dan lebih tinggi dari section sebelumnya, jadikan active
                if (sectionTop <= viewportTop && sectionTop > highestSection) {
                    highestSection = sectionTop;
                    activeSection = item.id;
                }
            });

            setActive(activeSection);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Call on mount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // ===================== UNDERLINE POSITION =====================
    useEffect(() => {
        if (!menuRef.current) return;

        const activeItem = menuRef.current.querySelector(
            `li[data-id="${active}"]`
        ) as HTMLLIElement;

        if (!activeItem) return;

        setUnderline({
            width: activeItem.offsetWidth,
            left: activeItem.offsetLeft,
        });
    }, [active]);

    const goHome = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setActive('home');
    };

    const goContact = () => {
        const contact = document.getElementById('contact');
        if (!contact) return;
        contact.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header className="fixed top-0 left-0 w-full z-50">
            <nav className="mx-auto mt-6 flex items-center justify-between w-[90%] max-w-6xl rounded-xl bg-black/40 backdrop-blur-md px-6 py-4">

                {/* SOCIAL ICONS */}
                <div className="flex items-center gap-3">
                    <a 
                        href="https://www.linkedin.com/in/fauzan-dzaki-828154376/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="h-9 w-9 flex items-center justify-center rounded-full border border-white/30 text-white hover:bg-white/10 transition"
                    >
                        <FaLinkedinIn />
                    </a>
                    <a 
                        href="https://github.com/fauzanDev-id" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="h-9 w-9 flex items-center justify-center rounded-full border border-white/30 text-white hover:bg-white/10 transition"
                    >
                        <FaGithub />
                    </a>
                    <a 
                        href="https://www.instagram.com/fauzan.da_?igsh=ZXB3dGd4NG1oeXY4&utm_source=qr" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="h-9 w-9 flex items-center justify-center rounded-full border border-white/30 text-white hover:bg-white/10 transition"
                    >
                        <FaInstagram />
                    </a>
                </div>

                {/* MENU */}
                <ul
                    ref={menuRef}
                    className="relative hidden md:flex items-center gap-10 text-gray-300"
                >
                    {menu.map(item => (
                        <li
                            key={item.id}
                            data-id={item.id}
                            className="relative"
                        >
                            <a
                                href={item.href}
                                onClick={() => setActive(item.id)}   // 🔥 klik → underline pindah
                                className={`transition hover:text-white ${active === item.id ? 'text-white' : ''
                                    }`}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}

                    {/* 🔵 UNDERLINE */}
                    <span
                        className="absolute -bottom-2 h-[3px] rounded-full bg-sky-400 transition-all duration-300"
                        style={{
                            width: underline.width,
                            left: underline.left,
                        }}
                    />
                </ul>

                {/* RIGHT */}
                <div className="flex items-center gap-4">
                    <button
                        onClick={goContact}
                        className="rounded-lg border border-white/40 px-6 py-2 text-white hover:bg-white/10 transition"
                    >
                        Contact Me
                    </button>
                </div>

            </nav>
        </header>
    );
}
