import KnowledgeGrid from "@/components/knowledge/KnowledgeGrid";

export default function KnowledgeHubPage() {
    return (
        <main className="min-h-screen pt-24 pb-20 px-4 max-w-7xl mx-auto">
            <section className="text-center mb-16">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 text-glow">Knowledge Hub</h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    A curated database of resources to fuel your journey.
                </p>
            </section>

            <KnowledgeGrid />
        </main>
    );
}
