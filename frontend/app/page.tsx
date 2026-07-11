import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import UploadCard from "@/components/UploadCard";
import Footer from "@/components/Footer";
import Features from "@/components/Features";
import About from "@/components/About";

export default function Home() {
  return (
    <main
      className="min-h-screen bg-gradient-to-br
from-slate-50
via-white
to-cyan-50"
    >
      <Navbar />

      <Hero />

      <section id="upload" className="mx-auto max-w-7xl px-6 pb-24">
        <UploadCard />
      </section>
      <Features />
      <About />
      <Footer />
    </main>
  );
}
