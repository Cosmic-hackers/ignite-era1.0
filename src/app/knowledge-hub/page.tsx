"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Search, Play, Download, Clock, Cpu, Database, Globe, Zap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// Static data - no admin panel needed
const staticArticles = [
    {
        id: "1",
        title: "The Future of Artificial Intelligence in 2025",
        category: "Artificial Intelligence",
        time: "8 min read",
        content: "Exploring the latest advancements in AI and their impact on society."
    },
    {
        id: "2",
        title: "Quantum Computing: A Beginner's Guide",
        category: "Research & Insights",
        time: "12 min read",
        content: "Understanding the fundamentals of quantum computing and its potential applications."
    },
    {
        id: "3",
        title: "Cybersecurity Best Practices for 2025",
        category: "Cybersecurity",
        time: "6 min read",
        content: "Essential security measures every developer should implement."
    },
    {
        id: "4",
        title: "Building Scalable Microservices with Kubernetes",
        category: "Cloud & DevOps",
        time: "10 min read",
        content: "A comprehensive guide to deploying and managing microservices."
    },
    {
        id: "5",
        title: "Web3 and the Decentralized Future",
        category: "Blockchain / Web3",
        time: "7 min read",
        content: "How blockchain technology is reshaping the internet."
    },
    {
        id: "6",
        title: "Robotics in Modern Manufacturing",
        category: "Robotics",
        time: "9 min read",
        content: "The role of automation and robotics in Industry 4.0."
    }
];

const staticVideos = [
    {
        id: "1",
        title: "Introduction to Machine Learning",
        duration: "15:30",
        thumbnail: "🤖"
    },
    {
        id: "2",
        title: "React 19 - What's New?",
        duration: "12:45",
        thumbnail: "⚛️"
    },
    {
        id: "3",
        title: "Docker Crash Course",
        duration: "20:15",
        thumbnail: "🐳"
    },
    {
        id: "4",
        title: "Advanced TypeScript Patterns",
        duration: "18:00",
        thumbnail: "📘"
    }
];

const staticResources = [
    {
        id: "1",
        title: "Python Cheat Sheet",
        type: "PDF",
        icon: "🐍"
    },
    {
        id: "2",
        title: "Git Command Reference",
        type: "Guide",
        icon: "📚"
    },
    {
        id: "3",
        title: "VS Code Extensions Pack",
        type: "Tool",
        icon: "🛠️"
    },
    {
        id: "4",
        title: "API Design Best Practices",
        type: "Template",
        icon: "📋"
    },
    {
        id: "5",
        title: "React Component Library",
        type: "Tool",
        icon: "⚡"
    },
    {
        id: "6",
        title: "Database Schema Templates",
        type: "Template",
        icon: "🗄️"
    }
];

