import { RightOutlined, StarFilled } from "@ant-design/icons/lib/icons";
import { Button, Col, Image, Row, Space, Typography } from "antd";
import Link from "next/link";
import React from "react";
import { STATIC_DATA } from "../../locales/ar/appsPage";
import {
  AppFeatureContainer,
  ApplicationPageContainer,
  ReviewAppCard,
} from "./styles";

const { Text, Title, Paragraph } = Typography;

const AppPageComponent = ({ data }) => {
  return (
    <ApplicationPageContainer>
      <Row gutter={[15, 15]}>
        <Col lg={24}>
          <Space className="go-back">
            <RightOutlined className="right-arrow" />
            <Text className="go-apps">{STATIC_DATA.apps}</Text>
          </Space>
        </Col>
        <Col lg={24}>
          <ReviewAppCard>
            <Space size={30} align="start">
              <Image
                preview={false}
                width={58}
                src={data.appLogo}
                alt={data.appTitle}
              />
              <Space direction="vertical" size={12}>
                <Title level={3} className="app-title">
                  {data.appTitle}
                </Title>
                <Text className="app-descriprion">{data.appDescription}</Text>
                <Text className="app-supplier">
                  {STATIC_DATA.by} <a>{data.supplier}</a>
                </Text>
                <Space size={9} style={{ marginTop: "12px" }}>
                  <Button type="primary" className="btn-1">
                    {STATIC_DATA.appSettings}
                  </Button>
                  <Button className="btn-2">{STATIC_DATA.unInstallApp}</Button>
                </Space>
              </Space>
            </Space>
          </ReviewAppCard>
        </Col>
        <Col lg={24}>
          <Paragraph className="app-page-description">
            {data.paragraph}
          </Paragraph>
        </Col>
        <Col lg={24}>
          <Space direction="vertical" size={35}>
            <AppFeatureContainer>
              <Title className="feature-title">{data.featureTitle}</Title>
              <ul style={{ padding: "0" }}>
                <Space size={16} direction="vertical">
                  {data.features.map((ft) => (
                    <Space size={12} key={ft.id}>
                      <StarFilled className="star-icon" />
                      <li className="feature-item">{ft.feature}</li>
                    </Space>
                  ))}
                </Space>
              </ul>
            </AppFeatureContainer>

            
              <Space size={12} align="center">
                <Image
                  preview={false}
                  width={24}
                  src="/static/appsPage/hint.png"
                />
                <Text className="hint-description">{data.hint}</Text>
                {data.id == 1 && (
                  <div>
                <Link
                  href="https://play.google.com/store/apps/details?id=org.b7r.store"
                  passHref
                >
                  <Image
                    preview={false}
                    src="/static/appsPage/Mobile app store badge.png"
                    style={{ cursor: "pointer" }}
                  />
                </Link>
                <Link
                  href="https://apps.apple.com/eg/app/b7r-store/id1547075946"
                  passHref
                >
                  <Image
                    preview={false}
                    src="/static/appsPage/Mobile app store badge (1).png"
                    style={{ cursor: "pointer" }}
                  />
                </Link>
                </div>
                )}
              </Space>
            
          </Space>
        </Col>
        <Col lg={24} className="images-grid">
          <Row gutter={[32, 16]} justify="start">
            {data.imgUrl.map((img, i) => (
              <Image key={i} preview={false} src={img.src} />
            ))}
          </Row>
        </Col>
      </Row>
    </ApplicationPageContainer>
  );
};

export default AppPageComponent;
