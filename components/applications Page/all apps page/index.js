import { Col, Image, Input, Row, Typography } from "antd";
import React, {useState} from "react";
import styled from "styled-components";

const { Title } = Typography;
const { Search } = Input;

const AllAppsComponent = ({data}) => {
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
          <Title className="page-title" level={3}>جمييع التطبيقات</Title>
        </Col>
        <Col lg={24}>
          <Search placeholder="ابحث عن اسم التطبيق" size="large" />
        </Col>
        <Col>
        
        <div>
            <div>
                <Image src={data.appLogo} />
            </div>
        </div>
        </Col>
      </Row>
    </AllAppsContainer>
  );
};

export default AllAppsComponent;

const AllAppsContainer = styled.div`
  padding: 15px 44px 15px 40px;
  background-color: #FBFBFB;

  .page-title{
      margin-bottom: 11px;
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
    
  }
  .ant-input-group > .ant-input-rtl:first-child,
  .ant-input-group-rtl .ant-input-group-addon:first-child {
    border: none;
  }
`;
