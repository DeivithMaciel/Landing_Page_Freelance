import styled from 'styled-components'

import { breakpoints, colors } from '../../styles/GlobalStyles'

export const Container = styled.section`
    padding: 96px 16px;
    background-color: ${colors.black};

    small {
        display: flex;
        justify-content: center;
        padding-top: 24px;
        font-size: 14px;
        color: #fff;
        small {
            text-align: center;
        }
    }
`

export const Content = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 48px;

    @media (max-width: ${breakpoints.tablet}) {
        flex-direction: column;
    }

    @media (max-width: ${breakpoints.mobile}) {
        gap: 24px;
    }
`

export const TextBox = styled.div`
    max-width: 560px;

    h1 {
        font-size: 48px;
        line-height: 1.2;
        font-weight: extra-bold;
        color: #4a69bd;
    }

    p {
        margin-top: 16px;
        font-size: 18px;
        line-height: 1.6;
        color: ${colors.lightGray};
    }

    button {
        margin-top: 32px;
        padding: 14px 28px;
        border-radius: 8px;
        border: none;
        background-color: ${colors.blue};
        color: #fff;
        font-size: 16px;
        font-weight: semi-bold;
        cursor: pointer;
        transition: filter 0.2;

        &:hover {
            filter: brightness(0.8);
        }
    }

    span {
        display: block;
        margin-top: 16px;
        background-color: ${colors.darkBlue};
        border-radius: 16px;
        padding: 8px;
        text-align: center;
        font-size: 14px;
        color: ${colors.lightGray};
    }

    @media (max-width: ${breakpoints.mobile}) {
        display: flex;
        flex-direction: column;
        text-align: center;
        padding-left: 20px;

        h1 {
            font-size: 32px;
        }

        p {
            font-size: 16px;
        }

        button {
            width: 100%;
        }
    }
`

export const BackgroundImage = styled.div`
    flex: 1;
    height: 320px;
    background-color: ${colors.darkBlue};
    border-radius: 16px;
`
