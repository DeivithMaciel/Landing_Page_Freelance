import styled from 'styled-components'
import { breakpoints } from '../../styles/GlobalStyles'

type Props = {
    type: 'success' | 'error'
}

export const Container = styled.div<Props>`
    position: fixed;
    top: 24px;
    right: 24px;
    z-index: 999;
    padding: 12px 20px;
    border-radius: 8px;
    font-weight: bold;
    color: #fff;

    background-color: ${({ type }) =>
        type === 'success' ? '#2ecc71' : '#e74c3c'};

    @media (max-width: ${breakpoints.tablet}) {
        top: auto;
        left: 16px;
        right: 16px;
        bottom: 240px;
        text-align: center;
    }
`
