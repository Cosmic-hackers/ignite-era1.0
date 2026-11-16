"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Manifesto() {
    const divRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;

        const div = divRef.current;
        const rect = div.getBoundingClientRect();

        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        setOpacity(1);
    };

    const handleMouseEnter = () => {
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    return (
        <section className="py-20 sm:py-32 px-4 bg-black relative">
            <div
                ref={divRef}
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="max-w-5xl mx-auto relative border border-white/10 rounded-3xl p-8 sm:p-16 md:p-24 overflow-hidden text-center"
            >
                {/* Spotlight */}
                <div
                    className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                    style={{
                        opacity,
                        background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,122,0,0.15), transparent 40%)`,
                    }}
                />

                <div className="relative z-10 space-y-6">
                    <p className="text-3xl sm:text-4xl md:text-6xl font-black text-white leading-tight">
                        You were not born to obey. <br />
                        You were born to <span className="text-ignite-orange">create</span>. <br />
                        To question. <br />
                        To build. <br />
                        <span className="relative inline-block">
                            And to prove the system wrong.
                            <span className="absolute bottom-0 left-0 w-full h-1 bg-ignite-orange animate-pulse" />
                        </span>
                    </p>

                    <div className="pt-8 sm:pt-12">
                        <Link
                            href="/about"
                            className="inline-flex items-center gap-2 text-base sm:text-lg font-bold text-white hover:text-ignite-orange transition-colors"
                        >
                            Read the Full Manifesto <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
