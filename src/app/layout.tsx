import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import PageWrapper from "@/components/layout/PageWrapper";
import Preloader from "@/components/layout/Preloader";

export const metadata: Metadata = {
  title: "IgniteEra | Breaking the Chains of Education",
  description: "Igniting the Era of Real Talent. A premium, futuristic platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-black text-white overflow-x-hidden selection:bg-ignite-orange selection:text-white">
        <Preloader />
        <CustomCursor />
        <NavBar />
        <PageWrapper>{children}</PageWrapper>
        <Footer />
      </body>
    </html>
  );
}
