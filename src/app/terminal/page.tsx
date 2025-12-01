"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

interface CommandHistory {
    command: string;
    output: React.ReactNode;
}

const FILES = {
    "about.txt": "IgniteEra is a revolutionary platform breaking the chains of traditional education.",
    "services.log": "Checking system services...\n[OK] Core Systems\n[OK] Neural Interface\n[OK] Knowledge Database\n[OK] Holo-Projection",
    "contact.info": "Email: contact@igniteera.com\nTwitter: @IgniteEra\nLocation: Decentralized Web",
    "roadmap.md": "- Phase 1: Foundation (Complete)\n- Phase 2: Expansion (In Progress)\n- Phase 3: Global Domination (Pending)"
};

export default function TerminalPage() {
    const [input, setInput] = useState("");
    const [history, setHistory] = useState<CommandHistory[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);
    const bottomRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    // Auto-focus input
    "use client";

    import { useState, useEffect, useRef } from "react";
    import { useRouter } from "next/navigation";

    interface CommandHistory {
        command: string;
        output: React.ReactNode;
    }

    const FILES = {
        "about.txt": "IgniteEra is a revolutionary platform breaking the chains of traditional education.",
        "services.log": "Checking system services...\n[OK] Core Systems\n[OK] Neural Interface\n[OK] Knowledge Database\n[OK] Holo-Projection",
        "contact.info": "Email: contact@igniteera.com\nTwitter: @IgniteEra\nLocation: Decentralized Web",
        "roadmap.md": "- Phase 1: Foundation (Complete)\n- Phase 2: Expansion (In Progress)\n- Phase 3: Global Domination (Pending)"
    };

    export default function TerminalPage() {
        const [input, setInput] = useState("");
        const [history, setHistory] = useState<CommandHistory[]>([]);
        const inputRef = useRef<HTMLInputElement>(null);
        const bottomRef = useRef<HTMLDivElement>(null);
        const router = useRouter();

        // Auto-focus input
        useEffect(() => {
            const handleClick = () => inputRef.current?.focus();
            window.addEventListener("click", handleClick);
            return () => window.removeEventListener("click", handleClick);
        }, []);

        const handleCommand = (cmd: string) => {
            const trimmedCmd = cmd.trim(); // Case sensitive for Zsh feel, but we can keep it flexible if needed
            const args = trimmedCmd.split(" ");
            const mainCmd = args[0].toLowerCase();
            let output: React.ReactNode = "";

            switch (mainCmd) {
                case "help":
                    output = (
                        <div className="space-y-1 text-gray-300">
                            <p>zsh: command not found. Available commands:</p>
                            <p className="pl-4"><span className="text-yellow-400">help</span>     - Show this help message</p>
                            <p className="pl-4"><span className="text-yellow-400">ls</span>       - List directory contents</p>
                            <p className="pl-4"><span className="text-yellow-400">cat</span>      - Read file content</p>
                            <p className="pl-4"><span className="text-yellow-400">services</span> - Check system status</p>
                            <p className="pl-4"><span className="text-yellow-400">whoami</span>   - Display current user</p>
                            <p className="pl-4"><span className="text-yellow-400">clear</span>    - Clear terminal screen</p>
                            <p className="pl-4"><span className="text-yellow-400">exit</span>     - Return to main site</p>
                        </div>
                    );
                    break;
                case "ls":
                    output = (
                        <div className="grid grid-cols-4 gap-4 max-w-2xl text-gray-300">
                            {Object.keys(FILES).map(file => (
                                <span key={file} className={file.endsWith(".txt") || file.endsWith(".md") ? "text-white" : "text-blue-400 font-bold"}>
                                    {file}
                                </span>
                            ))}
                        </div>
                    );
                    break;
                case "cat":
                    if (args[1]) {
                        const fileName = args[1] as keyof typeof FILES;
                        if (FILES[fileName]) {
                            output = <p className="whitespace-pre-wrap text-gray-300">{FILES[fileName]}</p>;
                        } else {
                            output = <p className="text-red-400">cat: {args[1]}: No such file or directory</p>;
                        }
                    } else {
                        output = <p className="text-gray-400">usage: cat [filename]</p>;
                    }
                    break;
                case "services":
                case "status":
                    output = (
                        <div className="space-y-1 text-gray-300">
                            <p>Checking system services...</p>
                            <p>[<span className="text-green-500">OK</span>] Next.js Core Engine</p>
                            <p>[<span className="text-green-500">OK</span>] React Rendering Module</p>
                            <p>[<span className="text-green-500">OK</span>] TailwindCSS Styling</p>
                            <p>[<span className="text-green-500">OK</span>] GSAP Animation Engine</p>
                            <p>[<span className="text-yellow-500">WARN</span>] AI Consciousness (Restricted)</p>
                        </div>
                    );
                    break;
                case "whoami":
                    output = "siddu";
                    break;
                case "clear":
                    setHistory([]);
                    return;
                case "exit":
                    output = "saving session... exiting...";
                    setTimeout(() => router.push("/"), 1000);
                    break;
                case "":
                    output = "";
                    break;
                default:
                    output = <p className="text-red-400">zsh: command not found: {mainCmd}</p>;
            }

            setHistory(prev => [...prev, { command: cmd, output }]);
        };

        const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Enter") {
                handleCommand(input);
                setInput("");
            }
        };

        return (
            <main className="min-h-screen bg-gray-900 flex items-center justify-center p-4 font-mono">
                <div className="w-full max-w-4xl h-[600px] bg-[#1e1e1e] rounded-xl shadow-2xl overflow-hidden flex flex-col border border-gray-800">
                    {/* macOS Title Bar */}
                    <div className="h-8 bg-[#2d2d2d] flex items-center px-4 gap-2 border-b border-black/50">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-[#ff5f56] hover:bg-[#ff5f56]/80 transition-colors" />
                            <div className="w-3 h-3 rounded-full bg-[#ffbd2e] hover:bg-[#ffbd2e]/80 transition-colors" />
                            <div className="w-3 h-3 rounded-full bg-[#27c93f] hover:bg-[#27c93f]/80 transition-colors" />
                        </div>
                        <div className="flex-1 text-center text-gray-400 text-xs font-medium">
                            siddu — -zsh — 80x24
                        </div>
                    </div>

                    {/* Terminal Content */}
                    <div className="flex-1 p-4 overflow-y-auto text-sm md:text-base font-medium font-mono custom-scrollbar bg-[#1e1e1e] text-gray-200">
                        <div className="mb-2 text-gray-400">Last login: {new Date().toDateString()} on ttys000</div>

                        {/* History */}
                        <div className="space-y-1">
                            {history.map((entry, i) => (
                                <div key={i}>
                                    <div className="flex gap-2">
                                        <span className="text-green-400">siddu@IgniteEra-MacBook-Pro</span>
                                        <span className="text-blue-400">~ %</span>
                                        <span className="text-gray-200">{entry.command}</span>
                                    </div>
                                    {entry.output && (
                                        <div className="mt-1 mb-2">
                                            {entry.output}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Input Line */}
                        <div className="flex gap-2 items-center mt-1" ref={bottomRef}>
                            <span className="text-green-400">siddu@IgniteEra-MacBook-Pro</span>
                            <span className="text-blue-400">~ %</span>
                            <input
                                ref={inputRef}
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleKeyDown}
                                className="bg-transparent border-none outline-none text-gray-200 flex-1 caret-gray-400"
                                autoFocus
                                spellCheck={false}
                                autoComplete="off"
                            />
                        </div>
                    </div>
                </div>
            </main>
        );
    }
