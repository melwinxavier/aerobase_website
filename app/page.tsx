import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { NewsOverlay } from "@/components/NewsOverlay";
import { BentoGrid } from "@/components/BentoGrid";
import { EnhanceQoE } from "@/components/EnhanceQoE";
import { TestimonialReveal } from "@/components/TestimonialReveal";
import { Bufferbloat } from "@/components/Bufferbloat";
import { LogoStrip } from "@/components/LogoStrip";
import { MaximizeCapacity } from "@/components/MaximizeCapacity";
import { Analytics } from "@/components/Analytics";
import { Vision } from "@/components/Vision";
import { Announcements } from "@/components/Announcements";
import { Subscribe } from "@/components/Subscribe";
import { GlobalReach } from "@/components/GlobalReach";
import { Footer } from "@/components/Footer";
import { CookieConsent } from "@/components/CookieConsent";

export default function Home() {
  return (
    <main className="relative bg-ink">
      <Navbar />
      <Hero />
      <NewsOverlay />
      <BentoGrid />

      <EnhanceQoE />
      <TestimonialReveal
        quote="We thought we were doing all we could with our original QoE solution, but after installing Bequant next-gen QoE our customer support calls dropped by 35%."
        highlightWords={["customer", "support", "calls", "dropped", "by", "35%."]}
        name="CHADD GILES"
        role="CTO"
        company="RESOUND NETWORKS"
        country="USA"
      />
      <Bufferbloat />
      <TestimonialReveal
        quote="We already had a solid QoE solution in place, but decided to take Bequant up on their 30-day trial — and we're glad we did! Our network latency dropped from 30 ms to 15 ms, and retransmissions fell by 80%. Bequant's team truly goes above and beyond!"
        highlightWords={["latency", "dropped", "from", "30", "ms", "to", "15", "retransmissions", "fell", "80%."]}
        name="CASSIDY LARSON"
        role="CTO"
        company="INFOWEST"
        country="USA"
      />
      <LogoStrip />

      <MaximizeCapacity />

      <Analytics />
      <TestimonialReveal
        quote="The DPI and network visibility from Bequant allow us to see what is happening in our network in real-time. Our customer support can diagnose everyday problems with it, and it also helps us detecting those areas of the network where we are approaching congestion."
        highlightWords={["real-time.", "diagnose", "everyday", "problems"]}
        name="VICTOR DE LA NUEZ"
        role="CEO"
        company="WIFI CANARIAS"
        country="SPAIN"
      />

      <Vision />
      <Announcements />
      <Subscribe />
      <GlobalReach />
      <Footer />

      <CookieConsent />
    </main>
  );
}
