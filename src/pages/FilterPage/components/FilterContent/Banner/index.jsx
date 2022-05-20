import React from "react";

import * as S from "./styles";
import { BANNER } from "../data";

function Banner() {
  const renderSection = ({ data }) => {
    return data.map((item, index) => {
      return (
        <S.CardCustom
          hoverable
          style={{ width: 300, borderRadius: "10px" }}
          cover={<img alt="example" src={item.href} />}
          key={index}
        />
      );
    });
  };
  return <S.Container>{renderSection({ data: BANNER })}</S.Container>;
}

export default Banner;
