import styled from 'styled-components'
import { breakpoints, colors } from '../../styles/GlobalStyles'

export const Section = styled.section`
    padding: 96px 24px;
    background-color: ${colors.darkBlue};
`

export const Container = styled.div`
    max-width: 640px;
    margin: 0 auto;
    text-align: center;

    h2 {
        font-size: 40px;
        color: #fff;
    }

    p {
        margin-top: 16px;
        font-size: 24px;
        color: ${colors.gray};
    }

    button {
        margin-top: 32px;
        padding: 16px 32px;
        border-radius: 8px;
        border: none;
        background-color: ${colors.blue};
        color: #fff;
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;
        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }

    @media (max-width: ${breakpoints.mobile}) {
        h2 {
            font-size: 36px;
        }

        p {
            font-size: 16px;
        }
    }
`
