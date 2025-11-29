"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

const steps = [
    {
        id: 1,
        title: "Apply",
        description: "Submit your application. Tell us your story, not your grades.",
    },
    {
        id: 2,
        title: "Interview",
        description: "A conversation to see if you have the fire.",
    },
    {
        id: 3,
        title: "Onboarding",
        description: "Welcome to the ecosystem. Get access to tools and mentors.",
    },
    {
        id: 4,
        title: "Ignite",
        description: "Start building real projects. Make an impact.",
    },
];

export default function InvolvedPage() {
    return (
        <main className="min-h-screen pt-24 pb-20 px-4 max-w-6xl mx-auto">
            <section className="text-center mb-20">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 text-glow">Get Involved</h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    Join the revolution. We are looking for the crazy ones.
                </p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                {/* Steps */}
                <div className="space-y-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="flex gap-6 items-start group"
                        >
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-ignite-orange font-bold text-xl group-hover:bg-ignite-orange group-hover:text-black transition-colors duration-300">
                                {step.id}
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                                <p className="text-gray-400">{step.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="glass-panel p-10 rounded-3xl text-center border-ignite-orange/30 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-ignite-orange/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                    <h2 className="text-3xl font-bold mb-6 relative z-10">Ready to start?</h2>
                    <p className="text-gray-300 mb-8 relative z-10">
                        Applications are open for the next cohort. Don't miss your chance.
                    </p>

                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-ignite-orange text-black font-bold rounded-full hover:bg-white hover:text-black transition-colors relative z-10"
                    >
                        Apply Now <ArrowRight className="w-5 h-5" />
                    </Link>
                </motion.div>
            </div>
        </main>
    );
}
