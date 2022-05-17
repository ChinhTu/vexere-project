import { Col, Row } from "antd";
import styled from "styled-components";
import imageBackground from "../../images/ha-giang.png";

export const Container = styled.div`
  background-image: url(${imageBackground});
  background-repeat: no-repeat;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  h2 {
    text-align: center;
    font-size: 2.5rem;
    color: #fff;
    width: 100%;
  }
  p {
    color: #fff;
    font-weight: bold;
    font-size: 18px;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 100%;
  font-size: 15px;
  font-weight: bold;
  border: none;
  background-color: #f8ae00;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const WrapperContent = styled.div`
  max-width: 980px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-size: 22px;
  margin-top: 40px;
  margin-bottom: 10px;
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 20px;

  li {
    width: 25%;

    img {
      width: 100%;
      height: 100%;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }
  }

  .describe {
    padding: 10px;
    color: #fff;
    background-color: #f8ae;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;

    h3 {
      font-size: 20px;
      color: #fff;
      font-weight: bold;
      margin-bottom: 0;
    }
    p {
      margin-bottom: 0;
    }
  }
`;

export const SearchBookingWrapper = styled(Row)`
  width: 100%;

  .ant-select {
    width: 100%;
  }
  .ant-picker {
    width: 100%;
  }
`;

export const MainCheckbox = styled(Row)`
  margin-top: 30px;

  justify-content: flex-start;
  display: flex;
  align-items: center;

  p {
    margin-right: 10px;
    margin-bottom: 0;
  }
  .ant-btn {
    margin-left: 15px;
  }
`;
