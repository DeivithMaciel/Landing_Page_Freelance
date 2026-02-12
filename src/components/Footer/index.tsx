import type { TextsType } from '../../i18n/Texts'

import * as S from './styles'

type Props = {
    texts: TextsType
}

export const Footer = ({ texts }: Props) => {
    const year = new Date().getFullYear()

    return (
        <S.Container>
            <S.Content>
                <S.Brand>
                    <strong>TrafficQuality</strong>
                    <p>{texts.footerText}</p>
                </S.Brand>
                <small>{texts.demoNotice}</small>
                <span>&copy; {year} TrafficQuality. All rights reserved.</span>
            </S.Content>
        </S.Container>
    )
}

export default Footer
