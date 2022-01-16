import { Card, Col, Image, Input, Row, Space, Typography } from "antd";
import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";
import { Breakpoints } from "../../../constants";
import { STATIC_DATA } from "../../../locales/ar/appsPage";

const { Title, Text } = Typography;
const { Search } = Input;

const AllAppsComponent = ({ data }) => {
  const [filterApp, setFilterApp] = useState([...data]);

  const onSearchingApp = (value, event) => {
    setFilterApp(
      data.filter((app) =>
        app.appTitle.toLowerCase().includes(value.toLowerCase())
      )
    );
    // if(value =="") return setFilterApp([...data])
    // event.onChange();
  };

  return (
    <AllAppsContainer>
      <Row gutter={[0, 24]}>
        <Col lg={24}>
          <Title className="page-title" level={3}>
            {STATIC_DATA.allApps}
          </Title>
        </Col>
        <Col sm={24} xs={24}>
          <Search
            placeholder={STATIC_DATA.searchForApp}
            onSearch={onSearchingApp}
            size="large"
          />
        </Col>
        <Col xs={24}>
          <Row gutter={[26, 24]} xs={24} >
            {filterApp.map((app) => (
              <Col key={app}>
                <Link passHref href={`/allApps/${app.name}`}>
                  <Card className="app-card" bodyStyle={{ padding: 0 }}>
                    <Space size={14} align="start">
                      <Image preview={false} src={app.appLogo} alt={app.appTitle} width={58} />
                      <Space direction="vertical" size={32}>
                        <Typography>
                          <Title level={5} className="app-title">
                            {app.appTitle}
                          </Title>
                          <Text className="app-description">
                            {app.appDescription}
                          </Text>
                        </Typography>
                        {app.isInstalled && (
                          <Text className="install-statue">
                            {STATIC_DATA.installed}
                          </Text>
                        )}
                      </Space>
                    </Space>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </AllAppsContainer>
  );
};

export default AllAppsComponent;

const AllAppsContainer = styled.div`
  padding: 15px 44px 15px 40px;
  min-height: 150vh;
  background-color: #fbfbfb;
  @media (max-width: ${Breakpoints.sm}){
    padding: 16px;
  }

  .page-title {
    margin-bottom: 11px;
    @media (max-width: ${Breakpoints.sm}){
      font-size: 18px;
      margin-bottom: -15px;
    }
  }

  .app-card {
    max-width: 358px;
    height: 176px;
    padding: 20px;
    cursor: pointer;
    background-color: #ffffff;
    @media (max-width: ${Breakpoints.sm}){
      max-width: 343px;
      padding: 20px 16px;
    }
  }

  .app-title {
    font-size: 18px;
    color: ${(props) => props.theme.borderColors.black3};
  }
  .app-description {
    color: ${(props) => props.theme.colors.Gray1};
    @media (max-width: ${Breakpoints.sm}){
      font-size: 12px;
    }
  }
  .install-statue {
    min-width: 79px;
    font-size: 12px;
    font-weight: 700;
    color: #219653;
    background: rgba(33, 150, 83, 0.04);
    border-radius: 100px;
    padding: 3px 15px;
  }

  .ant-input-group-wrapper {
    max-width: 392px;
    background: #ffffff;
    box-shadow: 0px 0px 4px rgba(51, 51, 51, 0.12);
    border-radius: 6px;
    @media (max-width: ${Breakpoints.sm}){
        max-width: 343px;
    }
  }
  .ant-input-lg {
    padding: 8px 16px;
    @media (max-width: ${Breakpoints.sm}){
      font-size: 12px;
    }
  }
  .ant-input-search
    > .ant-input-group
    > .ant-input-group-addon:last-child
    .ant-input-search-button:not(.ant-btn-primary) {
    border: none;
    color: ${(props) => props.theme.customColors.lightBlue1};
  }
  .ant-input-group > .ant-input-rtl:first-child,
  .ant-input-group-rtl .ant-input-group-addon:first-child {
    border: none;
  }
`;
