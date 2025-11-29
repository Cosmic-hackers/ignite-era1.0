"use client";

import { useState, useRef, MouseEvent } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import knowledgeData from "@/data/knowledge.json";

// Tilt Card Component
function TiltCard({ item }: { item: typeof knowledgeData[0] }) {
    const ref = useRef<HTMLDivElement>(null);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateXValue = ((y - centerY) / centerY) * -10; // Max 10 deg
        const rotateYValue = ((x - centerX) / centerX) * 10;

        setRotateX(rotateXValue);
        setRotateY(rotateYValue);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
    };

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative h-80 rounded-2xl overflow-hidden cursor-pointer group perspective-1000"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: "preserve-3d",
                transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                transition: "transform 0.1s ease-out",
            }}
        >
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${item.image})` }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-300" />

            {/* Content */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end translate-z-20">
                <span className="text-ignite-orange text-sm font-bold mb-2 uppercase tracking-wider transform translate-z-10">
                    {item.category}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2 transform translate-z-20 group-hover:text-ignite-orange transition-colors">
                    {item.title}
                </h3>
                <p className="text-gray-300 text-sm line-clamp-2 transform translate-z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {item.description}
                </p>
            </div>

            {/* Border Glow */}
            <div className="absolute inset-0 border border-white/10 rounded-2xl group-hover:border-ignite-orange/50 transition-colors duration-300 pointer-events-none" />
        </motion.div>
    );
}

export default function KnowledgeGrid() {
    const [search, setSearch] = useState("");

    const filteredData = knowledgeData.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.category.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto mb-16">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                    <Search className="w-5 h-5 text-gray-400" />
                </div>
                <input
                    type="text"
                    placeholder="Search knowledge..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-12 pr-6 text-white placeholder-gray-400 focus:outline-none focus:border-ignite-orange focus:ring-1 focus:ring-ignite-orange transition-all"
                />
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredData.map((item) => (
                    <TiltCard key={item.id} item={item} />
                ))}
            </div>

            {filteredData.length === 0 && (
                <div className="text-center text-gray-500 mt-10">
                    No results found. Try a different search term.
                </div>
            )}
        </div>
    );
}
