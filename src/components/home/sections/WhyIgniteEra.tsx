"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link2, Brain, Flame, Rocket } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function WhyIgniteEra() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".why-card", {
                y: 100,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                },
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-32 px-4 relative">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left: Text Content */}
                <div className="why-card space-y-8">
                    <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                        The System Was Built to <span className="text-ignite-orange">Control</span>, <br />
                        Not to <span className="text-white text-glow">Create</span>.
                    </h2>
                    <p className="text-xl text-gray-400 leading-relaxed">
                        For 150 years, humans have been trained like factory workers—obedience over imagination, memorization over innovation.
                        <br /><br />
                        But the world has evolved. The system hasn’t.
                        <br />
                        <strong className="text-white">IgniteEra exists to fix that.</strong>
                    </p>
                </div>

                {/* Right: Visual/Icons */}
                <div className="why-card relative">
                    <div className="absolute inset-0 bg-ignite-orange/20 blur-[100px] rounded-full" />
                    <div className="relative glass-panel p-10 rounded-3xl border-ignite-orange/30 flex flex-col gap-8">
                        <div className="flex items-center gap-6 group">
                            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-ignite-orange group-hover:scale-110 transition-transform duration-300">
                                <Link2 className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">Break the Chains</h3>
                                <p className="text-gray-400">Unlearn the limitations of the old world.</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 group">
                            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-ignite-orange group-hover:scale-110 transition-transform duration-300">
                                <Brain className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">Rewire the Mind</h3>
                                <p className="text-gray-400">Think critically. Solve impossible problems.</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 group">
                            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-ignite-orange group-hover:scale-110 transition-transform duration-300">
                                <Rocket className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">Launch the Future</h3>
                                <p className="text-gray-400">Build things that actually matter.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
