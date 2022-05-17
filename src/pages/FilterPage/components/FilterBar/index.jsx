import React from "react";
import { Col, Row, Card, Checkbox } from "antd";
import * as S from "./styles";

const FilterBar = () => {
  return (
    <>
      <S.FilterbarHeader>
        <span>Bộ lọc tìm kiếm</span>
        <a href="#">Xóa lọc</a>
      </S.FilterbarHeader>
      <S.ContainerCardCustom>
        <h3>Giờ đi</h3>
        <button>
          <span>Sáng sớm(4)</span>
          <p>00:00 - 06:00</p>
        </button>
        <button>
          <span>Buổi sáng(6)</span>
          <p>06:01 - 12:00</p>
        </button>
        <button>
          <span>Buổi chiều(4)</span>
          <p>12:01 - 18:00</p>
        </button>
        <button>
          <span>Buổi tối(4)</span>
          <p>18:01 - 23:59</p>
        </button>
        <h3>Tiêu chí phổ biến</h3>
        <Checkbox>Xác nhận tức thì</Checkbox>
        <p>
          Nhà xe sẽ nhận được thông tin ngay khi bạn hoàn tất các bước đặt vé
        </p>
        <Checkbox>Chuyến có trung chuyển đón/trả</Checkbox>
        <p>Chuyến có đón/trả tận nơi tại một số khu vực nhất định</p>
        <Checkbox>Chuyến có giảm giá & khuyến mãi</Checkbox>
        <p>
          Chuyến có giảm giá trực tiếp từ nhà xe hoặc có mã giảm giá của VeXeRe
        </p>
        <Checkbox>Xe an toàn mùa Covid-19</Checkbox>
        <p>
          Nhà xe đảm bảo thực hiện các biện pháp phòng dịch (Phun khử trùng xe,
          nước rửa tay,...)
        </p>
        <Checkbox>Xe VIP Limousine</Checkbox>
        <p></p>
        <Checkbox>Chuyến được chọn trước chỗ ngồi</Checkbox>
        <p></p>
        <Checkbox>Cho phép xem vị trí xe</Checkbox>
        <p>
          Chuyến có cung cấp tín hiệu định vị cho phép bạn theo dõi vị trí xe
          khi di chuyển
        </p>
      </S.ContainerCardCustom>
    </>
  );
};

export default FilterBar;
