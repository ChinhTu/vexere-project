import styled from "styled-components";

export const Wrapper = styled.section`
  padding-top: 30px;
  background-color: #f3f3f3;
`;

export const Container = styled.div`
  max-width: 980px;
  margin: 0 auto;
`;

export const Ul = styled.ul`
  list-style: none;
  margin: 20px 0;
  display: flex;
  flex-wrap: wrap;

  li {
    margin: 6px 0;
    width: 100%;
  }
  a {
    color: gray;
    text-decoration: none;

    :hover {
      color: blue;
    }
  }
`;

export const Line = styled.div`
  border-bottom: 3px solid #e4e4e4;
  margin: 25px 0;
`;

export const CopyRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 30px 0;

  p {
    line-height: 1;
  }
`;
