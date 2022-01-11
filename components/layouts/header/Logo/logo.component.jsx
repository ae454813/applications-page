import React from 'react'
import styled from 'styled-components'

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
`