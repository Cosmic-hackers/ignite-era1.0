import Hero from "@/components/home/Hero";
import WhyIgniteEra from "@/components/home/sections/WhyIgniteEra";
import TheProblem from "@/components/home/sections/TheProblem";
import WhatWeAreBuilding from "@/components/home/sections/WhatWeAreBuilding";
import ExperienceModel from "@/components/home/sections/ExperienceModel";
import KnowledgePreview from "@/components/home/sections/KnowledgePreview";
import JoinMovement from "@/components/home/sections/JoinMovement";
import Manifesto from "@/components/home/sections/Manifesto";
import RoadmapPreview from "@/components/home/sections/RoadmapPreview";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-black overflow-hidden">
      <Hero />
      <WhyIgniteEra />
      <TheProblem />
      <WhatWeAreBuilding />
      <ExperienceModel />
      <KnowledgePreview />
      <JoinMovement />
      <Manifesto />
      <RoadmapPreview />
    </main>
  );
}
