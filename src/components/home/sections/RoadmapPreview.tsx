"use client";

import Link from "next/link";

const milestones = [
    { year: "2025", title: "Prototype Model" },
    { year: "2026", title: "First IgniteEra Hub" },
    { year: "2027", title: "Talent Engine" },
    { year: "2028", title: "Global Youth Network" },
    { year: "2029", title: "IgniteEra Operating System" },
];

export default function RoadmapPreview() {
    return (
        <section className="py-20 sm:py-32 px-4">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold mb-10 sm:mb-16 text-center">Future Roadmap</h2>

                <div className="relative">
                    {/* Horizontal Line (desktop only) */}
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-white/10 -translate-y-1/2 rounded-full hidden md:block" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 sm:gap-8">
                        {milestones.map((item, index) => (
                            <div key={index} className="relative group">
                                {/* Dot */}
                                <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-black border-2 border-ignite-orange rounded-full z-10 group-hover:scale-150 transition-transform duration-300 shadow-[0_0_10px_#FF7A00]" />

                                <div className="glass-panel p-5 sm:p-6 rounded-2xl text-center hover:-translate-y-4 transition-transform duration-300 border-ignite-orange/20 hover:border-ignite-orange/50">
                                    <span className="text-ignite-orange font-bold text-lg sm:text-xl block mb-2">{item.year}</span>
                                    <h3 className="text-white font-bold text-sm sm:text-base">{item.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-center mt-10 sm:mt-16">
                    <Link href="/roadmap" className="text-gray-400 hover:text-white transition-colors underline underline-offset-4 text-sm sm:text-base">
                        View Full Roadmap
                    </Link>
                </div>
            </div>
        </section>
    );
}
