import AboutSection from "@/containers/about-section";
import HeroSection from "@/containers/hero-section";
import ProjectsSection from "@/containers/projects-section";
import ServicesSection from "@/containers/services-section";
import TestimonialsSection from "@/containers/testimonial-section";


export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
    </main>
  )
}
