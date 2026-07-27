"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function FloatingPaths({ position = 1, className }: { position: number; className?: string }) {
    const paths = Array.from({ length: 12 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 14 * position} -${189 + i * 15}C-${
            380 - i * 14 * position
        } -${189 + i * 15} -${312 - i * 14 * position} ${216 - i * 15} ${
            152 - i * 14 * position
        } ${343 - i * 15}C${616 - i * 14 * position} ${470 - i * 15} ${
            684 - i * 14 * position
        } ${875 - i * 15} ${684 - i * 14 * position} ${875 - i * 15}`,
        width: 0.3 + i * 0.02,
    }));

    return (
        <div className={cn("absolute inset-0 pointer-events-none overflow-hidden", className)}>
            <svg
                className="w-full h-full text-blue-500/60"
                viewBox="0 0 696 316"
                fill="none"
            >
                <title>Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="currentColor"
                        strokeWidth={path.width}
                        strokeOpacity={0.08 + path.id * 0.015}
                        initial={{ pathLength: 0.3, opacity: 0.4 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.2, 0.45, 0.2],
                            pathOffset: [0, 1, 0],
                        }}
                        transition={{
                            duration: 24 + Math.random() * 10,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

export function BackgroundPaths({
    title = "Background Paths",
    className,
}: {
    title?: string;
    className?: string;
}) {
    const words = title.split(" ");

    return (
        <div className={cn("relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white", className)}>
            <div className="absolute inset-0">
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    className="max-w-4xl mx-auto"
                >
                    <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-8 tracking-tighter">
                        {words.map((word, wordIndex) => (
                            <span
                                key={wordIndex}
                                className="inline-block mr-4 last:mr-0"
                            >
                                {word.split("").map((letter, letterIndex) => (
                                    <motion.span
                                        key={`${wordIndex}-${letterIndex}`}
                                        initial={{ y: 100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{
                                            delay:
                                                wordIndex * 0.1 +
                                                letterIndex * 0.03,
                                            type: "spring",
                                            stiffness: 150,
                                            damping: 25,
                                        }}
                                        className="inline-block text-transparent bg-clip-text 
                                        bg-gradient-to-r from-blue-600 to-sky-500"
                                    >
                                        {letter}
                                    </motion.span>
                                ))}
                            </span>
                        ))}
                    </h1>
                </motion.div>
            </div>
        </div>
    );
}
