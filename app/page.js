import Hero from "@layouts/partials/Hero"
import Services from "@layouts/partials/Services"
import Contact from "./contact/page"
import FAQs from "@layouts/FAQs"
import Features from "@layouts/partials/Features"
import WhyChooseUs from "@layouts/partials/WhyChooseUs"

const Home = () => {

    return (

        <>
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