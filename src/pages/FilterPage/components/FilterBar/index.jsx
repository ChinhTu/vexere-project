import React from "react";
import { Col, Row, Card, Checkbox, Slider, Input } from "antd";
import * as S from "./styles";
import {
  PlusCircleOutlined,
  MinusCircleOutlined,
  StarFilled,
} from "@ant-design/icons";

const FilterBar = () => {
  return (
    <>
      <S.FilterbarHeader>
        <span>Bộ lọc tìm kiếm</span>
        <a href="#">Xóa lọc</a>
      </S.FilterbarHeader>
      <S.ContainerCardCustom>
        <S.hCustom>Giờ đi</S.hCustom>
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
        <S.hCustom>Tiêu chí phổ biến</S.hCustom>
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
        <S.hCustom>Giá vé</S.hCustom>
        <Slider
          range
          step={50000}
          defaultValue={[0, 1000000]}
          max={2000000}
          min={0}
        />
        <S.FilterbarHeader>
          <span>0đ</span>
          <span>200000đ</span>
        </S.FilterbarHeader>
        <S.hCustom>Chọn vị trí ghế</S.hCustom>
        <S.EmptySlot>
          <span>Số ghế trống</span>
          <MinusCircleOutlined />
          <span style={{ fontSize: 20 }}>1</span>
          <PlusCircleOutlined />
        </S.EmptySlot>
        <S.hCustom>Nhà xe</S.hCustom>

        <S.ScrollList>
          <Input placeholder="Tìm nhà xe" />
          <Checkbox>Xe 1</Checkbox>
          <Checkbox>Xe 1</Checkbox>
          <Checkbox>Xe 1</Checkbox>
          <Checkbox>Xe 1</Checkbox>
          <Checkbox>Xe 1</Checkbox>
          <Checkbox>Xe 1</Checkbox>
          <Checkbox>Xe 1</Checkbox>
          <Checkbox>Xe 1</Checkbox>
          <Checkbox>Xe 1</Checkbox>
          <Checkbox>Xe 1</Checkbox>
          <Checkbox>Xe 1</Checkbox>
          <Checkbox>Xe 1</Checkbox>
          <Checkbox>Xe 1</Checkbox>
        </S.ScrollList>
        <S.hCustom>Điểm đón</S.hCustom>

        <S.ScrollList>
          <Input placeholder="Nhập điểm đón" />
          <Checkbox>Điểm đón 1</Checkbox>
          <Checkbox>Điểm đón 1</Checkbox>
          <Checkbox>Điểm đón 1</Checkbox>
          <Checkbox>Điểm đón 1</Checkbox>
          <Checkbox>Điểm đón 1</Checkbox>
          <Checkbox>Điểm đón 1</Checkbox>
          <Checkbox>Điểm đón 1</Checkbox>
          <Checkbox>Điểm đón 1</Checkbox>
          <Checkbox>Điểm đón 1</Checkbox>
          <Checkbox>Điểm đón 1</Checkbox>
          <Checkbox>Điểm đón 1</Checkbox>
          <Checkbox>Điểm đón 1</Checkbox>
          <Checkbox>Điểm đón 1</Checkbox>
        </S.ScrollList>
        <S.hCustom>Điểm trả</S.hCustom>
        <S.ScrollList>
          <Input placeholder="Nhập điểm trả" />
          <Checkbox>Điểm trả 1</Checkbox>
          <Checkbox>Điểm trả 1</Checkbox>
          <Checkbox>Điểm trả 1</Checkbox>
          <Checkbox>Điểm trả 1</Checkbox>
          <Checkbox>Điểm trả 1</Checkbox>
          <Checkbox>Điểm trả 1</Checkbox>
          <Checkbox>Điểm trả 1</Checkbox>
          <Checkbox>Điểm trả 1</Checkbox>
          <Checkbox>Điểm trả 1</Checkbox>
          <Checkbox>Điểm trả 1</Checkbox>
          <Checkbox>Điểm trả 1</Checkbox>
          <Checkbox>Điểm trả 1</Checkbox>
          <Checkbox>Điểm trả 1</Checkbox>
        </S.ScrollList>
        <S.hCustom>Loại ghế/giường</S.hCustom>
        <Checkbox>Giường nằm</Checkbox>
        <S.hCustom>Đánh giá</S.hCustom>
        <div>
          <span>
            <S.StarCustom>
              <StarFilled />
            </S.StarCustom>
            <S.StarCustom>
              <StarFilled />
            </S.StarCustom>
            <S.StarCustom>
              <StarFilled />
            </S.StarCustom>
            <S.StarCustom>
              <StarFilled />
            </S.StarCustom>
            <S.StarOutlinedCustom>
              <StarFilled />
            </S.StarOutlinedCustom>
            trở lên
          </span>
        </div>
        <div>
          <span>
            <S.StarCustom>
              <StarFilled />
            </S.StarCustom>
            <S.StarCustom>
              <StarFilled />
            </S.StarCustom>
            <S.StarCustom>
              <StarFilled />
            </S.StarCustom>
            <S.StarOutlinedCustom>
              <StarFilled />
            </S.StarOutlinedCustom>
            <S.StarOutlinedCustom>
              <StarFilled />
            </S.StarOutlinedCustom>
            trở lên
          </span>
        </div>
        <div>
          <span>
            <S.StarCustom>
              <StarFilled />
            </S.StarCustom>
            <S.StarCustom>
              <StarFilled />
            </S.StarCustom>
            <S.StarOutlinedCustom>
              <StarFilled />
            </S.StarOutlinedCustom>
            <S.StarOutlinedCustom>
              <StarFilled />
            </S.StarOutlinedCustom>
            <S.StarOutlinedCustom>
              <StarFilled />
            </S.StarOutlinedCustom>
            trở lên
          </span>
        </div>
      </S.ContainerCardCustom>
    </>
  );
};

export default FilterBar;
