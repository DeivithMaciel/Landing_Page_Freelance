import styled from 'styled-components'

import { colors } from '../../styles/GlobalStyles'

export const Container = styled.div`
    padding: 96px 24px;
    background-color: ${colors.black};
`

export const Content = styled.section`
    display: flex;
    justify-content: space between;
    gap: 64px;
    max-width: 1200px;
    margin: 0 auto;
`

export const Info = styled.div`
    flex: 1;
    color: ${colors.lightGray};

    h2 {
        font-size: 36px;
    }

    p {
        margin-top: 16pz;
        font-size: 18px;
        color: ${colors.gray};
    }

    span {
        display: inline-block;
        margin-top: 24px;
        font-size: 18px;

        a {
            color: ${colors.lightGray};
            text-decoration: none;
        }
    }
`

export const Form = styled.form`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 16px;

    input {
        padding: 16px;
        border-radius: 8px;
        border: none;
        font-size: 16px;
    }

    button {
        padding: 16px;
        border-radius: 8px;
        border: none;
        background-color: ${colors.darkBlue};
        color: ${colors.black};
        font-size: 16px;
        cursor: pointer;
        transition: opacity 0.2s;

        &:hover {
            opacity: 0.85;
        }
    }
`
