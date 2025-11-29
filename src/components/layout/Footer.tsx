import Link from "next/link";
import { Flame, Twitter, Instagram, Github } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative bg-black pt-20 pb-10 border-t border-white/5 overflow-hidden">
            {/* Glow Effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-1 bg-gradient-to-r from-transparent via-ignite-orange to-transparent opacity-50 blur-sm" />

            <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
                {/* Logo */}
                <div className="mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-ignite-orange to-red-600 flex items-center justify-center transform rotate-45 mb-4 mx-auto animate-slow-spin">
                        <Flame className="w-8 h-8 text-white transform -rotate-45" />
                    </div>
                    <h2 className="text-2xl font-bold tracking-tighter">IgniteEra</h2>
                </div>

                {/* Links */}
                <nav className="flex flex-wrap justify-center gap-8 mb-12 text-sm font-medium text-gray-400">
                    <Link href="/" className="hover:text-ignite-orange transition-colors">Home</Link>
                    <Link href="/about" className="hover:text-ignite-orange transition-colors">About</Link>
                    <Link href="/knowledge-hub" className="hover:text-ignite-orange transition-colors">Knowledge Hub</Link>
                    <Link href="/involved" className="hover:text-ignite-orange transition-colors">Involved</Link>
                    <Link href="/roadmap" className="hover:text-ignite-orange transition-colors">Roadmap</Link>
                    <Link href="/contact" className="hover:text-ignite-orange transition-colors">Contact</Link>
                </nav>

                {/* Socials */}
                <div className="flex gap-6 mb-12">
                    <a href="#" className="text-gray-500 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
                    <a href="#" className="text-gray-500 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
                    <a href="#" className="text-gray-500 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
                </div>

                <p className="text-xs text-gray-600">
                    © {new Date().getFullYear()} IgniteEra. Breaking the Chains of Education.
                </p>
            </div>
        </footer>
    );
}
