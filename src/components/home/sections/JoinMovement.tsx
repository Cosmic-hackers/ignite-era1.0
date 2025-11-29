"use client";

import { motion } from "framer-motion";
import { User, Users, Hammer, Heart } from "lucide-react";

const roles = [
    { title: "Parent", icon: User },
    { title: "Mentor", icon: Users },
    { title: "Builder", icon: Hammer },
    { title: "Supporter", icon: Heart },
];

export default function JoinMovement() {
    return (
        <section className="py-32 px-4 text-center">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    IgniteEra is not a school. <br />
                    <span className="text-ignite-orange">It’s a movement.</span>
                </h2>
                <p className="text-xl text-gray-400 mb-16">
                    Be part of redefining education and human potential.
                </p>

                {/* Dock Style Container */}
                <div className="inline-flex items-end gap-4 p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl mb-12">
                    {roles.map((role, index) => {
                        const Icon = role.icon;
                        return (
                            <motion.button
                                key={index}
                                whileHover={{ scale: 1.2, y: -10 }}
                                className="group relative flex flex-col items-center justify-center w-20 h-20 rounded-2xl bg-white/5 hover:bg-ignite-orange/20 border border-white/5 hover:border-ignite-orange/50 transition-colors"
                            >
                                <Icon className="w-8 h-8 text-white group-hover:text-ignite-orange transition-colors" />
                                <span className="absolute -bottom-8 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                    Join as {role.title}
                                </span>
                            </motion.button>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
