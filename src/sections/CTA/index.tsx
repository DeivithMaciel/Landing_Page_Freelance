import type { TextsType } from '../../i18n/Texts'

import * as S from './styles'

type Props = {
    texts: TextsType
}

export const CTA = ({ texts }: Props) => {
    return (
        <S.Section>
            <S.Container>
                <h2>{texts.ctaTitle}</h2>
                <p>{texts.ctaSubtitle}</p>
                <a href="https://wa.me/5551981458704">{texts.ctaButton}</a>
            </S.Container>
        </S.Section>
    )
}

export default CTA
