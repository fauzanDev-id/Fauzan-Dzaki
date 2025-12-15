'use client';

import { motion } from 'framer-motion';
import { IconType } from 'react-icons';

export interface AnimatedSkillBarProps {
    name: string;
    percentage: number;
    icon: IconType;
    color: string;
}

export default function AnimatedSkillBar({
    name,
    percentage,
    icon: Icon,
    color,
}: AnimatedSkillBarProps) {
    return (
        <div className="bg-black/30 backdrop-blur-lg rounded-xl p-6 border border-white/10">
            {/* HEADER */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                    <Icon size={22} style={{ color }} />
                    <span className="text-white font-medium">
                        {name}
                    </span>
                </div>
                <span className="text-gray-400 text-sm">
                    {percentage}%
                </span>
            </div>

            {/* BAR */}
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${percentage}%` }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: color }}
                />
            </div>
        </div>
    );
}
