import * as S from './styles'

export const Hero = () => {
    return (
        <S.Container>
            <S.Content>
                <S.TextBox>
                    <h1>Tráfego pago com foco em conversão</h1>
                    <p>
                        Criamos landing pages e campanhas no Meta e TikTok Ads
                        para transformar cliques em leads e vendas.
                    </p>
                    <button>Quero gerar mais leads</button>
                    <span>Landing Page ° Meta ads ° TikTok Ads ° WhatsApp</span>
                </S.TextBox>
                <S.BackgroundImage>
                    {/* adicionar futuramente */}
                </S.BackgroundImage>
            </S.Content>
        </S.Container>
    )
}
