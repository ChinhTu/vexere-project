import React from "react";
import * as S from "./styles";

import {
  GARAGE,
  NEWS,
  BUS_STATION,
  STREET,
  LIMOUSINE_CAR,
  ABOUT_ME,
  SUPPORT,
  CERTIFICATION,
  APP,
} from "./constant.js";

import { Row, Col } from "antd";

const Footer = () => {
  const renderNavigate = (title, data) => {
    return (
      <>
        <h3>{title}</h3>
        <S.Ul>
          {data.map((item, index) => (
            <li style={title === "Nhà xe" ? { width: "33%" } : {}} key={index}>
              <a href="#!" key={index}>
                {item}
              </a>
            </li>
          ))}
        </S.Ul>
      </>
    );
  };

  return (
    <>
      <S.Wrapper>
        <S.Container>
          <Row>
            <Col span={12}>{renderNavigate("Tin Tức", NEWS)}</Col>
            <Col span={6}>{renderNavigate("Tuyến Đường", STREET)}</Col>
            <Col span={6}>{renderNavigate("Xe Limousine", LIMOUSINE_CAR)}</Col>
          </Row>
          <Row>
            <Col span={6}>{renderNavigate("Bến Xe", BUS_STATION)}</Col>
            <Col span={18}>{renderNavigate("Nhà xe", GARAGE)}</Col>
          </Row>
          <S.Line />
          <Row>
            <Col span={6}>{renderNavigate("Về Chúng Tôi", ABOUT_ME)}</Col>
            <Col span={6}>{renderNavigate("Hỗ Trợ", SUPPORT)}</Col>
            <Col span={6}>
              <h3>Chứng Nhận</h3>
              <S.Ul>
                {CERTIFICATION.map((item, index) => (
                  <li key={index} style={{ marginBottom: "10px  " }}>
                    <a href="#!">
                      <img src={item} alt="photo3 " />
                    </a>
                  </li>
                ))}
              </S.Ul>
            </Col>
            <Col span={6}>
              <h3>Tải ứng dụng VeXeRe</h3>
              <S.Ul>
                {APP.map((item, index) => (
                  <li key={index} style={{ marginBottom: "10px  " }}>
                    <a href="#!">
                      <img
                        src={item}
                        style={{ height: "50px" }}
                        alt="logo_app"
                      />
                    </a>
                  </li>
                ))}
              </S.Ul>
            </Col>
          </Row>
        </S.Container>
      </S.Wrapper>
      <S.CopyRight>
        <h3>Công ty TNHH Thương Mại Dịch Vụ VeXeRe</h3>
        <p>
          Địa chỉ đăng ký kinh doanh: 8C Chữ Đồng Tử, Phường 7, Quận Tân Bình,
          Thành Phố Hồ Chí Minh, Việt Nam
        </p>
        <p>
          Địa chỉ: Lầu 8,9, Tòa nhà CirCO, 222 Điện Biên Phủ, Quận 3, TP. Hồ Chí
          Minh, Việt Nam
        </p>
        <p>
          Giấy chứng nhận ĐKKD số 0315133726 do Sở KH và ĐT TP. Hồ Chí Minh cấp
          lần đầu ngày 27/6/2018
        </p>
        <p>Bản quyền &copy; 2020 thuộc về VeXeReClone.Com</p>
      </S.CopyRight>
    </>
  );
};
export default Footer;