export default function KnowledgeHubPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const searchRef = useRef<HTMLInputElement>(null);
    const [searchText, setSearchText] = useState("");

    const articles = staticArticles;
    const videos = staticVideos;
    const resources = staticResources;

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Holographic entrance animation
            gsap.from(".holo-card", {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".content-grid",
                    start: "top 80%",
                }
            });

            // Floating elements
            gsap.to(".floating-orb", {
                y: -20,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                stagger: 0.5
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <main ref={containerRef} className="min-h-screen bg-[#050505] text-white overflow-hidden selection:bg-cyan-500/30">
            {/* Holographic Grid Background */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-cyan-900/10 via-transparent to-purple-900/10" />
            </div>

            {/* Hero Section */}
            <section className="relative pt-20 sm:pt-32 pb-10 sm:pb-16 px-4 z-10">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="inline-block mb-4 px-4 py-1 rounded-full border border-cyan-500/30 bg-cyan-900/10 backdrop-blur-md">
                        <span className="text-cyan-400 text-sm font-mono tracking-widest uppercase flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                            System Online
                        </span>
                    </div>

                    <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 tracking-tighter relative inline-block">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-white to-purple-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">
                            KNOWLEDGE HUB
                        </span>
                        {/* Glitch Effect Layer */}
                        <span className="absolute top-0 left-0 -ml-1 opacity-50 text-cyan-500 animate-pulse" style={{ clipPath: 'inset(20% 0 60% 0)' }}>KNOWLEDGE HUB</span>
                    </h1>

                    <p className="text-base sm:text-xl text-cyan-100/60 max-w-2xl mx-auto mb-8 sm:mb-12 font-light">
                        Accessing secure data modules. Decrypting insights. <br />
                        <span className="text-cyan-400 font-mono">Loading neural interface...</span>
                    </p>

                    {/* Holographic Search */}
                    <div className="relative max-w-2xl mx-auto group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
                        <div className="relative flex items-center bg-black/80 backdrop-blur-xl border border-white/10 rounded-lg p-1">
                            <Search className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-500 ml-3 sm:ml-4 flex-shrink-0" />
                            <input
                                ref={searchRef}
                                type="text"
                                value={searchText}
                                onChange={(e) => setSearchText(e.target.value)}
                                placeholder="Search database..."
                                className="w-full bg-transparent border-none px-3 sm:px-4 py-2 sm:py-3 text-white placeholder-cyan-700/50 focus:outline-none font-mono text-sm sm:text-base"
                            />
                            <div className="px-3 py-1 bg-white/5 rounded border border-white/10 text-xs text-cyan-500 font-mono hidden md:block flex-shrink-0">
                                CTRL + K
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Grid */}
            <div className="content-grid max-w-7xl mx-auto px-4 pb-32 relative z-10">

                {/* Section 1: Data Modules (Articles) */}
                <div className="mb-16 sm:mb-20">
                    <div className="flex items-center gap-4 mb-6 sm:mb-8 border-b border-cyan-500/20 pb-4">
                        <Database className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
                        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-wide">DATA MODULES</h2>
                        <div className="ml-auto text-xs font-mono text-cyan-500/50 hidden sm:block">INDEXING: COMPLETE</div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {articles.map((article) => (
                            <div key={article.id} className="holo-card group relative bg-black/40 border border-cyan-500/20 hover:border-cyan-400/50 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] hover:-translate-y-1">
                                {/* Holographic Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="p-5 sm:p-6 relative z-10 h-full flex flex-col">
                                    <div className="flex justify-between items-start mb-4">
                                        <span className="px-2 py-1 text-xs font-mono text-cyan-300 bg-cyan-900/30 border border-cyan-500/30 rounded">
                                            {article.category.toUpperCase()}
                                        </span>
                                        <Clock className="w-4 h-4 text-cyan-700" />
                                    </div>

                                    <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                                        {article.title}
                                    </h3>

                                    <div className="mt-auto pt-4 border-t border-white/5 flex justify-between items-center">
                                        <span className="text-sm text-gray-500 font-mono">{article.time}</span>
                                        <span className="text-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity text-sm font-mono flex items-center gap-1">
                                            ACCESS <Globe className="w-3 h-3" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section 2: Holo-Streams (Videos) */}
                <div className="mb-16 sm:mb-20">
                    <div className="flex items-center gap-4 mb-6 sm:mb-8 border-b border-purple-500/20 pb-4">
                        <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-wide">HOLO-STREAMS</h2>
                        <div className="ml-auto text-xs font-mono text-purple-500/50 hidden sm:block">SIGNAL: STRONG</div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                        {videos.map((video) => (
                            <div key={video.id} className="holo-card group relative aspect-video bg-gray-900 rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-400/60 transition-all duration-300">
                                <div className="absolute inset-0 flex items-center justify-center text-5xl sm:text-6xl opacity-50 group-hover:opacity-20 transition-opacity">
                                    {video.thumbnail}
                                </div>

                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80" />

                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100">
                                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-purple-500/20 backdrop-blur-sm border border-purple-400 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                                        <Play className="w-5 h-5 sm:w-6 sm:h-6 text-purple-300 fill-purple-300" />
                                    </div>
                                </div>

                                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                                    <h3 className="font-bold text-white mb-1 truncate text-sm sm:text-base">{video.title}</h3>
                                    <p className="text-xs text-purple-300 font-mono">{video.duration}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section 3: Asset Library (Resources) */}
                <div>
                    <div className="flex items-center gap-4 mb-6 sm:mb-8 border-b border-green-500/20 pb-4">
                        <Cpu className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
                        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-wide">ASSET LIBRARY</h2>
                        <div className="ml-auto text-xs font-mono text-green-500/50 hidden sm:block">STATUS: ONLINE</div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                        {resources.map((resource) => (
                            <div key={resource.id} className="holo-card group p-4 bg-white/5 border border-white/10 hover:border-green-400/50 rounded-xl flex items-center gap-4 transition-all duration-300 hover:bg-white/10 cursor-pointer">
                                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded bg-black/50 flex items-center justify-center text-xl sm:text-2xl border border-white/10 group-hover:border-green-500/30 transition-colors flex-shrink-0">
                                    {resource.icon}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="font-bold text-sm text-white truncate group-hover:text-green-300 transition-colors">
                                        {resource.title}
                                    </h3>
                                    <span className="text-xs text-gray-500 font-mono border border-white/10 px-1 rounded mt-1 inline-block">
                                        {resource.type}
                                    </span>
                                </div>
                                <Download className="w-4 h-4 text-gray-500 group-hover:text-green-400 transition-colors flex-shrink-0" />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </main>
    );
}
