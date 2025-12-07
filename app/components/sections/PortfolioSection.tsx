'use client';
import React, { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

// --- Interface Data Proyek ---
interface CaseStudy {
    id: string; // Contoh: "001"
    title: string;
    subtitle: string; // Deskripsi singkat
    link: string;
    details: string; // Detail tambahan yang muncul saat di-hover/klik
}

// --- Data Proyek (Diubah namanya menjadi MyProject) ---
const MyProject: CaseStudy[] = [
    {
        id: "001",
        title: "Smart Home App",
        subtitle: "Effortless user flow for smart control.",
        link: "#project-smarthome",
        details: "Proyek desain dan pengembangan UI/UX untuk aplikasi kontrol rumah pintar, berfokus pada hirarki visual yang jelas dan pengalaman pengguna yang intuitif.",
    },
    {
        id: "002",
        title: "Visual Storing Tool",
        subtitle: "Organizing inspiration into a clean workspace.",
        link: "#project-vst",
        details: "Web app untuk mengorganisir aset visual dan inspirasi menjadi ruang kerja digital yang bersih dan efisien, menggunakan teknologi Next.js dan Tailwind.",
    },
    {
        id: "003",
        title: "Cyber Security Analysis Dashboard",
        subtitle: "Building secure, data-driven interfaces.",
        link: "#project-security-dash",
        details: "Dashboard analisis keamanan yang menampilkan data kerentanan secara real-time. Proyek ini menggabungkan keahlian Front-End dengan pemahaman Cyber Security.",
    },
];

// --- Komponen Item Proyek ---

interface CaseStudyItemProps {
    study: CaseStudy;
    index: number;
    isActive: boolean;
    onHover: (index: number) => void;
}

const CaseStudyItem: React.FC<CaseStudyItemProps> = ({ study, index, isActive, onHover }) => {
    return (
        <motion.div
            className="border-b border-gray-700/50 cursor-pointer transition-colors duration-300"
            onMouseEnter={() => onHover(index)}
            onMouseLeave={() => onHover(-1)}
            initial={false}
        >
            {/* ITEM CONTAINER: Relative, padding luas (px-12 lg:px-20) */}
            <div className="relative flex items-center justify-between py-8 md:py-12 px-12 lg:px-20">
                
                {/* 1. NOMOR PROYEK (ABSOLUTE: JAUH KE KIRI) */}
                <div 
                    className="absolute left-0 top-1/2 transform -translate-y-1/2"
                > 
                    <p 
                        className={`text-6xl md:text-9xl font-serif italic transition-opacity duration-300 ${isActive ? 'opacity-100 text-white' : 'opacity-40 text-gray-400'}`}
                        // PERBAIKAN: Mengubah left: '-50px' menjadi left: '-80px' untuk mendorong lebih jauh
                        style={{ fontFamily: 'Georgia, serif', left: '-80px', position: 'relative' }} 
                    >
                        {study.id}
                    </p>
                </div>

                {/* 2. JUDUL & SUBTITLE (Margin Kiri Lebih Besar) */}
                {/* PERBAIKAN: Mengubah ml-24 lg:ml-32 menjadi ml-32 lg:ml-40 untuk memisahkan dari angka */}
                <div className="flex-grow flex flex-col text-left ml-32 lg:ml-40"> 
                    <h2 
                        className={`text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight transition-colors duration-300 ${isActive ? 'text-blue-300' : 'text-white'}`}
                    >
                        {study.title}
                    </h2>
                    <p className={`mt-2 text-lg transition-opacity duration-300 ${isActive ? 'opacity-100 text-gray-300' : 'opacity-50 text-gray-500'}`}>
                        {study.subtitle}
                    </p>
                </div>

                {/* 3. EXPLORE BUTTON (Tetap sama) */}
                <div className="flex justify-end flex-shrink-0 ml-4">
                    <a 
                        href={study.link}
                        aria-label={`Explore ${study.title}`}
                        className={`flex items-center gap-2 transition-all duration-300 ${isActive ? 'text-white opacity-100' : 'text-gray-500 opacity-0'}`}
                        onClick={(e) => { if (!isActive) e.preventDefault(); }}
                    >
                        <span className="text-xl font-semibold">Explore</span>
                        <FiArrowRight className="text-2xl" />
                    </a>
                </div>
            </div>

            <AnimatePresence>
                {isActive && (
                    <motion.div
                        className="py-4 px-12 lg:px-20 bg-gray-800/20" 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Detail text disesuaikan dengan margin kiri baru */}
                        <p className="text-gray-400 max-w-4xl ml-32 lg:ml-40 text-right italic">
                            {study.details}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

// --- Komponen Utama PortfolioSection ---
export default function PortfolioSection() {
    const [activeIndex, setActiveIndex] = useState<number>(-1);
    const handleHover = (index: number) => { setActiveIndex(index); };

    return (
        <section className="min-h-screen bg-[#19222D] text-white py-20" id="portfolio">
            <div className="container mx-auto max-w-7xl px-4">
                
                {/* Header (Case Studies/Portfolio) */}
                <div className="mb-16 px-4 md:px-12 lg:px-20"> 
                    <h1 className="text-7xl md:text-9xl font-extrabold tracking-tighter mb-4">
                        My Project
                    </h1>
                    <p className="text-xl text-gray-400">
                        Below are the projects I have made
                    </p>
                </div>

                {/* Daftar Proyek - Menggunakan array MyProject yang baru */}
                <div className="border-t border-gray-700/50">
                    {MyProject.map((study, index) => (
                        <CaseStudyItem
                            key={study.id}
                            study={study}
                            index={index}
                            isActive={activeIndex === index}
                            onHover={handleHover}
                        />
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-gray-500">More projects coming soon.</p>
                </div>
            </div>
        </section>
    );
}