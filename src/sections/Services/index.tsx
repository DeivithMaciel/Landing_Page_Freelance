import * as S from './styles'

export const Section = () => {
    return (
        <S.Section>
            <S.Container>
                <S.Header>
                    <h2>Tráfego pago com foco em conversão</h2>
                    <p>
                        Estruturas simples, bem configuradas e pensadas para
                        gerar leads reais.
                    </p>
                </S.Header>
                <S.CardList>
                    <S.CardItem>
                        <h3>Meta ads</h3>
                        <p>Criação de campanhas no Facebook e Instagram.</p>
                    </S.CardItem>
                    <S.CardItem>
                        <h3>Pixel e eventos</h3>
                        <p>
                            Configuração correta de pixel e eventos para
                            acompanhar resultados reais.
                        </p>
                    </S.CardItem>
                    <S.CardItem>
                        <h3>Lading Page</h3>
                        <p>
                            Página simples e objetiva, pensada para conversão e
                            tráfego pago.
                        </p>
                    </S.CardItem>
                    <S.CardItem>
                        <h3>WhatsApp</h3>
                        <p>
                            Integração direta com WhatsApp para facilitar o
                            contado com leads.
                        </p>
                    </S.CardItem>
                </S.CardList>
            </S.Container>
        </S.Section>
    )
}

export default Section
