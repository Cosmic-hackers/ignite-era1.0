import Timeline from "@/components/about/Timeline";
import CardStack from "@/components/about/CardStack";

export default function AboutPage() {
    return (
        <main className="min-h-screen pt-24 pb-20 px-4">
            <section className="text-center mb-20">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 text-glow">Our Story</h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    How we started, where we are going, and why we do what we do.
                </p>
            </section>

            <section className="mb-32">
                <h2 className="text-3xl font-bold text-center mb-12">The Journey</h2>
                <Timeline />
            </section>

            <section className="mb-20">
                <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
                <CardStack />
            </section>
        </main>
    );
}
