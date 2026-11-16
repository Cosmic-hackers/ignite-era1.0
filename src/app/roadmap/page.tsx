"use client";

import { motion } from "framer-motion";

const roadmapItems = [
    {
        phase: "Phase 1",
        title: "Genesis",
        status: "Completed",
        items: ["Concept Validation", "Core Team Assembly", "Initial Funding"],
    },
    {
        phase: "Phase 2",
        title: "Ignition",
        status: "In Progress",
        items: ["Platform Launch", "First Cohort", "Partnership Announcements"],
    },
    {
        phase: "Phase 3",
        title: "Expansion",
        status: "Upcoming",
        items: ["Global Hubs", "Mobile App", "DAO Governance"],
    },
    {
        phase: "Phase 4",
        title: "Ecosystem",
        status: "Future",
        items: ["IgniteEra University", "Venture Fund", "The New Standard"],
    },
];

export default function RoadmapPage() {
    return (
        <main className="min-h-screen pt-16 sm:pt-24 pb-20 px-4 max-w-5xl mx-auto">
            <section className="text-center mb-12 sm:mb-20">
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 text-glow">Roadmap</h1>
                <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
                    The path forward.
                </p>
            </section>

            <div className="relative">
                {/* Center Line – left on mobile, center on md+ */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-ignite-orange via-ignite-orange/50 to-transparent md:-translate-x-1/2" />

                <div className="space-y-12 sm:space-y-16">
                    {roadmapItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`relative flex flex-col md:flex-row gap-6 md:gap-0 pl-10 md:pl-0 ${
                                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                            }`}
                        >
                            {/* Content */}
                            <div className={`md:w-1/2 md:pr-12 ${index % 2 !== 0 ? "md:pr-0 md:pl-12 md:text-left" : "md:text-right"}`}>
                                <div className={`glass-panel p-5 sm:p-6 rounded-2xl border-l-4 ${
                                    item.status === "Completed"
                                        ? "border-l-green-500"
                                        : item.status === "In Progress"
                                        ? "border-l-ignite-orange"
                                        : "border-l-gray-500"
                                } ${index % 2 !== 0 ? "md:border-l-0 md:border-r-4 md:border-r-ignite-orange" : ""}`}>
                                    <span className="text-sm font-mono text-ignite-orange mb-2 block uppercase tracking-widest">
                                        {item.phase} • {item.status}
                                    </span>
                                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">{item.title}</h3>
                                    <ul className="space-y-2">
                                        {item.items.map((subItem, i) => (
                                            <li key={i} className="text-gray-400 text-sm">
                                                {subItem}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Dot */}
                            <div className="absolute left-4 md:left-1/2 top-5 md:top-auto md:translate-y-6 -translate-x-1/2 w-4 h-4 bg-black border-2 border-ignite-orange rounded-full z-10 shadow-[0_0_15px_rgba(255,122,0,0.5)]">
                                {item.status === "In Progress" && (
                                    <div className="absolute inset-0 bg-ignite-orange rounded-full animate-ping opacity-75" />
                                )}
                            </div>

                            {/* Empty Space */}
                            <div className="hidden md:block md:w-1/2" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
}
