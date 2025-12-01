"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    const heroRef = useRef<HTMLDivElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);
    const eagleRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // 1. Particle/Ember Animation
            const container = heroRef.current;
            if (container) {
                const particleCount = 40;
                for (let i = 0; i < particleCount; i++) {
                    const particle = document.createElement("div");
                    particle.classList.add("absolute", "rounded-full", "bg-ignite-orange", "blur-[1px]");
                    const size = Math.random() * 3 + 1;
                    particle.style.width = `${size}px`;
                    particle.style.height = `${size}px`;
                    particle.style.left = `${Math.random() * 100}%`;
                    particle.style.top = `${Math.random() * 100 + 100}%`;
                    particle.style.opacity = `${Math.random() * 0.5 + 0.2}`;
                    container.appendChild(particle);

                    gsap.to(particle, {
                        y: -window.innerHeight * 1.5,
                        x: `+=${Math.random() * 100 - 50}`,
                        rotation: Math.random() * 360,
                        duration: Math.random() * 5 + 5,
                        repeat: -1,
                        ease: "none",
                        delay: Math.random() * 5,
                    });
                }
            }

            // Text Reveal Animation
            const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

            tl.fromTo(eagleRef.current,
                { scale: 1.2, opacity: 0, y: 50 },
                { scale: 1, opacity: 1, y: 0, duration: 1.5 }
            )
                .fromTo(subtitleRef.current,
                    { y: 50, opacity: 0 },
                    { y: 0, opacity: 1, duration: 1 },
                    "-=1"
                )
                .fromTo(ctaRef.current,
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8 },
                    "-=0.6"
                );

        }, heroRef);

        return () => {
            ctx.revert();
        };
    }, []);

    return (
        <section
            ref={heroRef}
            className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black perspective-1000"
        >
            {/* Liquid Warp Background */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,_#FF7A00_0%,_transparent_50%)] animate-slow-spin blur-[100px] opacity-20" />
                <div className="absolute top-[-20%] right-[-20%] w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,_#8000FF_0%,_transparent_50%)] animate-reverse-slow-spin blur-[120px] opacity-10" />
            </div>

            {/* Glass Overlay */}
            <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px] z-0" />

            <div className="z-10 text-center px-4 max-w-7xl mx-auto flex flex-col items-center relative">

                {/* Central Holographic Portal & Title */}
                <div className="relative mb-12 group perspective-1000">
                    {/* Rotating Energy Rings (Background) */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] pointer-events-none">
                        {/* Outer Ring */}
                        <div className="absolute inset-0 border border-cyan-500/20 rounded-full animate-[spin_20s_linear_infinite]" />
                        <div className="absolute inset-0 border-t border-cyan-500/50 rounded-full animate-[spin_20s_linear_infinite]" />

                        {/* Middle Ring */}
                        <div className="absolute inset-[15%] border border-purple-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                        <div className="absolute inset-[15%] border-b border-purple-500/50 rounded-full animate-[spin_15s_linear_infinite_reverse]" />

                        {/* Inner Core */}
                        <div className="absolute inset-[35%] bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-full blur-2xl animate-pulse" />
                        <div className="absolute inset-[38%] border border-white/10 rounded-full animate-[spin_10s_linear_infinite]" />
                    </div>

                    {/* Main Title */}
                    <div ref={eagleRef} className="relative z-10 mix-blend-screen">
                        <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-none select-none">
                            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-600 drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                                IGNITE
                            </span>
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-purple-500 drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]">
                                ERA
                            </span>
                        </h1>

                        {/* Glitch/Scanline Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-[2px] w-full animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite] opacity-20" />
                    </div>
                </div>

                <p
                    ref={subtitleRef}
                    className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
                >
                    Education failed to unlock human potential. <br />
                    So we're building the system that will.
                </p>

                <div ref={ctaRef} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <Link
                        href="/involved"
                        className="group relative px-10 py-5 bg-ignite-orange text-black font-bold text-lg rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,122,0,0.6)]"
                    >
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        <span className="relative flex items-center gap-2">
                            Enter the Revolution <ArrowRight className="w-5 h-5" />
                        </span>
                    </Link>

                    <Link
                        href="/knowledge-hub"
                        className="group px-10 py-5 bg-white/5 border border-white/10 text-white font-bold text-lg rounded-full hover:bg-white/10 transition-all hover:border-ignite-orange/50 backdrop-blur-md"
                    >
                        Explore Knowledge Hub
                    </Link>
                </div>
            </div>
        </section>
    );
}
