import { useState } from 'react'
import emailjs from '@emailjs/browser'

import * as S from './styles'

export const Contact = () => {
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        setError(false)
        setSuccess(false)

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_service_p8vhc4l,
                import.meta.env.VITE_EMAILJS_template_5fiqk1l,
                e.currentTarget,
                import.meta.env.VITE_EMAILJS_T9rJzCfqiWlTGme_v
            )

            .then(() => {
                setSuccess(true)
                e.currentTarget.reset()
            })
            .catch(() => {
                setError(true)
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

                    <input name="user_name" placeholder="Seu nome" required />

                    <input
                        name="user_email"
                        type="email"
                        placeholder="Seu melhor email"
                        required
                    />

                    <textarea
                        name="message"
                        placeholder="Sua mensagem"
                        required
                    />

                    <button type="submit" disabled={loading}>
                        {loading ? 'Enviando...' : 'Quero minha landing page'}
                    </button>

                    {success && <small>✅ Mensagem enviada com sucesso!</small>}
                    {error && (
                        <small>❌ Erro ao enviar. Tente novamente.</small>
                    )}
                </S.Form>
            </S.Content>
        </S.Container>
    )
}

export default Contact
