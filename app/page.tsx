import AboutSection from "@/containers/about-section";
import HeroSection from "@/containers/hero-section";
import ServicesSection from "@/containers/services-section";


export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
    </main>
  )
}
