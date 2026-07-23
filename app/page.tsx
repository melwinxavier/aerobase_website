import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { BentoGrid } from "@/components/BentoGrid";
import { WhatWeDo } from "@/components/WhatWeDo";
import { TestimonialReveal } from "@/components/TestimonialReveal";
import { SafeLight } from "@/components/SafeLight";
import { TrustStrip } from "@/components/TrustStrip";
import { HowWeWork } from "@/components/HowWeWork";
import { Phases } from "@/components/Phases";
import { Vision } from "@/components/Vision";
import { Announcements } from "@/components/Announcements";
import { Subscribe } from "@/components/Subscribe";
import { ResearchCTA } from "@/components/ResearchCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-ink">
      <Navbar />
      <Hero />
      <BentoGrid />

      <WhatWeDo />
      <TestimonialReveal
        quote="Data accelerated research is hastening the model development process. Industry all over stands to gain from this if ever the tools are utilized imaginatively."
        highlightWords={["Data", "accelerated", "research", "hastening", "the", "model", "development", "process."]}
        name="BIJISH BABU"
        role="FOUNDER & CEO"
        company="AEROBASE"
        country="SWEDEN"
      />
      <SafeLight />
      <TestimonialReveal
        quote="Where most tools guess a material's behavior from a dataset, we compute it from thermodynamics and validate it against measured data. Computed and measured, not assumed."
        highlightWords={["compute", "it", "from", "thermodynamics", "Computed", "and", "measured,", "not", "assumed."]}
        name="DANIEL BERGLUND"
        role="CTO"
        company="AEROBASE"
        country="SWEDEN"
      />
      <TrustStrip />

      <HowWeWork />

      <Phases />
      <TestimonialReveal
        quote="Every model is calibrated against physical tests run at partner facilities — RISE, Swerim and LTU. The behavior is characterized, not assumed."
        highlightWords={["calibrated", "against", "physical", "tests", "characterized,", "not", "assumed."]}
        name="HENRIK TERSING"
        role="SIMULATION TECHNOLOGY SPECIALIST"
        company="AEROBASE"
        country="SWEDEN"
      />

      <Vision />
      <Announcements />
      <Subscribe />
      <ResearchCTA />
      <Footer />
    </main>
  );
}
