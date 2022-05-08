import React, { useState } from "react";
import Logo from "../../images/icon_vxr_full.svg";

import {
  CaretDownOutlined,
  PhoneOutlined,
  UserOutlined,
  LockOutlined,
} from "@ant-design/icons";
import { Button, Space, Modal, Form, Input, Checkbox, Row, Col } from "antd";

import * as S from "./styles";

function Header(props) {
  const [formLogin] = Form.useForm();
  const [formRegister] = Form.useForm();
  const [modal, contextHolder] = Modal.useModal();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const config = {
    title: "Error",
    content: <p>Đã tồn tại tài khoản</p>,
  };
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleLogin = (value) => {
    const a = JSON.parse(localStorage.getItem("user"));
    if (value.username === a.username && value.password === a.password) {
      formLogin.resetFields();
      alert("Login success");
    } else alert("Login fair");
    console.log(a);
  };
  const handleRegister = (value) => {
    const users = JSON.parse(localStorage.getItem("user")) || [];
    const listUser = [...users, value];
    console.log(listUser);
    localStorage.setItem("users", JSON.stringify(listUser));
    const hasUserName = listUser.filter(
      (item) => value.username === item.username
    );
    hasUserName
      ? localStorage.setItem("user", JSON.stringify(value))
      : modal.error(config);
    formRegister.resetFields();
  };

  return (
    <S.Header>
      <>
        <img src={Logo} alt="photo1" />
        <S.Nav>
          <li>Thuê xe</li>
          <li>Xe limousine</li>
          <li>Quản lí đơn hàng</li>
          <li>
            Trở thành đối tác <CaretDownOutlined></CaretDownOutlined>
          </li>
          <li>
            EN
            <img
              src="https://storage.googleapis.com/fe-production/images/english_icon.png"
              alt="photo2"
            />
          </li>
        </S.Nav>
        <Button icon={<PhoneOutlined rotate={90} />}>Hotline</Button>
        <Button type="primary" icon={<UserOutlined />} onClick={showModal}>
          Đăng nhập
        </Button>
        <Modal
          title={isLogin ? "Đăng nhập" : "Đăng ký"}
          visible={isModalVisible}
          onCancel={handleCancel}
          footer={null}
        >
          {isLogin ? (
            <>
              <Form
                form={formLogin}
                name="normal_login"
                className="login-form"
                initialValues={{
                  remember: true,
                }}
                onFinish={(value) => handleLogin(value)}
              >
                <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Username or SDT!",
                    },
                  ]}
                >
                  <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Username or SDT"
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Password!",
                    },
                  ]}
                >
                  <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Item>
                <Row>
                  <Col span={12}>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                      <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                  </Col>
                  <Col span={12} style={{ textAlign: "end" }}>
                    <a className="login-form-forgot" href="#!">
                      Forgot password
                    </a>
                  </Col>
                </Row>
                <Form.Item style={{ textAlign: "center", marginTop: "20px" }}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                    onClick={handleLogin}
                  >
                    Log in
                  </Button>
                </Form.Item>
              </Form>
              <Row>
                <S.Span>hoặc</S.Span>
              </Row>
              <Row>
                <Button
                  style={{ width: "100%", height: "40px", marginTop: "20px" }}
                  type="primary"
                  onClick={() => null}
                >
                  Đăng nhập với google
                </Button>
              </Row>
              <Row style={{ marginTop: "20px" }}>
                <p style={{ marginRight: "10px" }}>Bạn chưa có tài khoản ?</p>
                <a
                  href="#!"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsLogin(false);
                  }}
                >
                  Đăng ký
                </a>
              </Row>
            </>
          ) : (
            <>
              <Form
                form={formRegister}
                name="form-register"
                className="login-form"
                initialValues={{
                  remember: true,
                }}
                onFinish={(value) => handleRegister(value)}
              >
                <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Username or SDT!",
                    },
                  ]}
                >
                  <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Username or SDT"
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Password!",
                    },
                  ]}
                >
                  <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Item>
                <Form.Item
                  name="confirm password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Password!",
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("password") === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error(
                            "The two passwords that you entered do not match!"
                          )
                        );
                      },
                    }),
                  ]}
                >
                  <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Confirm Password"
                  />
                </Form.Item>
                <Row>
                  <Col span={24} style={{ textAlign: "end" }}>
                    <a className="login-form-forgot" href="#!">
                      Forgot password
                    </a>
                  </Col>
                </Row>
                <Form.Item style={{ textAlign: "center", marginTop: "20px" }}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                    onClick={handleRegister}
                  >
                    Register Now
                  </Button>
                </Form.Item>
              </Form>
              <Row>
                <S.Span>hoặc</S.Span>
              </Row>
              <Row>
                <Button
                  style={{ width: "100%", height: "40px", marginTop: "20px" }}
                  type="primary"
                  onClick={() => null}
                >
                  Đăng ký với google
                </Button>
              </Row>
              <Row style={{ marginTop: "20px" }}>
                <p style={{ marginRight: "10px" }}>Bạn đã có tài khoản ?</p>
                <a
                  href="#!"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsLogin(true);
                  }}
                >
                  Đăng nhập
                </a>
              </Row>
            </>
          )}
        </Modal>
      </>
    </S.Header>
  );
}

export default Header;
