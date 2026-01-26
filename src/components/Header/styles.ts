import styled from 'styled-components'

import { breakpoints, colors } from '../../styles/GlobalStyles'

export const Container = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    height: 72px;
    background-color: ${colors.lightGray};
    backdrop-filter: blur(8px);
    border-bottom: 1px solid ${colors.lightBlack};
    z-index: 1;
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    height: 100%;
    margin: 0 auto;
    padding: 0 16px;

    @media (max-width: ${breakpoints}) {
        // padding-right: 0;
    }
`
export const Logo = styled.span`
    font-size: 36px;
    font-weight: bold;
    color: ${colors.white};

    @media (max-width: ${breakpoints.mobile}) {
        font-size: 24px;
    }
`

export const Actions = styled.div`
    button {
        padding: 10px 20px;
        border-radius: 6px;
        border: none;
        background-color: ${colors.lightBlack};
        color: #fff;
        font-size: 16px;
        font-weight: semi-bold;
        cursor: pointer;
        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }

    @media (max-width: ${breakpoints.mobile}) {
        button {
            padding: 8px;
            font-size: 8px;
            margin-right: 16px;
        }
    }
`
