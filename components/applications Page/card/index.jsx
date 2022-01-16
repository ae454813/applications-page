import { Button, Image, Space, Typography } from "antd";
import React from "react";
import styled from "styled-components";
import { STATIC_DATA } from "../../../locales/ar/appsPage";
import { ReviewAppCard } from "../styles";

const { Text, Title, Paragraph } = Typography;

const ReviewAPPCardComponent = ({ data }) => {
  return (
    <ReviewAppCard>
      <Space size={30} align="start" className="space-card">
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
            {STATIC_DATA.by}{" "}
            <a target="_blank" rel="noreferrer" href={data.LinkUrl}>
              {data.supplier}
            </a>
          </Text>
          <Space size={9} style={{ marginTop: "12px" }}>
            {data.isInstalled ? (
              <>
              <Button type="primary" className="btn-1">
                {STATIC_DATA.appSettings}
              </Button>
              <Button className="btn-2">{STATIC_DATA.unInstallApp}</Button>
              </>
            ):(<Button type="primary" className="btn-3">{STATIC_DATA.installApp}</Button>)}
          </Space>
        </Space>
      </Space>
    </ReviewAppCard>
  );
};

export default ReviewAPPCardComponent;

