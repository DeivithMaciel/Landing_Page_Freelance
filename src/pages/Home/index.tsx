import { useState } from 'react'

import { texts } from '../../i18n/Texts'

import { Header } from '../../components/Header'
import { Hero } from '../../components/Hero'

import Section from '../../sections/Services'
import CTA from '../../sections/CTA'
import { Footer } from '../../components/Footer'
import PaidTraffic from '../../sections/PaidTraffic'
import { Contact } from '../../sections/Contact'

export const Home = () => {
    const [lang, setLang] = useState<'pt' | 'en'>('en')
    return (
        <>
            <Header lang={lang} setLang={setLang} />
            <Hero texts={texts[lang]} />
            <Section texts={texts[lang]} />
            <PaidTraffic texts={texts[lang]} />
            <CTA texts={texts[lang]} />
            <Contact texts={texts[lang]} />
            <Footer texts={texts[lang]} />
        </>
    )
}

export default Home
