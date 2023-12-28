import React from "react";
import { Button, Form, Input, Select, message } from "antd";
import { useNavigate } from "react-router-dom";
import { userLocalStorage } from "../../../../services/localServices";
import axios from "axios";
import { BASE_URL, TOKEN_CYBER } from "../../../../services/config";

export default function FormAddUser() {
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

  const FormAddUser = () => {
    const [form] = Form.useForm();
    let navigate = useNavigate();
    const onFinish = (values) => {
      axios
        .post(
          `${BASE_URL}/QuanLyNguoiDung/ThemNguoiDung`,
          {
            taiKhoan: values.taiKhoan,
            matKhau: values.matKhau,
            email: values.email,
            soDt: values.prefix + values.soDt,
            maNhom: values.maNhom,
            maLoaiNguoiDung: values.maLoaiNguoiDung,
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
          navigate(`/admin/user-management`);
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
      <div className=" bg-bgColor form-register">
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
            taiKhoan: "",
            matKhau: "",
            hoTen: "",
            email: "",
            soDt: "",
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
            name="maNhom"
            label="Mã nhóm:"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập mã nhóm",
              },
            ]}
          >
            <Select>
              <Option value="GP01">GP01</Option>
              <Option value="GP02">GP02</Option>
              <Option value="GP03">GP03</Option>
              <Option value="GP04">GP04</Option>
              <Option value="GP05">GP05</Option>
              <Option value="GP06">GP06</Option>
              <Option value="GP07">GP07</Option>
              <Option value="GP08">GP08</Option>
              <Option value="GP09">GP09</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="maLoaiNguoiDung"
            label="Mã loại người dùng:"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập mã loại người dùng",
              },
            ]}
          >
            <Select>
              <Option value="HV">HV</Option>
              <Option value="GV">GV</Option>
            </Select>
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
          <Form.Item {...tailFormItemLayout} className="flex justify-center">
            <Button
              type="primary"
              className="h-10 px-5 text-sm font-medium tracking-wider text-white uppercase duration-300 bg-blue-500 rounded hover:bg-blue-600"
              htmlType="submit"
            >
              Thêm
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  };
  return <div className="w-full">{FormAddUser()}</div>;
}
