import { useEffect, useState } from 'react'

import { texts } from '../../i18n/Texts'

import { Header } from '../../components/Header'
import { Hero } from '../../components/Hero'
import Section from '../../sections/Services'
import CTA from '../../sections/CTA'
import { Footer } from '../../components/Footer'
import PaidTraffic from '../../sections/PaidTraffic'
import { Contact } from '../../sections/Contact'

export const Home = () => {
    const [lang, setLang] = useState<'pt' | 'en'>(
        () => (localStorage.getItem('lang') as 'pt' | 'en') || 'pt'
    )

    useEffect(() => {
        localStorage.setItem('lang', lang)
    }, [lang])

    const t = texts[lang]

    return (
        <>
            <Header lang={lang} setLang={setLang} />
            <Hero texts={t} />
            <Section texts={t} />
            <PaidTraffic texts={t} />
            <CTA texts={t} />
            <Contact texts={t} />
            <Footer texts={t} />
        </>
    )
}

export default Home
