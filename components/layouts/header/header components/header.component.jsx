import { Button } from 'antd'
import React from 'react'
import styled from 'styled-components'

const HeaderComponent = () => {
    return (
        <HeaderContainer>
            <Button size='large'>click me</Button>
        </HeaderContainer>
    )
}

export default HeaderComponent

const HeaderContainer = styled.header`
    height: 64px;
    
`