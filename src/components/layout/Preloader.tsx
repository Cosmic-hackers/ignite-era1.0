"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Simulate loading progress
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setLoading(false), 500);
                    return 100;
                }
                return prev + Math.random() * 15;
            });
        }, 200);

        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden"
                >
                    {/* Animated background grid */}
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,122,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,122,0,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />
                    </div>

                    {/* Glowing orbs */}
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-ignite-orange/20 rounded-full blur-[100px] animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-[100px] animate-pulse delay-1000" />

                    {/* Main content */}
                    <div className="relative z-10 text-center">
                        {/* Logo/Brand */}
                        <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ duration: 0.8, ease: "backOut" }}
                            className="mb-8"
                        >
                            <div className="relative inline-block">
                                <div className="text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-ignite-orange via-white to-purple-500 drop-shadow-[0_0_30px_rgba(255,122,0,0.5)]">
                                    IgniteEra
                                </div>
                                {/* Glowing underline */}
                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ delay: 0.5, duration: 0.8 }}
                                    className="h-1 bg-gradient-to-r from-transparent via-ignite-orange to-transparent mt-2 rounded-full"
                                />
                            </div>
                        </motion.div>

                        {/* Loading text */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-gray-400 text-lg mb-8 font-mono"
                        >
                            Initializing System...
                        </motion.p>

                        {/* Progress bar */}
                        <div className="w-80 mx-auto">
                            <div className="relative h-2 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${progress}%` }}
                                    transition={{ duration: 0.3 }}
                                    className="h-full bg-gradient-to-r from-ignite-orange to-purple-500 rounded-full relative"
                                >
                                    {/* Glowing effect */}
                                    <div className="absolute inset-0 bg-white/30 blur-sm" />
                                </motion.div>
                            </div>
                            {/* Percentage */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="text-right mt-2 text-ignite-orange font-mono text-sm"
                            >
                                {Math.round(progress)}%
                            </motion.div>
                        </div>

                        {/* Spinning loader */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="mt-12 flex justify-center gap-2"
                        >
                            {[0, 1, 2].map((i) => (
                                <motion.div
                                    key={i}
                                    animate={{
                                        scale: [1, 1.5, 1],
                                        opacity: [0.3, 1, 0.3],
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        delay: i * 0.2,
                                    }}
                                    className="w-2 h-2 bg-ignite-orange rounded-full"
                                />
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
