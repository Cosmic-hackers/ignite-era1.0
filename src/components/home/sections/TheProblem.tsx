"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const problems = [
    {
        title: "The Great Programming",
        text: "They teach you to memorize, not to think.",
    },
    {
        title: "Creativity Shutdown",
        text: "Curiosity dies in classrooms built for control.",
    },
    {
        title: "Lost Generations",
        text: "Brilliant minds wasted in a system designed for 19th-century factories.",
    },
];

export default function TheProblem() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".problem-card", {
                x: 100,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 70%",
                },
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold mb-16 text-center">The Problem</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {problems.map((item, index) => (
                        <div
                            key={index}
                            className="problem-card group relative h-80 perspective-1000"
                        >
                            <div className="absolute inset-0 bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col justify-end transition-all duration-500 group-hover:transform group-hover:rotate-x-10 group-hover:rotate-y-10 group-hover:shadow-[0_0_30px_rgba(255,122,0,0.2)] group-hover:border-ignite-orange/50">
                                <div className="mb-auto">
                                    <span className="text-6xl font-bold text-white/10 group-hover:text-ignite-orange/20 transition-colors">0{index + 1}</span>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4 relative inline-block">
                                    {item.title}
                                    <span className="absolute left-0 bottom-0 w-0 h-1 bg-ignite-orange transition-all duration-300 group-hover:w-full" />
                                </h3>
                                <p className="text-gray-400 group-hover:text-white transition-colors">
                                    {item.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
