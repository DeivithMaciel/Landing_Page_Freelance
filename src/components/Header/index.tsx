import * as S from './styles'

type Props = {
    lang: 'pt' | 'en'
    setLang: (lang: 'pt' | 'en') => void
}

export const Header = ({ lang, setLang }: Props) => {
    const label = lang === 'pt' ? 'Falar no Whatsapp' : 'Chat on Whatsapp'

    return (
        <S.Container>
            <S.Content>
                <S.Logo>TrafficQuality</S.Logo>
                <button onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}>
                    🌐 {lang === 'pt' ? 'PT-BR' : 'EN'}
                </button>
                <S.Actions>
                    <a href="https://wa.me/5511981458704">{label}</a>
                </S.Actions>
            </S.Content>
        </S.Container>
    )
}
