import { Button, Image, Space, Typography } from "antd";
import React from "react";
import styled from "styled-components";
import { STATIC_DATA } from "../../../locales/ar/appsPage";

const { Text, Title, Paragraph } = Typography;

const ReviewAPPCardComponent = ({ data }) => {
  return (
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
            ):(<Button type="primary" className="btn-1">{STATIC_DATA.installApp}</Button>)}
          </Space>
        </Space>
      </Space>
    </ReviewAppCard>
  );
};

export default ReviewAPPCardComponent;

const ReviewAppCard = styled.div`
  padding: 25px 30px;
  background-color: #fbfbfb;

  .app-title {
    font-weight: 700;
    color: ${(props) => props.theme.colors.black3};
  }

  .app-descriprion {
    font-size: 16px;
    color: ${(props) => props.theme.colors.Gray2};
  }

  .app-supplier {
    font-weight: 500;
    margin: 2px;
    color: ${(props) => props.theme.customColors.secondary};
  }

  .btn-1 {
    padding: 7px 20px;
    border-radius: 4px;
    background-color: ${(props) => props.theme.customColors.lightBlue1};
    font-size: 12px;
    font-weight: 600;
  }
  .btn-2 {
    padding: 0 20px;
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme.customColors.lightBlue1};
    color: ${(props) => props.theme.customColors.lightBlue1};
    font-size: 12px;
    font-weight: 600;
  }
`;
