import styled from 'styled-components'
import { colors } from '../../styles/GlobalStyles'

export const Container = styled.section`
    padding: 96px 24px;
    background-color: ${colors.lightBlack};
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 48px;
    max-width: 1200px;
    margin: 0 auto;
    color: ${colors.darkBlue};

    h2 {
        font-size: 48px;
        paddin-top: 8px;
    }

    p {
        margin-top: 16px;
        font-size: 24px;
        text-align: center;
    }

    ul {
        margin-top: 24px;
        padding-left: 24px;

        li {
            font-size: 18px;
            line-height: 24px;
            margin-bottom: 12px;
            list-style: none;
        }
    }

    small {
        display: block;
        margin: 24px;
        font-size: 16px;
        color: ${colors.gray};
    }
`

export const VisualBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 16px;
    flex: 1;
    border-radius: 16px;
    background-color: ${colors.black};
`
