import React, { useState } from "react";
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

const FormRegister = () => {
  const [form] = Form.useForm();
  let navigate = useNavigate();
  const onFinish = (values) => {
    registerApi(values)
      .then((res) => {
        message.success("Đăng ký thành công");
        navigate("/login");
      })
      .catch((err) => {
        // message.error(err.response);
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
    <div className=" bg-bgColor pt-8 form-register pb-8">
      <div className="page-container">
        <div className="md:flex justify-center">
          <div className="sm:w-full md:w-1/2 lg:w-1/2">
            <Form
              className="w-full"
              {...formItemLayout}
              form={form}
              labelWrap
              layout="vertical"
              name="register"
              onFinish={onFinish}
              initialValues={{
                prefix: "+84",
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
                  Đăng ký
                </Button>
              </Form.Item>
            </Form>
          </div>
          <div class="sm:w-full md:w-1/2 lg:w-1/2 md:ml-10">
            <div className="p-4 border border-[#d9d9d9] rounded-lg shadow-md flex justify-center items-center  bg-white">
              <div className="card-body">
                <p className="card-name">Tổng kết mua hàng</p>
                <div className="d-flex mb-8pt">
                  <div className="flex justify-between ">
                    <strong className="card-header">Đăng ký</strong>
                    <strong>Học sinh</strong>
                  </div>
                </div>
                <div className="alert alert-soft-warning mb-3">
                  <div className="d-flex flex-wrap align-items-start">
                    <div
                      class="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 mt-3"
                      role="alert"
                    >
                      <p class="font-bold">
                        <span className="mr-2">
                          <i class="fa-solid fa-check"></i>
                        </span>
                        Dành cho học viên
                      </p>
                      <p className="text-sm mt-1">
                        Truy cập vào hơn 1.000 khóa học chất lượng cao.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="divide-y divide-gray-300">
                  <div className="flex justify-between mb-3">
                    <strong className="card-header">Giá</strong>
                    <strong>Chỉ 200.000 VND/tháng</strong>
                  </div>
                  <div>
                    <div className="mt-3">
                      <span className="text-blue-600 ">
                        <i class="fas fa-check-square"></i>{" "}
                      </span>
                      <strong>Điều kiện và điều khoản</strong>
                    </div>
                    <p className="text-sm text-gray-500 italic mt-1">
                      Bằng cách chọn và tiếp tục, tôi đồng ý với Điều khoản sử
                      dụng của Weloky
                    </p>
                  </div>
                  <a href="/login">
                    <h3 className="text-sm mt-3 text-right">
                      Bạn đã có tài khoản?{" "}
                      <span className="text-blue-800">Đăng nhập</span>
                    </h3>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FormRegister;
