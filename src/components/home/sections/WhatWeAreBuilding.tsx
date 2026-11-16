"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
    {
        title: "Talent-Discovery Engine",
        desc: "Uncovers what the system never looked for.",
    },
    {
        title: "21st-Century Curriculum",
        desc: "Built around creativity, logic, founders, engineering.",
    },
    {
        title: "Founder Pipeline",
        desc: "Kids → Teens → Builders → Leaders.",
    },
    {
        title: "Learning Hubs",
        desc: "Real-world labs, mentors, tech, tools.",
    },
];

export default function WhatWeAreBuilding() {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".feature-card", {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                },
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-20 sm:py-32 px-4 bg-white/5 border-y border-white/5">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12">What We&apos;re Building</h2>

                <div
                    ref={scrollContainerRef}
                    className="flex gap-6 sm:gap-8 overflow-x-auto pb-6 sm:pb-12 snap-x snap-mandatory"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="feature-card flex-shrink-0 w-[80vw] sm:w-[300px] md:min-w-[400px] h-[280px] sm:h-[300px] glass-panel rounded-3xl p-6 sm:p-8 flex flex-col justify-between snap-center hover:bg-white/10 transition-colors cursor-pointer group"
                        >
                            <div className="w-12 h-12 rounded-full bg-ignite-orange/20 flex items-center justify-center text-ignite-orange font-bold text-xl group-hover:scale-110 transition-transform">
                                {index + 1}
                            </div>
                            <div>
                                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-ignite-orange transition-colors">{item.title}</h3>
                                <p className="text-gray-400 text-sm sm:text-base">{item.desc}</p>
                            </div>
                            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                                <div className="h-full bg-ignite-orange w-0 group-hover:w-full transition-all duration-500" />
                            </div>
                        </div>
                    ))}
                </div>
                {/* Swipe hint on mobile */}
                <p className="sm:hidden text-center text-xs text-gray-600 mt-2">← Swipe to explore →</p>
            </div>
        </section>
    );
}
