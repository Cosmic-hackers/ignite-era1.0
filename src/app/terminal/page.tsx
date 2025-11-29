export default function TerminalPage() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-black font-mono">
            <div className="w-full max-w-3xl p-8 border border-green-500/30 rounded-lg bg-black/90 shadow-[0_0_50px_rgba(0,255,0,0.1)]">
                <div className="flex gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="space-y-2 text-green-500">
                    <p>IgniteEra OS [Version 1.0.0]</p>
                    <p>(c) 2025 IgniteEra Corporation. All rights reserved.</p>
                    <br />
                    <p className="animate-pulse">_ Accessing restricted mainframe...</p>
                    <p>_ Loading modules...</p>
                    <p>_ System ready.</p>
                    <br />
                    <div className="flex gap-2">
                        <span>user@igniteera:~$</span>
                        <span className="w-2 h-5 bg-green-500 animate-blink" />
                    </div>
                </div>
            </div>
        </main>
    );
}
