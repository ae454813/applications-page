import React from 'react'
import styled from 'styled-components'
import { Breakpoints } from '../../../../constants'

const LogoComponent = () => {
    return (
        <LogoContainer>
            <img src="/static/header/homePageLogo.png" alt="logo" />
        </LogoContainer>
    )
}

export default LogoComponent

const LogoContainer = styled.div`
    height: 64px;
    margin: auto;
    @media (max-width: ${Breakpoints.md}){
        display: none;
    }
`