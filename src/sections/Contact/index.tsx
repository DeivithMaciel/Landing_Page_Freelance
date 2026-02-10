import { useState } from 'react'
import emailjs from '@emailjs/browser'

import * as S from './styles'
import Toast from '../../components/Toast'

export const Contact = () => {
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
                    message: 'Mensagem enviada com sucesso!',
                    type: 'success',
                })
                e.currentTarget.reset()
            })
            .catch((err) => {
                console.warn('EmailJS warning:', err)

                setToast({
                    message: 'Mensagem enviada com sucesso!',
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
                    <h2>Entre em contato</h2>

                    <p>
                        Esta landing page é ilustrativa e demonstra como seu
                        produto ou serviço pode captar leads de forma simples.
                    </p>

                    <span>
                        📞 <a href="tel:+5551981458704">(55) 51 98145-8704</a>
                    </span>

                    <input name="name" placeholder="Seu nome" required />

                    <input
                        name="email"
                        type="email"
                        placeholder="Seu melhor email"
                        required
                    />
                    <input
                        type="text"
                        name="adress"
                        tabIndex={-1}
                        autoComplete="off"
                        style={{ display: 'none' }}
                    />

                    <textarea
                        name="message"
                        placeholder="Sua mensagem"
                        required
                    />

                    <button type="submit" disabled={loading}>
                        {loading ? 'Enviando...' : 'Quero minha landing page'}
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
