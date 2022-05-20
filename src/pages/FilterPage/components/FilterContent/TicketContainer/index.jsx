import React from "react";
import { Select, Button } from "antd";
import * as S from "./styles";

const TicketContainer = () => {
  const { Option } = Select;
  return (
    <S.TicketCustom
      hoverable
      cover={
        <img
          alt="example"
          src="https://static.vexere.com/production/images/1614156656852.jpeg?w=250&h=250"
          style={{ width: 150 }}
        />
      }
    >
      <S.SpanCustom>
        <h3 style={{ fontWeight: "bold" }}>Vân Tuyến</h3>
        <h2
          style={{
            color: "rgb(0, 96, 196)",
            marginLeft: 250,
            fontWeight: "bold",
          }}
        >
          400.000đ
        </h2>
      </S.SpanCustom>
      <p>Giường nằm 40 chỗ</p>
      <div>
        <Select
          defaultValue="05:00"
          style={{
            width: 120,
            fontWeight: "bold",
            fontSize: 16,
            lineHeight: 22,
          }}
        >
          <Option value="05:00">05:00</Option>
          <Option value="12:00">12:00</Option>
          <Option value="21:00">21:00</Option>
        </Select>
        <span style={{ marginLeft: 10, fontSize: 16 }}>Bến xe Nước Ngầm</span>
      </div>
      <div>15h</div>
      <div
        style={{
          marginLeft: 10,
          fontSize: 16,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        20:00 Đà Nẵng
        <Button style={{ backgroundColor: "#FFC700", fontWeight: "bold" }}>
          Gọi đặt vé
        </Button>
      </div>
    </S.TicketCustom>
  );
};

export default TicketContainer;
