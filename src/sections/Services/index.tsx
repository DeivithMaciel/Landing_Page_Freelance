import * as S from './styles'

export const Section = () => {
    return (
        <S.Section>
            <S.Container>
                <S.Header>
                    <h2>Landing pages prontas para conversão</h2>
                    <p>
                        Estruturas simples, bem configuradas e pensadas para
                        gerar leads reais.
                    </p>
                </S.Header>
                <S.CardList>
                    <S.CardItem>
                        <h3>Estrutura focada em leads</h3>
                        <p>
                            Layout pensado para guiar o visitante até a ação
                            principal, sem distrações.
                        </p>
                    </S.CardItem>
                    <S.CardItem>
                        <h3>Chamadas para ação claras</h3>
                        <p>Landing pages prontas para conversão.</p>
                    </S.CardItem>
                    <S.CardItem>
                        <h3>WhatsApp, email e formulário</h3>
                        <p>
                            Contato direto funcionanado, pronto para receber
                            mensagens e leads reais.
                        </p>
                    </S.CardItem>
                    <S.CardItem>
                        <h3>Preparada para tráfego pago</h3>
                        <p>
                            Página otimizada para receber anúncios do Google ou
                            redes sociais.
                        </p>
                    </S.CardItem>
                </S.CardList>
            </S.Container>
        </S.Section>
    )
}

export default Section
