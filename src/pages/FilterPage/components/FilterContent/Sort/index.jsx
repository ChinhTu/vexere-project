import React from "react";
import * as S from "./styles";

const Sort = () => {
  return (
    <S.SortCustom>
      <span style={{ fontWeight: 500 }}>Sắp xếp theo:</span>
      <S.LinkCustom>Giờ sớm nhất</S.LinkCustom>
      <S.LinkCustom>Giờ muộn nhất</S.LinkCustom>
      <S.LinkCustom>Giá thấp nhất</S.LinkCustom>
      <S.LinkCustom>Giá cao nhất</S.LinkCustom>
    </S.SortCustom>
  );
};

export default Sort;
