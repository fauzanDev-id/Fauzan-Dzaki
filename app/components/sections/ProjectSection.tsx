'use client';

import { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import SectionReveal from '@/components/animation/SectionReveal';

interface CaseStudy {
    id: string;
    title: string;
    subtitle: string;
    link: string;
    details: string;
}

const MyProject: CaseStudy[] = [
    {
        id: "01",
        title: "My Portfolio Website",
        subtitle: "Showcasing my projects and skills.",
        link: "https://fauzan-dzaki.vercel.app/",
        details:
            "Personal portfolio website built with Next.js and Tailwind CSS. Highlights my projects, skills, and experience with a modern design and responsive layout.",

    },
    {
        id: "02",
        title: "Parakelana Adventure Booking",
        subtitle: "Unified adventure & travel booking platform.",
        link: "https://parakelana-adventure-booking.vercel.app/",
        details:
            "Adventure booking application with integrated payment gateway, user authentication, and real-time reservation management. Built with React, Node.js, and PostgreSQL to deliver a seamless user experience.",
    },
    {
        id: "03",
        title: "Ucenk Theme",
        subtitle: "SaaS platform for content creators & entrepreneurs.",
        link: "https://ucenk-theme.vercel.app/",
        details:
            "All-in-one platform for creating online stores and content with customizable themes. Features drag-and-drop builder, analytics dashboard, and integrated e-commerce functionality.",
    },
    {
        id: "04",
        title: "Coming Soon",
        subtitle: "New project in development.",
        link: "#",
        details:
            "The third project will be published soon. Stay tuned for updates.",
    },
];

export default function ProjectSection() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section
            id="projects"
            className="relative min-h-screen scroll-mt-32 py-28 text-white overflow-hidden
                       bg-gradient-to-b from-[#0E141B] via-[#151f2b] to-[#0E141B]"
        >
            {/* SUBTLE LIGHT */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#2990E3_0%,transparent_65%)] opacity-[0.06]" />

            <div className="relative container mx-auto max-w-6xl px-6">
                <SectionReveal>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        My <span className="text-[#2990E3]">Projects</span>
                    </h2>
                    <p className="text-gray-400 mb-16">
                        Selected works & case studies
                    </p>
                </SectionReveal>

                <div className="border-t border-white/10">
                    {MyProject.map((project, index) => (
                        <motion.div
                            key={project.id}
                            onMouseEnter={() => setActiveIndex(index)}
                            onMouseLeave={() => setActiveIndex(null)}
                            onClick={() => {
                                if (project.link !== '#') {
                                    window.open(project.link, '_blank');
                                }
                            }}
                            className="border-b border-white/10 py-12 cursor-pointer
                                       hover:bg-white/5 transition px-4 -mx-4"
                        >
                            <div className="flex justify-between items-center gap-8">
                                <div className="flex gap-8">
                                    <span className="text-6xl italic opacity-20">
                                        {project.id}
                                    </span>
                                    <div>
                                        <h3 className="text-3xl font-semibold">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-400">
                                            {project.subtitle}
                                        </p>
                                    </div>
                                </div>

                                <motion.div
                                    animate={{ opacity: activeIndex === index ? 1 : 0 }}
                                >
                                    <FiArrowRight />
                                </motion.div>
                            </div>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className="mt-4 max-w-3xl ml-24 text-gray-400"
                                    >
                                        {project.details}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
