import * as S from './styles'

export const Contact = () => {
    return (
        <S.Container>
            <S.Content>
                <S.Form>
                    <h2>Entre em contato</h2>
                    <p>
                        Esta landing page é ilustrativa e demonstra como seu
                        produto ou serviço pode captar leads de forma simples e
                        eficiente.
                    </p>
                    <span>
                        📞 <a href="tel: +5551999999999">(51) 99999-9999</a>
                    </span>
                </S.Form>
                <S.Form>
                    <input type="text" placeholder="Seu nome" />
                    <input type="email" placeholder="Seu melhor email" />
                    <button type="button">Quero minha landing page</button>
                </S.Form>
            </S.Content>
        </S.Container>
    )
}

export default Contact
