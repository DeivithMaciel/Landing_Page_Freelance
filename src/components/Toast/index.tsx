import { useEffect } from 'react'
import { Container } from './styles'

type Props = {
    message: string
    type?: 'success' | 'error'
    onClose: () => void
}

export const Toast = ({ message, type = 'success', onClose }: Props) => {
    useEffect(() => {
        const timer = setTimeout(onClose, 3000)
        return () => clearTimeout(timer)
    }, [onClose])

    return <Container type={type}>{message}</Container>
}

export default Toast
