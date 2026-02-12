export const texts = {
    pt: {
        heroTitle: 'Landing pages que convertem',
        heroSubtitle:
            'Criação de landing pages focadas em conversão para anúncios pagos.',
        cta: 'Quero minha landing page',

        heroTagline: 'Landing Page ° Pronta para conversão ° WhatsApp',

        demoNotice:
            'Este site é um projeto demonstrativo. Os contatos direcionam diretamente ao desenvolvedor.',
    },

    en: {
        heroTitle: 'High-conversion landing pages',
        heroSubtitle:
            'Landing pages designed to convert traffic from paid ads.',
        cta: 'Get my landing page',

        heroTagline: 'Landing Page ° Conversion Ready ° WhatsApp',

        demoNotice:
            'This website is a demo project. All contacts go directly to the developer.',
    },
} as const

export type TextsType = typeof texts.pt
