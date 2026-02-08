import * as S from './styles'

export const Hero = () => {
    return (
        <S.Container>
            <S.Content>
                <S.TextBox>
                    <h1>Landing pages focadas em conversão e performance</h1>
                    <p>
                        Estruturas simples, rápidas e preparadas para tráfego
                        pago, WhatsApp e formulários.
                    </p>
                    <a href="https://wa.me/5551981458704">
                        <button>Solicitar minha landing page</button>
                    </a>
                    <span>Landing Page ° Pronta para conversão ° WhatsApp</span>
                </S.TextBox>
                <S.BackgroundImage>
                    {/* adicionar futuramente */}
                </S.BackgroundImage>
            </S.Content>
            <small>
                Este site é um projeto demonstrativo. Os contatos direcionam
                diretamente ao desenvolvedor.
            </small>
        </S.Container>
    )
}
