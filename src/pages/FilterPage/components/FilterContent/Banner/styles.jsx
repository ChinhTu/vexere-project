import styled from "styled-components";
import { Card } from "antd";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 10px;
  margin-bottom: 0px;
  overflow-x: scroll;
  padding-bottom: 0px;
`;

export const CardCustom = styled(Card)`
  img {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;
