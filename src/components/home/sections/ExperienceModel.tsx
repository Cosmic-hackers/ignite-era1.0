"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
    { title: "Observe", desc: "Identify natural strengths." },
    { title: "Ignite", desc: "Remove system-based blocks." },
    { title: "Train", desc: "Build practical skills." },
    { title: "Build", desc: "Projects, prototypes, startups." },
    { title: "Launch", desc: "Real-world impact." },
];

export default function ExperienceModel() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const items = gsap.utils.toArray(".model-step");

            items.forEach((item: any, i) => {
                gsap.fromTo(item,
                    { opacity: 0, x: -50 },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.8,
                        scrollTrigger: {
                            trigger: item,
                            start: "top 80%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            });

            gsap.fromTo(".vertical-line",
                { height: 0 },
                {
                    height: "100%",
                    duration: 1,
                    ease: "none",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top center",
                        end: "bottom center",
                        scrub: 1
                    }
                }
            );

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-20 sm:py-32 px-4">
            <div className="max-w-4xl mx-auto relative">
                <h2 className="text-3xl sm:text-4xl font-bold mb-12 sm:mb-20 text-center">Experience the IgniteEra Model</h2>

                {/* Vertical Line – left-anchored on mobile, centered on md+ */}
                <div className="absolute left-4 md:left-1/2 top-24 sm:top-32 bottom-0 w-1 bg-white/10 md:-translate-x-1/2 rounded-full">
                    <div className="vertical-line w-full bg-ignite-orange shadow-[0_0_15px_#FF7A00]" />
                </div>

                <div className="space-y-10 sm:space-y-16">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`model-step relative flex items-center gap-6 sm:gap-8 md:gap-16 pl-12 md:pl-0
                                ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}
                            `}
                        >
                            {/* Number Bubble */}
                            <div className="absolute left-0 md:static md:relative z-10 flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-black border-2 border-ignite-orange flex items-center justify-center text-lg sm:text-xl font-bold text-white shadow-[0_0_20px_rgba(255,122,0,0.4)] md:mx-auto">
                                {index + 1}
                            </div>

                            {/* Content */}
                            <div className="flex-1 glass-panel p-5 sm:p-6 rounded-2xl hover:border-ignite-orange/50 transition-colors">
                                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{step.title}</h3>
                                <p className="text-gray-400 text-sm sm:text-base">{step.desc}</p>
                            </div>

                            {/* Spacer for alternating layout (desktop only) */}
                            <div className="hidden md:block flex-1" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
