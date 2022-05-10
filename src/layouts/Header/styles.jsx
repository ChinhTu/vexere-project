import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  box-shadow: rgb(0 0 0 / 10%) 0px 3px 5px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  background-color: #fff;
  margin: 0 auto;
  max-width: 980px;
`;

export const Nav = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 20px;
  margin: 0;
`;

export const Span = styled.span`
  position: relative;
  display: inline-block;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  &:after {
    content: "";
    position: absolute;
    left: -55%;
    top: 50%;
    width: 100%;
    height: 1px;
    background-color: gray;
  }

  &:before {
    content: "";
    position: absolute;
    right: -55%;
    top: 50%;
    width: 100%;
    height: 1px;
    background-color: gray;
  }
`;
