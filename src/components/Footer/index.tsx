import * as S from './styles'

export const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <S.Container>
            <S.Content>
                <S.Brand>
                    <strong>TráfegoQuality</strong>
                    <p>
                        Landing page focada em conversão, tráfego pago e
                        resultados reais.
                    </p>
                </S.Brand>
                <small>
                    Aviso: Este site é apenas ilustrativo. As informações,
                    marcas e serviços apresentados são exemplos de estrutura e
                    layout.
                </small>
                <span>
                    &copy; {year} TráfegoQuality. Todos os direitos reservados
                </span>
            </S.Content>
        </S.Container>
    )
}

export default Footer
