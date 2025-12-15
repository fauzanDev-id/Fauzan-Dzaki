'use client';

import AnimatedSkillBar from '@/components/skills/AnimatedSkillBar';
import { skillsData } from '@/skillsData';
import SectionReveal from '@/components/animation/SectionReveal';
import { motion } from 'framer-motion';

export default function SkillsSection() {
    return (
        <section
            id="skills"
            className="relative min-h-screen scroll-mt-32 py-28 overflow-hidden
                       bg-[radial-gradient(circle_at_top,#1e2b3a,#0e141b_70%)]"
        >
            {/* MOVING GRID */}
            <motion.div
                animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 opacity-[0.04]
                           bg-[linear-gradient(to_right,white_1px,transparent_1px),
                               linear-gradient(to_bottom,white_1px,transparent_1px)]
                           bg-[size:60px_60px]"
            />

            <div className="relative container mx-auto px-6">
                <SectionReveal>
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold text-white">
                            My <span className="text-[#2990E3]">Skills</span>
                        </h2>
                        <p className="mt-6 text-gray-400 max-w-xl mx-auto">
                            Technologies I use to build high-quality web applications.
                        </p>
                    </div>
                </SectionReveal>

                <SectionReveal delay={0.2}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {skillsData.map((skill, index) => (
                            <AnimatedSkillBar key={index} {...skill} />
                        ))}
                    </div>
                </SectionReveal>
            </div>
        </section>
    );
}
