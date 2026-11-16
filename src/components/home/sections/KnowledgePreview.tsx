"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const topics = [
    "Brain development",
    "Cognitive evolution",
    "Skill mapping",
    "Projects & challenges",
    "Educational psychology",
    "Talent profiling",
];

export default function KnowledgePreview() {
    return (
        <section className="py-20 sm:py-32 px-4 relative overflow-hidden">
            {/* Particle Background */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_#FF7A00_0%,_transparent_20%)] bg-[length:20px_20px]" />
            </div>

            <div className="max-w-7xl mx-auto text-center relative z-10">
                <h2 className="text-3xl sm:text-4xl font-bold mb-10 sm:mb-16">Knowledge Hub Preview</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-16">
                    {topics.map((topic, index) => (
                        <div
                            key={index}
                            className="group h-36 sm:h-48 glass-panel rounded-2xl flex items-center justify-center p-4 sm:p-6 cursor-pointer hover:bg-ignite-orange/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,122,0,0.2)]"
                        >
                            <h3 className="text-base sm:text-xl font-bold text-white group-hover:text-ignite-orange transition-colors">
                                {topic}
                            </h3>
                        </div>
                    ))}
                </div>

                <Link
                    href="/knowledge-hub"
                    className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-black font-bold rounded-full hover:bg-ignite-orange transition-colors text-sm sm:text-base"
                >
                    View Complete Hub <ArrowRight className="w-5 h-5" />
                </Link>
            </div>
        </section>
    );
}
