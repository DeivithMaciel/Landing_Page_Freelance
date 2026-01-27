import styled from 'styled-components'

import { breakpoints, colors } from '../../styles/GlobalStyles'

export const Section = styled.section`
    padding: 96px 24px;
    background-color: ${colors.white};
`

export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`

export const Header = styled.header`
    text-align: center;
    max-width: 640px;
    margin: 0 auto 64px;

    h2 {
        font-size: 40px;
        color: ${colors.darkBlue};
    }

    p {
        margin-top: 16px;
        font-size: 18px;
        color: ${colors.lightBlue};
    }
`

export const CardList = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 32px;

    @media (max-width: ${breakpoints.tablet}) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: ${breakpoints.mobile}) {
        grid-template-columns: 1fr;
    }
`

export const CardItem = styled.li`
    padding: 32px;
    border-radius: 16px;
    background-color: ${colors.lightBlack};
    text-align: left;
    list-style: none;

    h3 {
        font-size: 20px;
    }

    p {
        margin-top: 12px;
        font-size: 16px;
        color: ${colors.lightBlue};
        line-height: 1.5;
    }
`
