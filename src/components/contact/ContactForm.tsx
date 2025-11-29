"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!res.ok) throw new Error("Failed to submit");

            setStatus("success");
            setFormData({ name: "", email: "", message: "" });
            setTimeout(() => setStatus("idle"), 3000);
        } catch (error) {
            console.error(error);
            setStatus("error");
            setTimeout(() => setStatus("idle"), 3000);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
            <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-300">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-ignite-orange focus:ring-1 focus:ring-ignite-orange transition-all"
                    placeholder="John Doe"
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-300">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-ignite-orange focus:ring-1 focus:ring-ignite-orange transition-all"
                    placeholder="john@example.com"
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">
                    Message
                </label>
                <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-ignite-orange focus:ring-1 focus:ring-ignite-orange transition-all resize-none"
                    placeholder="Your message..."
                />
            </div>

            <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="relative w-full overflow-hidden group bg-ignite-orange text-black font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-all hover:bg-orange-500 disabled:opacity-70 disabled:cursor-not-allowed"
            >
                {/* Ripple Effect Container */}
                <div className="absolute inset-0 w-full h-full bg-white/20 scale-0 group-active:scale-100 transition-transform duration-300 rounded-lg origin-center" />

                {status === "loading" ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                ) : status === "success" ? (
                    <span>Message Sent!</span>
                ) : (
                    <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                )}
            </button>

            {status === "error" && (
                <p className="text-red-500 text-sm text-center">Something went wrong. Please try again.</p>
            )}
        </form>
    );
}
