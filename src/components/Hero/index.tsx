import { type TextsType } from '../../i18n/Texts'

import * as S from './styles'

type Props = {
    texts: TextsType
}

export const Hero = ({ texts }: Props) => {
    return (
        <S.Container>
            <S.Content>
                <S.TextBox>
                    <h1>{texts.heroTitle}</h1>
                    <p>{texts.heroSubtitle}</p>
                    <a href="https://wa.me/5551981458704">
                        <button>{texts.cta}</button>
                    </a>
                    <span>{texts.heroTagline}</span>
                </S.TextBox>
                <S.BackgroundImage>{/* add later */}</S.BackgroundImage>
            </S.Content>
            <small>{texts.demoNotice}</small>
        </S.Container>
    )
}
