import { Card, Col, Image, Input, Row, Space, Typography } from "antd";
import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";
import { STATIC_DATA } from "../../../locales/ar/appsPage";

const { Title, Text } = Typography;
const { Search } = Input;

const AllAppsComponent = ({ data }) => {
  Object.keys(data).map((t) => console.log(t));
  // const appCard= Object.keys(data).reduce((prev, idx) => {
  //   return [...prev, ...idx.appTitle, ...idx.appLogo]
  // },[]);

  // console.log("app card", appCard)
  // const [title, setTitle] = useState([])
  // console.log(title)
  //     for (const key in data) {
  //         if (data.hasOwnProperty.call(data, key)) {
  //             const title = data[key].appTitle;
  //             setTitle(old=>[...old, title])
  //             const logo = data[key].appLogo;
  //             // setTitle(old=>[...old, logo])
  //         }
  //     }

  return (
    <AllAppsContainer>
      <Row gutter={[0, 24]}>
        <Col lg={24}>
          <Title className="page-title" level={3}>
            {STATIC_DATA.allApps}
          </Title>
        </Col>
        <Col lg={24}>
          <Search placeholder={STATIC_DATA.searchForApp} size="large" />
        </Col>
        <Col lg={24}>
          <Row gutter={[26, 24]}>
            {Object.keys(data).map((app) => (
              <Col key={app}>
                <Link href={`/allApps/${app}`}>
                  <Card className="app-card" bodyStyle={{ padding: 20 }}>
                    <Space size={14} align="start">
                      <Image
                        preview={false}
                        src={data.B7r.appLogo}
                        width={58}
                      />
                      <Space direction="vertical" size={32}>
                        <Typography>
                          <Title level={5} className="app-title">
                            {data.B7r.appTitle}
                          </Title>
                          <Text className="app-description">
                            {data.B7r.appDescription}
                          </Text>
                        </Typography>
                        {data.B7r.isInstalled && (
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
  background-color: #fbfbfb;

  .page-title {
    margin-bottom: 11px;
  }

  .app-card {
    width: 358px;
    height: 176px;
    cursor: pointer;
    background-color: #ffffff;
  }

  .app-title {
    font-size: 18px;
    color: ${(props) => props.theme.borderColors.black3};
  }
  .app-description {
    color: ${(props) => props.theme.colors.Gray1};
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
