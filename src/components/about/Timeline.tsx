"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
    {
        year: "2023",
        title: "The Spark",
        description: "The idea of IgniteEra was born. A rebellion against the status quo of education.",
    },
    {
        year: "2024",
        title: "The Foundation",
        description: "Building the core team and defining the mission. The first lines of code were written.",
    },
    {
        year: "2025",
        title: "The Launch",
        description: "IgniteEra goes live. The movement begins. We are here to stay.",
    },
    {
        year: "Future",
        title: "Global Impact",
        description: "Expanding to every corner of the globe. Empowering millions.",
    },
];

export default function Timeline() {
    const containerRef = useRef<HTMLDivElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        const line = lineRef.current;
        if (!container || !line) return;

        const items = container.querySelectorAll(".timeline-item");

        gsap.fromTo(
            line,
            { height: 0 },
            {
                height: "100%",
                ease: "none",
                scrollTrigger: {
                    trigger: container,
                    start: "top center",
                    end: "bottom center",
                    scrub: 1,
                },
            }
        );

        items.forEach((item, index) => {
            gsap.fromTo(
                item,
                { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: item,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        });
    }, []);

    return (
        <div ref={containerRef} className="relative max-w-4xl mx-auto py-20 px-4">
            {/* Center Line */}
            <div
                ref={lineRef}
                className="absolute left-1/2 top-0 w-1 bg-ignite-orange -translate-x-1/2 rounded-full"
            />

            <div className="flex flex-col gap-24">
                {milestones.map((milestone, index) => (
                    <div
                        key={index}
                        className={`timeline-item flex items-center justify-between w-full ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                            }`}
                    >
                        {/* Content */}
                        <div className="w-[45%] glass-panel p-6 rounded-2xl hover:border-ignite-orange transition-colors duration-300">
                            <span className="text-ignite-orange font-bold text-xl mb-2 block">
                                {milestone.year}
                            </span>
                            <h3 className="text-2xl font-bold mb-2 text-white">{milestone.title}</h3>
                            <p className="text-gray-400">{milestone.description}</p>
                        </div>

                        {/* Dot */}
                        <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-ignite-orange rounded-full shadow-[0_0_10px_#FF7A00]" />

                        {/* Empty Space for alignment */}
                        <div className="w-[45%]" />
                    </div>
                ))}
            </div>
        </div>
    );
}
