"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const cards = [
    {
        id: 1,
        title: "Innovation",
        content: "We push boundaries. We don't settle for 'good enough'.",
        color: "bg-gradient-to-br from-orange-500 to-red-600",
    },
    {
        id: 2,
        title: "Community",
        content: "A global network of rebels, creators, and visionaries.",
        color: "bg-gradient-to-br from-blue-500 to-purple-600",
    },
    {
        id: 3,
        title: "Impact",
        content: "Real skills. Real projects. Real change.",
        color: "bg-gradient-to-br from-green-500 to-emerald-600",
    },
];

export default function CardStack() {
    const [index, setIndex] = useState(0);

    const nextCard = () => {
        setIndex((prev) => (prev + 1) % cards.length);
    };

    return (
        <div className="relative h-[400px] w-full max-w-md mx-auto flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
                <AnimatePresence mode="popLayout">
                    {cards.map((card, i) => {
                        const activeIndex = (i - index + cards.length) % cards.length;

                        // Only show top 3 cards visually
                        if (activeIndex > 2) return null;

                        return (
                            <motion.div
                                key={card.id}
                                layout
                                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                                animate={{
                                    scale: 1 - activeIndex * 0.05,
                                    opacity: 1 - activeIndex * 0.2,
                                    y: activeIndex * 20,
                                    zIndex: cards.length - activeIndex,
                                }}
                                exit={{ scale: 0.8, opacity: 0, y: -50 }}
                                transition={{ duration: 0.4 }}
                                onClick={nextCard}
                                className={`absolute w-full h-64 rounded-2xl p-8 cursor-pointer shadow-2xl border border-white/10 backdrop-blur-md ${card.color} flex flex-col justify-center items-center text-center`}
                                style={{
                                    transformOrigin: "top center",
                                }}
                            >
                                <h3 className="text-3xl font-bold text-white mb-4">{card.title}</h3>
                                <p className="text-white/90 text-lg">{card.content}</p>
                                <span className="absolute bottom-4 text-sm text-white/50">Click to cycle</span>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>
        </div>
    );
}
