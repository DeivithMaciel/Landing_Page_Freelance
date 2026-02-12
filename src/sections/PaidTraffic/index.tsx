import type { TextsType } from '../../i18n/Texts'

import * as S from './styles'

type Props = {
    texts: TextsType
}

export const PaidTraffic = ({ texts }: Props) => {
    return (
        <S.Container>
            <S.Content>
                <S.VisualBox>
                    <h2>{texts.paidTitle}</h2>
                    <p>{texts.paidText}</p>

                    <ul>
                        <li>{texts.paidList1}</li>
                        <li>{texts.paidList2}</li>
                        <li>{texts.paidList3}</li>
                        <li>{texts.paidList4}</li>
                        <li>{texts.paidList5}</li>
                    </ul>

                    <small>{texts.paidNote}</small>
                </S.VisualBox>
            </S.Content>
        </S.Container>
    )
}

export default PaidTraffic
