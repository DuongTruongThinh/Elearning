import React, { useEffect, useState } from "react";
import {
  AutoComplete,
  Button,
  Cascader,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  message,
} from "antd";
// import { BASE_URL, configHeaders } from "../../api/config";
import { useNavigate } from "react-router-dom";
import { registerApi } from "../../services/api";
import { userLocalStorage } from "../../services/localServices";
import axios from "axios";
import { BASE_URL, TOKEN_CYBER } from "../../services/config";
let info = userLocalStorage.get();
const { Option } = Select;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 10,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 24,
      offset: 0,
    },
  },
};

const FormUpdateAccount = () => {
  const [form] = Form.useForm();
  let navigate = useNavigate();
  const onFinish = (values) => {
    axios
      .put(
        `${BASE_URL}/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
        {
          taiKhoan: values.taiKhoan,
          matKhau: values.matKhau,
          email: values.email,
          soDt: values.prefix + values.soDt,
          maNhom: "GP01",
          maLoaiNguoiDung: "HV",
          hoTen: values.hoTen,
        },
        {
          headers: {
            TokenCybersoft: TOKEN_CYBER,
            Authorization: "Bearer " + userLocalStorage.get()?.accessToken,
          },
        }
      )
      .then((res) => {
        message.success("Cập nhật thành công");
        navigate("/login");
      })
      .catch((err) => {
        message.error(err.response);
        console.log(err);
      });
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="83">+83</Option>
        <Option value="84">+84</Option>
        <Option value="85">+85</Option>
      </Select>
    </Form.Item>
  );

  return (
    <div className=" bg-bgColor pt-24 form-register pb-8">
      <div className="page-container">
        <div className="md:flex justify-center">
          <div className="sm:w-full md:w-1/2 lg:w-1/2">
            <Form
              className="w-full space-y-5"
              {...formItemLayout}
              form={form}
              labelWrap
              layout="vertical"
              name="register"
              onFinish={onFinish}
              initialValues={{
                prefix: "+84",
                taiKhoan: info.taiKhoan,
                matKhau: info.matKhau,
                hoTen: info.hoTen,
                email: info.email,
                soDt: info.soDt,
              }}
              style={{
                maxWidth: 600,
              }}
              scrollToFirstError
            >
              <Form.Item
                label="Tài khoản:"
                name="taiKhoan"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập tên tài khoản",
                  },
                ]}
              >
                <Input placeholder="VD: NguyenVanAn..." />
              </Form.Item>

              <Form.Item
                name="matKhau"
                label="Mật khẩu:"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập mật khẩu",
                  },
                ]}
                hasFeedback
              >
                <Input.Password placeholder="VD: 123@MotHaiBA..." />
              </Form.Item>

              <Form.Item
                label="Họ và tên:"
                name="hoTen"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập họ và tên",
                  },
                ]}
              >
                <Input placeholder="VD: Nguyễn Văn An..." />
              </Form.Item>

              <Form.Item
                name="email"
                label="E-mail:"
                rules={[
                  {
                    type: "email",
                    message: "Email không hợp lệ",
                  },
                  {
                    required: true,
                    message: "Vui lòng nhập email",
                  },
                ]}
              >
                <Input placeholder="VD: nva123@gmail.com..." />
              </Form.Item>
              <Form.Item
                name="soDt"
                label="Số điện thoại:"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập số điện thoại",
                  },
                ]}
              >
                <Input
                  addonBefore={prefixSelector}
                  style={{
                    width: "100%",
                  }}
                />
              </Form.Item>
              <Form.Item
                {...tailFormItemLayout}
                className="flex justify-center"
              >
                <Button
                  type="primary"
                  className="px-5 h-10 text-sm font-medium tracking-wider duration-300 rounded uppercase  bg-blue-500 text-white hover:bg-blue-600"
                  htmlType="submit"
                >
                  Cập nhật
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FormUpdateAccount;
