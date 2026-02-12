export const texts = {
    pt: {
        // HERO
        heroTitle: 'Landing pages que convertem',
        heroSubtitle:
            'Criação de landing pages focadas em conversão para anúncios pagos.',
        cta: 'Quero minha landing page',
        heroTagline: 'Landing Page ° Pronta para conversão ° WhatsApp',

        // SERVICES
        servicesTitle: 'Landing pages prontas para conversão',
        servicesSubtitle:
            'Estruturas simples, bem configuradas e pensadas para gerar leads reais.',

        service1Title: 'Estrutura focada em leads',
        service1Text:
            'Layout pensado para guiar o visitante até a ação principal, sem distrações.',

        service2Title: 'Chamadas para ação claras',
        service2Text:
            'Landing pages prontas para conversão. Botões faceis de achar',

        service3Title: 'WhatsApp/Line, email e formulário',
        service3Text:
            'Contato direto funcionando, pronto para receber mensagens e leads reais.',

        service4Title: 'Preparada para tráfego pago',
        service4Text:
            'Página otimizada para receber anúncios do Google ou redes sociais.',

        // PAID TRAFFIC
        paidTitle: 'Landing page preparada para tráfego pago',
        paidText:
            'Desenvolvo landing pages pensadas para receber tráfego pago, com estrutura clara, chamadas para ação bem posicionadas e foco total em conversão.',

        paidList1: 'Estrutura focada em geração de leads',
        paidList2: 'CTA estratégico (WhatsApp e formulários)',
        paidList3: 'Página rápida e responsiva',
        paidList4: 'Organização visual pensada em conversão',
        paidList5: 'Pronta para integração com anúncios',

        paidNote:
            '*Não gerencio campanhas ou anúncios. A landing page é entregue pronta para uso em tráfego pago.',

        // CTA
        ctaTitle: 'Pronto para começar?',
        ctaSubtitle:
            'Crio sua Landing Page para receber seu tráfego pago e começar a gerar leads.',
        ctaButton: 'Falar no WhatsApp',

        // CONTACT
        contactTitle: 'Entre em contato',
        contactSubtitle:
            'Esta landing page é ilustrativa e demonstra como seu produto ou serviço pode captar leads de forma simples.',
        contactName: 'Seu nome',
        contactEmail: 'Seu melhor email',
        contactMessage: 'Sua mensagem',
        contactButton: 'Quero minha landing page',
        ContactLoading: 'Enviando...',
        toastMessage: 'Mensagem enviada com sucesso!',

        // FOOTER
        footerTitle: 'TráfegoQuality',
        footerText:
            'Landing page focada em conversão, tráfego pago e resultados reais.',
        demoNotice:
            'Este site é um projeto demonstrativo. Os contatos direcionam diretamente ao desenvolvedor.',
    },

    en: {
        // HERO
        heroTitle: 'High-conversion landing pages',
        heroSubtitle:
            'Landing pages designed to convert traffic from paid ads.',
        cta: 'Get my landing page',
        heroTagline: 'Landing Page ° Conversion Ready ° WhatsApp',

        // SERVICES
        servicesTitle: 'Conversion-ready landing pages',
        servicesSubtitle:
            'Simple, well-structured layouts designed to generate real leads.',

        service1Title: 'Lead-focused structure',
        service1Text:
            'Layout designed to guide visitors to the main action without distractions.',

        service2Title: 'Clear calls to action',
        service2Text: 'Landing pages ready to convert. Easy-to-find button(s)',

        service3Title: 'WhatsApp/Line, email & forms',
        service3Text:
            'Direct contact channels ready to receive real messages and leads.',

        service4Title: 'Built for paid traffic',
        service4Text:
            'Optimized to receive ads from Google or social networks.',

        // PAID TRAFFIC
        paidTitle: 'Landing page built for paid traffic',
        paidText:
            'I develop landing pages designed to receive paid traffic, with clear structure, well-positioned calls to action, and total focus on conversion.',

        paidList1: 'Lead generation focused structure',
        paidList2: 'Strategic CTA (WhatsApp & forms)',
        paidList3: 'Fast and responsive page',
        paidList4: 'Conversion-oriented visual organization',
        paidList5: 'Ready for ad integrations',

        paidNote:
            '*I do not manage campaigns or ads. The landing page is delivered ready for paid traffic use.',

        // CTA
        ctaTitle: 'Ready to start?',
        ctaSubtitle:
            'I build your landing page to receive paid traffic and generate leads.',
        ctaButton: 'Chat on WhatsApp',

        // CONTACT
        contactTitle: 'Get in touch',
        contactSubtitle:
            'This landing page is illustrative and shows how your product or service can capture leads simply.',
        contactName: 'Your name',
        contactEmail: 'Your best email',
        contactMessage: 'Your message',
        contactButton: 'Get my landing page',
        ContactLoading: 'sending...',
        toastMessage: 'Message sent successfully!',

        // FOOTER
        footerText:
            'Landing page focused on conversion, paid traffic and real results.',
        demoNotice:
            'This website is a demo project. All contacts go directly to the developer.',
    },
} as const

export type TextsType = typeof texts.pt
