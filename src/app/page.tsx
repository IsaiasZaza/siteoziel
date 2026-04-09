import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Location } from "@/components/Location";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen w-full min-w-0 bg-[#151210]">
      <Header />
      <main className="w-full min-w-0">
        <Hero />
        <div className="border-y border-white/[0.06] bg-[#1a1612]/55">
          <Services />
        </div>
        <About />
        <div className="bg-[#1a1612]/40">
          <Testimonials />
        </div>
        <Contact />
        <Location />
      </main>
      <Footer />
    </div>
  );
}
