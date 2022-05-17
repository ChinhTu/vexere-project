import { Col, Row, Card } from "antd";
import styled from "styled-components";

export const FilterbarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 20px;
`;

export const ContainerCardCustom = styled(Card)`
  box-shadow: rgb(0 0 0 / 30%) 0px 3px 5px;
  width: 300px;
  margin: 0px 20px 20px 0px;
  display: flex;
  flex-wrap: wrap;

  button {
    height: 50px;
    margin: 20px;
    background-color: #ffffff;
  }
`;
