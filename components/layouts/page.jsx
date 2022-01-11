import { ConfigProvider, Layout } from "antd";
import React from "react";
import { ThemeProvider } from "styled-components";
import HeaderLayout from "./header";
import SiderComponent from "./header/sider componets/sider.component";
import { GlobalStyle } from "./theme/global.style";
import { theme } from "./theme/style";

const { Header, Content, Sider } = Layout;

const Page = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <ConfigProvider direction="rtl">
        <GlobalStyle />
        <Layout>
          <Header>
            <HeaderLayout />
          </Header>
          <Layout>
            <Sider width={230}>
              <SiderComponent />
            </Sider>
            <Layout>
                <Content style={{backgroundColor: "#fff"}}>
                {children}
                </Content>
            </Layout>
          </Layout>
        </Layout>
      </ConfigProvider>
    </ThemeProvider>
  );
};

export default Page;
