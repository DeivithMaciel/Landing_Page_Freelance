import styled from 'styled-components'
import { colors } from '../../styles/GlobalStyles'

export const Container = styled.footer`
    background-color: ${colors.lightGray};
    border-top: 1px solid ${colors.lightBlack};
    padding: 32px 24px;
`

export const Content = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 16px;
    max-width: 1200px;
    margin: 0 auto;
    color: #fff;

    span {
        font-size: 16px;
    }
`

export const Brand = styled.div`
    strong {
        font-size: 24px;
    }

    p {
        font-size: 14px;
        margin-top: 8px;
        max-width: 420px;
    }
`
