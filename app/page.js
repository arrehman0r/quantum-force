import Hero from "@layouts/partials/Hero"
import Services from "@layouts/partials/Services"
import Contact from "@layouts/Contact" 
import FAQs from "@layouts/FAQs"
import Features from "@layouts/partials/Features"
import WhyChooseUs from "@layouts/partials/WhyChooseUs"
import SeoMeta from "@layouts/partials/SeoMeta"

const Home = () => {

    return (

        <>
            <SeoMeta title="Quantum Force | Home" />
            <Hero />
            <Services />
            <Features />
            <WhyChooseUs />
            <FAQs />
            <Contact />
        </>

    )
}

export default Home 