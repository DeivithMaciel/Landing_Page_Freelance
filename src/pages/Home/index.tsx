import { Header } from '../../components/Header'
import { Hero } from '../../components/Hero'

import Section from '../../sections/Services'
import CTA from '../../sections/CTA'
import { Footer } from '../../components/Footer'
import PaidTraffic from '../../sections/PaidTraffic'

export const Home = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Section />
            <PaidTraffic />
            <CTA />
            <Footer />
        </div>
    )
}

export default Home
