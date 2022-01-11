import { Menu } from 'antd'
import React from 'react'
import styled from 'styled-components'

const { SubMenu } = Menu;

const SiderComponent = () => {
    return (
        <siderContainer>
            <Menu
          mode="inline"
          defaultSelectedKeys={['26']}
          defaultOpenKeys={['sub6']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu key="sub1"  title="subnav 1">
            <Menu.Item key="1">option1</Menu.Item>
            <Menu.Item key="2">option2</Menu.Item>
            <Menu.Item key="3">option3</Menu.Item>
            <Menu.Item key="4">option4</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2"  title="subnav 2">
            <Menu.Item key="5">option5</Menu.Item>
            <Menu.Item key="6">option6</Menu.Item>
            <Menu.Item key="7">option7</Menu.Item>
            <Menu.Item key="8">option8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3"  title="subnav 3">
            <Menu.Item key="9">option9</Menu.Item>
            <Menu.Item key="10">option10</Menu.Item>
            <Menu.Item key="11">option11</Menu.Item>
            <Menu.Item key="12">option12</Menu.Item>
          </SubMenu>
          <SubMenu key="sub4"  title="subnav 4">
            <Menu.Item key="13">option1</Menu.Item>
            <Menu.Item key="14">option2</Menu.Item>
            <Menu.Item key="15">option3</Menu.Item>
            <Menu.Item key="16">option4</Menu.Item>
          </SubMenu>
          <SubMenu key="sub5"  title="subnav 5">
            <Menu.Item key="17">option1</Menu.Item>
            <Menu.Item key="18">option2</Menu.Item>
            <Menu.Item key="19">option3</Menu.Item>
            <Menu.Item key="20">option4</Menu.Item>
          </SubMenu>
          <SubMenu key="sub6"  title="subnav 6">
            <Menu.Item key="21">option1</Menu.Item>
            <Menu.Item key="22">option2</Menu.Item>
            <Menu.Item key="23">option3</Menu.Item>
            <Menu.Item key="24">option4</Menu.Item>
            <Menu.Item key="25">option1</Menu.Item>
            <Menu.Item key="26">option2</Menu.Item>
            <Menu.Item key="27">option3</Menu.Item>
            <Menu.Item key="28">option4</Menu.Item>
          </SubMenu>
        </Menu>
        </siderContainer>
    )
}

export default SiderComponent

const siderContainer = styled.div`
    width: 230px;
    background-color: #163663;
`