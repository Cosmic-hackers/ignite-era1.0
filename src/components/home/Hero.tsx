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
    const cyclopsLeftRef = useRef<HTMLDivElement>(null);
    const cyclopsRightRef = useRef<HTMLDivElement>(null);
    const beamLeftRef = useRef<HTMLDivElement>(null);
    const beamRightRef = useRef<HTMLDivElement>(null);

    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

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

            // 2. Cyclops Lights Animation
            const cyclopsTimeline = gsap.timeline();

            // Entrance animation from corners
            cyclopsTimeline
                .fromTo([cyclopsLeftRef.current, cyclopsRightRef.current],
                    { scale: 0, opacity: 0, rotation: 0 },
                    { scale: 1, opacity: 1, duration: 1.5, ease: "elastic.out(1, 0.5)" }
                )
                .fromTo([beamLeftRef.current, beamRightRef.current],
                    { opacity: 0, scaleX: 0 },
                    { opacity: 0.7, scaleX: 1, duration: 1, ease: "power2.out" },
                    "-=1"
                );

            // 3. Text Reveal Animation
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

        // Mouse tracking for micro-movement
        const handleMouseMove = (e: MouseEvent) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 5;
            const y = (e.clientY / window.innerHeight - 0.5) * 5;

            setMousePos({ x, y });

            gsap.to(cyclopsLeftRef.current, {
                x: x * 2,
                y: y * 2,
                duration: 0.5
            });

            gsap.to(cyclopsRightRef.current, {
                x: -x * 2,
                y: y * 2,
                duration: 0.5
            });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            ctx.revert();
            window.removeEventListener("mousemove", handleMouseMove);
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

            {/* Left Corner Helmet */}
            <div className="absolute top-8 left-8 z-20">
                <div ref={cyclopsLeftRef} className="relative w-64 h-64">
                    <Image
                        src="/images/helmet-left.png"
                        alt="Corner Helmet"
                        fill
                        className="object-contain drop-shadow-[0_0_30px_rgba(168,85,247,0.6)]"
                    />
                </div>

                {/* Light beam falling at 45 degrees */}
                <div
                    ref={beamLeftRef}
                    className="absolute top-32 left-32 w-[650px] h-[4px] origin-left"
                    style={{
                        transform: 'rotate(45deg)',
                        background: 'linear-gradient(to right, rgba(168,85,247,0.8) 0%, rgba(168,85,247,0.5) 40%, transparent 100%)',
                        filter: 'blur(8px)',
                        boxShadow: '0 0 25px rgba(168,85,247,0.5)'
                    }}
                />
            </div>

            {/* Right Corner Helmet */}
            <div className="absolute top-8 right-8 z-20">
                <div ref={cyclopsRightRef} className="relative w-64 h-64">
                    <Image
                        src="/images/helmet-right.png"
                        alt="Corner Helmet"
                        fill
                        className="object-contain drop-shadow-[0_0_30px_rgba(168,85,247,0.6)]"
                    />
                </div>

                {/* Light beam falling at 45 degrees */}
                <div
                    ref={beamRightRef}
                    className="absolute top-32 right-32 w-[650px] h-[4px] origin-right"
                    style={{
                        transform: 'rotate(-45deg)',
                        background: 'linear-gradient(to left, rgba(168,85,247,0.8) 0%, rgba(168,85,247,0.5) 40%, transparent 100%)',
                        filter: 'blur(8px)',
                        boxShadow: '0 0 25px rgba(168,85,247,0.5)'
                    }}
                />
            </div>

            <div className="z-10 text-center px-4 max-w-7xl mx-auto flex flex-col items-center">
                {/* Cinematic Eagle */}
                <div ref={eagleRef} className="relative mb-8 group perspective-1000 w-full max-w-5xl">
                    {/* Eagle Image Container */}
                    <div className="relative z-10 w-full aspect-[16/9]">
                        <div className="relative w-full h-full">
                            <Image
                                src="/images/eagle.png"
                                alt="Cinematic Eagle"
                                fill
                                priority
                                className="object-contain grayscale"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1400px"
                            />
                        </div>

                        {/* Bottom Fade */}
                        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
                    </div>

                    {/* Signature */}
                    <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 z-20">
                        <p className="text-white/60 text-sm md:text-base font-light italic tracking-wider">
                            — IgniteEra
                        </p>
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
