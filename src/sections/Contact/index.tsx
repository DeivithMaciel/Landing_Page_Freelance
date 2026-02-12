import { useState } from 'react'
import emailjs from '@emailjs/browser'

import type { TextsType } from '../../i18n/Texts'

import Toast from '../../components/Toast'

import * as S from './styles'

type Props = {
    texts: TextsType
}

export const Contact = ({ texts }: Props) => {
    const [loading, setLoading] = useState(false)
    const [toast, setToast] = useState<null | {
        message: string
        type: 'success' | 'error'
    }>(null)

    const [startTime] = useState(() => Date.now())

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (Date.now() - startTime < 1500) {
            setToast({
                message: 'Aguarde alguns segundos antes de enviar.',
                type: 'error',
            })
            return
        }

        const getBot = (
            e.currentTarget.elements.namedItem('adress') as HTMLInputElement
        )?.value

        if (getBot) {
            return
        }

        setLoading(true)

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                e.currentTarget,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(() => {
                setToast({
                    message: texts.toastMessage,
                    type: 'success',
                })
                e.currentTarget.reset()
            })
            .catch((err) => {
                console.warn('EmailJS warning:', err)

                setToast({
                    message: texts.toastMessage,
                    type: 'success',
                })
                e.currentTarget.reset()
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return (
        <S.Container>
            <S.Content>
                <S.Form onSubmit={handleSubmit}>
                    <h2>{texts.contactTitle}</h2>

                    <p>{texts.contactSubtitle}</p>

                    <span>
                        📞 <a href="tel:+5551981458704">(55) 51 98145-8704</a>
                    </span>

                    <input
                        name="name"
                        placeholder={texts.contactName}
                        required
                    />

                    <input
                        name="email"
                        type="email"
                        placeholder={texts.contactEmail}
                        required
                    />
                    <input
                        autoComplete="off"
                        type="text"
                        name="adress"
                        tabIndex={-1}
                        style={{ display: 'none' }}
                    />

                    <textarea
                        name="message"
                        placeholder={texts.contactMessage}
                        required
                    />

                    <button type="submit" disabled={loading}>
                        {loading
                            ? `${texts.ContactLoading}`
                            : `${texts.contactButton}`}
                    </button>
                    {toast && (
                        <Toast
                            message={toast.message}
                            type={toast.type}
                            onClose={() => setToast(null)}
                        />
                    )}
                </S.Form>
            </S.Content>
        </S.Container>
    )
}

export default Contact
