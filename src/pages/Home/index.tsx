import { Header } from '../../components/Header'
import { Hero } from '../../components/Hero'

import Section from '../../sections/Services'
import CTA from '../../sections/CTA'
import { Footer } from '../../components/Footer'
import PaidTraffic from '../../sections/PaidTraffic'
import { Contact } from '../../sections/Contact'

export const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <Section />
            <PaidTraffic />
            <CTA />
            <Contact />
            <Footer />
        </>
    )
}

export default Home
