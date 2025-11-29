import ContactForm from "@/components/contact/ContactForm";

export default function ContactPage() {
    return (
        <main className="min-h-screen pt-24 pb-20 px-4 flex items-center justify-center">
            <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left Side: Info */}
                <div className="space-y-8">
                    <h1 className="text-5xl font-bold text-glow">Get in Touch</h1>
                    <p className="text-gray-400 text-lg">
                        Have a question? Want to join the movement? Or just want to say hello? We are listening.
                    </p>

                    <div className="space-y-4">
                        <div className="glass-panel p-6 rounded-xl">
                            <h3 className="font-bold text-ignite-orange mb-1">Email</h3>
                            <p className="text-white">hello@igniteera.com</p>
                        </div>
                        <div className="glass-panel p-6 rounded-xl">
                            <h3 className="font-bold text-ignite-orange mb-1">Location</h3>
                            <p className="text-white">Global / Remote</p>
                        </div>
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="glass-panel p-8 rounded-2xl border-ignite-orange/20">
                    <ContactForm />
                </div>
            </div>
        </main>
    );
}
