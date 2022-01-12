import { RightOutlined, StarFilled } from "@ant-design/icons/lib/icons";
import { Button, Col, Image, Row, Space, Typography } from "antd";
import Link from "next/link";
import React from "react";
import { STATIC_DATA } from "../../locales/ar/appsPage";
import ReviewAPPCardComponent from "./card";
import AppFeaturesComponent from "./features";
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
            <Link href="/allApps">
              <Text className="go-apps">{STATIC_DATA.apps}</Text>
            </Link>
          </Space>
        </Col>
        <Col lg={24}>
          <ReviewAPPCardComponent data={data} />
        </Col>
        <Col lg={24}>
          <Paragraph className="app-page-description">
            {data.paragraph}
          </Paragraph>
        </Col>
        <Col lg={24}>
          <AppFeaturesComponent data={data} />
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
