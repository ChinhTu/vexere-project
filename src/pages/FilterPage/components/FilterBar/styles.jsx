import { StarFilled, StarOutlined } from "@ant-design/icons";
import { Col, Row, Card, Slider } from "antd";
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

export const EmptySlot = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const ScrollList = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  max-height: 200px;
  gap: 20px;
  overflow-y: scroll;
  padding-bottom: 20px;
`;

export const hCustom = styled.h3`
  font-size: 15px;
  color: #022;
  margin: 12px 0px;
`;

export const StarCustom = styled(StarFilled)`
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  -webkit-font-feature-settings: "tnum";
  font-feature-settings: "tnum";
  display: inline-block;
  margin: 0;
  padding: 0;
  color: #fadb14;
  font-size: 20px;
  line-height: unset;
  list-style: none;
  outline: none;
`;
export const StarOutlinedCustom = styled(StarFilled)`
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  -webkit-font-feature-settings: "tnum";
  font-feature-settings: "tnum";
  display: inline-block;
  margin: 0;
  padding: 0;
  color: #c1c1c1;
  font-size: 20px;
  line-height: unset;
  list-style: none;
  outline: none;
`;
