'use client';

import { FaLinkedinIn, FaInstagram, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="relative bg-[#0E141B] text-white overflow-hidden">
            {/* TOP DIVIDER */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            {/* BACKGROUND GLOW */}
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#2990E3]/10 rounded-full blur-[180px]" />

            <div className="relative container mx-auto max-w-6xl px-6 py-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* BRAND */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold">
                            Fauzan<span className="text-[#2990E3]">Dzaki</span>
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                            Front-End Developer focused on building modern, responsive,
                            and secure web interfaces using Next.js and modern JavaScript.
                        </p>
                    </div>

                    {/* NAVIGATION */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold tracking-wider uppercase text-gray-300">
                            Navigation
                        </h4>
                        <ul className="space-y-2 text-gray-400">
                            {[
                                { label: 'Home', href: '#home' },
                                { label: 'Skills', href: '#skills' },
                                { label: 'Projects', href: '#projects' },
                                { label: 'Contact', href: '#contact' },
                            ].map((item, i) => (
                                <li key={i}>
                                    <a
                                        href={item.href}
                                        className="hover:text-white transition"
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CONTACT / SOCIAL */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold tracking-wider uppercase text-gray-300">
                            Connect
                        </h4>

                        <div className="flex items-center gap-3 text-gray-400 text-sm">
                            <FaEnvelope className="text-[#2990E3]" />
                            fauzandzakidev@gmail.com
                        </div>

                        <div className="flex gap-4 mt-4">
                            {[
                                {
                                    icon: <FaLinkedinIn />,
                                    href: 'https://www.linkedin.com/in/fauzan-dzaki-828154376/',
                                },
                                {
                                    icon: <FaInstagram />,
                                    href: 'https://www.instagram.com/fauzan.da_',
                                },
                            ].map((item, i) => (
                                <a
                                    key={i}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-full bg-white/5 border border-white/10
                                               text-gray-300 hover:text-white hover:bg-[#2990E3]/20 transition"
                                >
                                    {item.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* BOTTOM */}
                <div className="mt-16 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
                    © {new Date().getFullYear()} Fauzan Dzaki. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
