import { StarFilled } from "@ant-design/icons/lib/icons";
import { Col, Image, Row, Space, Typography } from "antd";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const { Text, Title, Paragraph } = Typography;

const AppFeaturesComponent = ({ data }) => {
  return (
    <>
      <Space direction="vertical" size={35} className="features-hint">
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

        {data.hint && (
          
          <Space size={12} align="center">
            <Image preview={false} width={24} src="/static/appsPage/hint.png" />
            <Row gutter={[11,8]}>
              <Col>
              <Text className="hint-description">
              {data.hint}{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href={data.LinkUrl}
                style={{ marginRight: "13px" }}
              >
                {data.enrol}
              </a>
            </Text>
              </Col>
              <Col>
          {data.name == "B7r" && (
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
              </Col>
            </Row>
            
          </Space>
         
        )}
      </Space>
    </>
  );
};

export default AppFeaturesComponent;

const AppFeatureContainer = styled.div`
  .feature-title {
    margin-bottom: 24px;
    font-size: 16px;
    font-weight: 600;
    color: ${(props) => props.theme.colors.black3};
  }

  .feature-item {
    color: ${(props) => props.theme.colors.Gray2};
    list-style: none;
    max-width: 880px;
  }

  .star-icon {
    font-size: 20px;
    color: #ffc000;
  }
`;
