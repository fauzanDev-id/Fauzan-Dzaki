'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FaEnvelope,
    FaMapMarkerAlt,
    FaLinkedinIn,
    FaInstagram,
    FaPaperPlane,
    FaClock,
    FaCheckCircle,
} from 'react-icons/fa';
import SectionReveal from '@/components/animation/SectionReveal';

export default function ContactSection() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const res = await fetch('https://formspree.io/f/mpwveddp', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                },
                body: formData,
            });

            if (res.ok) {
                setSuccess(true);
                form.reset();
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section
            id="contact"
            className="
        relative
        scroll-mt-32
        py-28
        text-white
        overflow-hidden
        bg-gradient-to-b
        from-[#0E141B]
        via-[#19222D]
        to-[#0E141B]
      "
        >
            {/* BACKGROUND BLOBS */}
            <motion.div
                animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
                transition={{ duration: 12, repeat: Infinity }}
                className="absolute -top-40 -left-40 w-[520px] h-[520px]
                   bg-[#2990E3]/20 rounded-full blur-[180px]"
            />
            <motion.div
                animate={{ x: [0, -40, 0], y: [0, 60, 0] }}
                transition={{ duration: 14, repeat: Infinity }}
                className="absolute bottom-0 right-0 w-[420px] h-[420px]
                   bg-purple-500/10 rounded-full blur-[160px]"
            />

            <div className="relative container mx-auto max-w-6xl px-6">
                {/* HEADER */}
                <SectionReveal>
                    <div className="text-center mb-24">
                        <span className="inline-flex items-center gap-2 px-4 py-2
                             rounded-full bg-[#2990E3]/10 text-[#2990E3]
                             text-sm mb-6">
                            <FaCheckCircle />
                            Open for collaboration
                        </span>

                        <h2 className="text-4xl md:text-5xl font-bold">
                            Get In <span className="text-[#2990E3]">Touch</span>
                        </h2>
                        <p className="mt-6 text-gray-400 max-w-xl mx-auto">
                            Have a project idea, freelance work, or just want to connect?
                            Let’s talk.
                        </p>
                    </div>
                </SectionReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                    {/* INFO */}
                    <SectionReveal>
                        <div className="space-y-10">
                            <p className="text-gray-400 leading-relaxed">
                                I’m always interested in new opportunities and collaborations.
                                I usually respond within 24 hours.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <InfoItem
                                    icon={<FaEnvelope />}
                                    title="Email"
                                    value="fauzandzakidev@gmail.com"
                                />
                                <InfoItem
                                    icon={<FaMapMarkerAlt />}
                                    title="Location"
                                    value="Yogyakarta, Indonesia"
                                />
                                <InfoItem
                                    icon={<FaClock />}
                                    title="Response Time"
                                    value="Within 24 hours"
                                />
                            </div>

                            <div>
                                <p className="text-sm text-gray-400 mb-4">Connect with me</p>
                                <div className="flex gap-4">
                                    <SocialLink
                                        href="https://www.linkedin.com/in/fauzan-dzaki-828154376/"
                                        icon={<FaLinkedinIn />}
                                    />
                                    <SocialLink
                                        href="https://www.instagram.com/fauzan.da_"
                                        icon={<FaInstagram />}
                                    />
                                </div>
                            </div>
                        </div>
                    </SectionReveal>

                    {/* FORM */}
                    <SectionReveal delay={0.2}>
                        <motion.form
                            onSubmit={handleSubmit}
                            className="bg-black/40 backdrop-blur-xl rounded-2xl p-10
                         border border-white/10 space-y-6"
                        >
                            <AnimatePresence>
                                {success && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className="p-4 rounded-lg bg-green-500/10
                               text-green-400 border border-green-500/20"
                                    >
                                        ✅ Message sent successfully. I’ll get back to you soon!
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <input name="name" required placeholder="Your Name"
                                className="w-full bg-black/40 border border-white/20 rounded-lg px-4 py-3" />

                            <input name="email" type="email" required placeholder="Your Email"
                                className="w-full bg-black/40 border border-white/20 rounded-lg px-4 py-3" />

                            <textarea name="message" rows={4} required
                                placeholder="Tell me about your project or idea..."
                                className="w-full bg-black/40 border border-white/20 rounded-lg px-4 py-3 resize-none" />

                            <button
                                type="submit"
                                disabled={loading}
                                className="flex items-center gap-3 bg-[#2990E3]
                           text-black px-8 py-3 rounded-lg font-semibold
                           hover:bg-[#1f7ac0] transition disabled:opacity-50"
                            >
                                <FaPaperPlane />
                                {loading ? 'Sending...' : 'Send Message'}
                            </button>
                        </motion.form>
                    </SectionReveal>
                </div>
            </div>
        </section>
    );
}

/* ===================== */
/* SMALL COMPONENTS */
/* ===================== */

function InfoItem({
    icon,
    title,
    value,
}: {
    icon: React.ReactNode;
    title: string;
    value: string;
}) {
    return (
        <div className="flex items-center gap-4 p-4 rounded-xl
                    bg-white/5 border border-white/10">
            <div className="text-[#2990E3]">{icon}</div>
            <div>
                <p className="text-sm text-gray-400">{title}</p>
                <p className="text-gray-300 text-sm">{value}</p>
            </div>
        </div>
    );
}

function SocialLink({
    href,
    icon,
}: {
    href: string;
    icon: React.ReactNode;
}) {
    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            className="p-4 rounded-full bg-white/5
                 border border-white/10 text-gray-300 hover:text-white"
        >
            {icon}
        </motion.a>
    );
}
