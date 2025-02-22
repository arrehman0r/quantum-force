import Hero from "@layouts/partials/Hero"
import Services from "@layouts/partials/Services"
import Contact from "@layouts/Contact" 
import FAQs from "@layouts/FAQs"
import Features from "@layouts/partials/Features"
import WhyChooseUs from "@layouts/partials/WhyChooseUs"
import SeoMeta from "@layouts/partials/SeoMeta"
import TechExpertise from "@layouts/partials/TechExpertise"

const Home = () => {

    return (

        <main className="min-h-screen bg-[#111111] relative overflow-hidden">
            <SeoMeta title="Quantum Force | Home" />
            <Hero />
            <Services />
            <Features />
            <WhyChooseUs />
            <TechExpertise/>
            <FAQs />
            <Contact />
        </main>

    )
}

export default Home 