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
                    Este site é um projeto demonstrativo. Os contatos direcionam
                    diretamente ao desenvolvedor.
                </small>
                <span>
                    &copy; {year} TráfegoQuality. Todos os direitos reservados
                </span>
            </S.Content>
        </S.Container>
    )
}

export default Footer
