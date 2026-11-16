"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { Home, Info, BookOpen, Users, Map, Mail, Terminal } from "lucide-react";

const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "/about", icon: Info },
    { name: "Knowledge Hub", href: "/knowledge-hub", icon: BookOpen },
    { name: "Involved", href: "/involved", icon: Users },
    { name: "Roadmap", href: "/roadmap", icon: Map },
    { name: "Contact", href: "/contact", icon: Mail },
    { name: "Terminal", href: "/terminal", icon: Terminal },
];

// ── Single dock icon with Mac magnification ─────────────────────────────────
function DockIcon({
    item,
    isActive,
    mouseX,
}: {
    item: (typeof navItems)[0];
    isActive: boolean;
    mouseX: ReturnType<typeof useMotionValue<number>>;
}) {
    const ref = useRef<HTMLAnchorElement>(null);
    const Icon = item.icon;

    // Distance of this icon's center from the mouse cursor
    const distance = useTransform(mouseX, (val) => {
        const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });

    // Magnification curve — wide radius so neighbours grow too
    const widthTransform = useTransform(distance, [-120, 0, 120], [36, 58, 36]);
    const heightTransform = useTransform(distance, [-120, 0, 120], [36, 58, 36]);

    // For desktop the base is a bit bigger
    const widthTransformDesk = useTransform(distance, [-140, 0, 140], [44, 66, 44]);
    const heightTransformDesk = useTransform(distance, [-140, 0, 140], [44, 66, 44]);

    const widthSpring = useSpring(widthTransform, { mass: 0.1, stiffness: 160, damping: 12 });
    const heightSpring = useSpring(heightTransform, { mass: 0.1, stiffness: 160, damping: 12 });
    const widthSpringDesk = useSpring(widthTransformDesk, { mass: 0.1, stiffness: 160, damping: 12 });
    const heightSpringDesk = useSpring(heightTransformDesk, { mass: 0.1, stiffness: 160, damping: 12 });

    return (
        <Link href={item.href} ref={ref} className="relative group flex items-end justify-center">
            <span className="sr-only">{item.name}</span>

            {/* Tooltip */}
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform origin-bottom bg-black/80 text-white text-xs px-2 py-1 rounded backdrop-blur-md border border-white/10 whitespace-nowrap pointer-events-none z-50">
                {item.name}
            </span>

            {/* Mobile icon box */}
            <motion.div
                style={{ width: widthSpring, height: heightSpring }}
                className={cn(
                    "sm:hidden rounded-xl flex items-center justify-center transition-colors duration-200",
                    isActive ? "bg-ignite-orange/20" : "hover:bg-white/10"
                )}
            >
                <Icon
                    className={cn(
                        "w-5 h-5 transition-colors duration-200",
                        isActive ? "text-ignite-orange" : "text-gray-300 group-hover:text-white"
                    )}
                />
                {isActive && (
                    <motion.div
                        layoutId="activeTabMobile"
                        className="absolute -bottom-1 w-1 h-1 bg-ignite-orange rounded-full shadow-[0_0_6px_rgba(255,122,0,0.9)]"
                    />
                )}
            </motion.div>

            {/* Desktop icon box */}
            <motion.div
                style={{ width: widthSpringDesk, height: heightSpringDesk }}
                className={cn(
                    "hidden sm:flex rounded-xl items-center justify-center transition-colors duration-200",
                    isActive ? "bg-ignite-orange/20" : "hover:bg-white/10"
                )}
            >
                <Icon
                    className={cn(
                        "w-6 h-6 transition-colors duration-200",
                        isActive ? "text-ignite-orange" : "text-gray-300 group-hover:text-white"
                    )}
                />
                {isActive && (
                    <motion.div
                        layoutId="activeTabDesktop"
                        className="absolute -bottom-1 w-1 h-1 bg-ignite-orange rounded-full shadow-[0_0_8px_rgba(255,122,0,0.8)]"
                    />
                )}
            </motion.div>
        </Link>
    );
}

// ── Main NavBar ──────────────────────────────────────────────────────────────
export default function NavBar() {
    const pathname = usePathname();
    const mouseX = useMotionValue(Infinity);

    return (
        <div className="fixed bottom-5 sm:bottom-7 left-1/2 -translate-x-1/2 z-50 w-auto max-w-[calc(100vw-24px)]">
            <motion.nav
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                onMouseMove={(e) => mouseX.set(e.clientX)}
                onMouseLeave={() => mouseX.set(Infinity)}
                className="glass-nav flex items-end gap-1 sm:gap-1.5 px-2 sm:px-3 pt-2 pb-2 sm:pb-2.5 rounded-2xl"
            >
                {navItems.slice(0, 6).map((item) => (
                    <DockIcon
                        key={item.name}
                        item={item}
                        isActive={pathname === item.href}
                        mouseX={mouseX}
                    />
                ))}

                {/* Separator */}
                <div className="w-px self-stretch mx-0.5 sm:mx-1 bg-white/10 rounded-full" />

                {/* Terminal */}
                <DockIcon
                    item={navItems[6]}
                    isActive={pathname === "/terminal"}
                    mouseX={mouseX}
                />
            </motion.nav>
        </div>
    );
}
