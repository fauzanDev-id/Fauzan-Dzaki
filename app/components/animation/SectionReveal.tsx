'use client';

import { motion } from 'framer-motion';

export default function SectionReveal({
    children,
    delay = 0,
}: {
    children: React.ReactNode;
    delay?: number;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
                delay,
            }}
            viewport={{ once: true, margin: '-120px' }}
        >
            {children}
        </motion.div>
    );
}
