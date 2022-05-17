import React from "react";
import * as S from "./styles";
import { Col, Row } from "antd";

import Title from "./components/Title";
import FilterBar from "./components/FilterBar";

const filterPage = () => {
  return (
    <S.WrapperContent>
      <Title />
      <Row>
        <Col span={8}>
          <FilterBar />
        </Col>
        <Col span={16}>Phuoc</Col>
      </Row>
    </S.WrapperContent>
  );
};

export default filterPage;
