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
            const scrollContainer = scrollContainerRef.current;
            if (!scrollContainer) return;

            const totalWidth = scrollContainer.scrollWidth - scrollContainer.clientWidth;

            // Horizontal Scroll Animation
            // Note: For simplicity in this vertical layout, we'll make it a horizontal scroll container 
            // that users can scroll, or we could force it with ScrollTrigger pin. 
            // Given the "Mac OS Finder Preview" description, a clean horizontal overflow with custom scrollbar is often best for UX.
            // But let's add a subtle animation on enter.

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
        <section ref={containerRef} className="py-32 px-4 bg-white/5 border-y border-white/5">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold mb-12">What We’re Building</h2>

                <div
                    ref={scrollContainerRef}
                    className="flex gap-8 overflow-x-auto pb-12 snap-x snap-mandatory scrollbar-hide"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="feature-card min-w-[300px] md:min-w-[400px] h-[300px] glass-panel rounded-3xl p-8 flex flex-col justify-between snap-center hover:bg-white/10 transition-colors cursor-pointer group"
                        >
                            <div className="w-12 h-12 rounded-full bg-ignite-orange/20 flex items-center justify-center text-ignite-orange font-bold text-xl group-hover:scale-110 transition-transform">
                                {index + 1}
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-ignite-orange transition-colors">{item.title}</h3>
                                <p className="text-gray-400">{item.desc}</p>
                            </div>
                            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                                <div className="h-full bg-ignite-orange w-0 group-hover:w-full transition-all duration-500" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
