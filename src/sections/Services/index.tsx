import type { TextsType } from '../../i18n/Texts'
import * as S from './styles'

type Props = {
    texts: TextsType
}
export const Section = ({ texts }: Props) => {
    return (
        <S.Section>
            <S.Container>
                <S.Header>
                    <h2>{texts.servicesTitle}</h2>
                    <p>{texts.servicesSubtitle}</p>
                </S.Header>
                <S.CardList>
                    <S.CardItem>
                        <h3>{texts.service1Title}</h3>
                        <p>{texts.service1Text}</p>
                    </S.CardItem>
                    <S.CardItem>
                        <h3>{texts.service2Title}</h3>
                        <p>{texts.service2Text}</p>
                    </S.CardItem>
                    <S.CardItem>
                        <h3>{texts.service3Title}</h3>
                        <p>{texts.service3Text}</p>
                    </S.CardItem>
                    <S.CardItem>
                        <h3>{texts.service4Title}</h3>
                        <p>{texts.service4Text}</p>
                    </S.CardItem>
                </S.CardList>
            </S.Container>
        </S.Section>
    )
}

export default Section
