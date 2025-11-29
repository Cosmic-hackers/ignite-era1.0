"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Home, Info, BookOpen, Users, Map, Mail, Terminal } from "lucide-react";

const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "/about", icon: Info },
    { name: "Knowledge Hub", href: "/knowledge-hub", icon: BookOpen },
    { name: "Involved", href: "/involved", icon: Users },
    { name: "Roadmap", href: "/roadmap", icon: Map },
    { name: "Contact", href: "/contact", icon: Mail },
];

export default function NavBar() {
    const pathname = usePathname();

    return (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
            <motion.nav
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="glass-nav flex items-center gap-2 px-4 py-3 rounded-2xl"
            >
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    const Icon = item.icon;

                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="relative group flex flex-col items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 hover:bg-white/10 hover:-translate-y-2"
                        >
                            <span className="sr-only">{item.name}</span>
                            <Icon
                                className={cn(
                                    "w-6 h-6 transition-colors duration-300",
                                    isActive ? "text-ignite-orange" : "text-gray-400 group-hover:text-white"
                                )}
                            />

                            {/* Tooltip */}
                            <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-transform bg-black/80 text-white text-xs px-2 py-1 rounded backdrop-blur-md border border-white/10 whitespace-nowrap">
                                {item.name}
                            </span>

                            {/* Active Indicator */}
                            {isActive && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute -bottom-1 w-1 h-1 bg-ignite-orange rounded-full shadow-[0_0_8px_rgba(255,122,0,0.8)]"
                                />
                            )}
                        </Link>
                    );
                })}

                <div className="w-px h-8 bg-white/10 mx-2" />

                {/* Terminal / Extra Link */}
                <Link
                    href="/terminal"
                    className="relative group flex flex-col items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 hover:bg-white/10 hover:-translate-y-2"
                >
                    <Terminal className="w-6 h-6 text-gray-400 group-hover:text-ignite-orange" />
                    <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-transform bg-black/80 text-white text-xs px-2 py-1 rounded backdrop-blur-md border border-white/10 whitespace-nowrap">
                        Terminal
                    </span>
                </Link>
            </motion.nav>
        </div>
    );
}
