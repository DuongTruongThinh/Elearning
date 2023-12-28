import React, { useEffect, useState } from "react";
import { Button, Form, Input, Select, message } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { userLocalStorage } from "../../../../services/localServices";
import axios from "axios";
import { BASE_URL, TOKEN_CYBER } from "../../../../services/config";
import { useSelector } from "react-redux";

export default function FormEditUser() {
  let { info } = useSelector((state) => {
    return state.userReducer;
  });
  const [danhSachUser, setDanhSachUser] = useState([]);
  let params = useParams();
  let taiKhoan = params.id;
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
  useEffect(() => {
    axios({
      method: "GET",
      url: `${BASE_URL}/QuanLyNguoiDung/TimKiemNguoiDung`,
      data: {
        MaNhom: "",
        tuKhoa: params.id,
      },
      headers: {
        TokenCybersoft: TOKEN_CYBER,
      },
    })
      .then((res) => {
        setDanhSachUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  let timTaiKhoan = () => {
    if (danhSachUser != null) {
      let index = danhSachUser.findIndex((item) => item.taiKhoan === taiKhoan);
      return index !== -1 ? index : null;
    }
  };
  let taiKhoanCanTim = danhSachUser[timTaiKhoan()];
  const FormEditUser = () => {
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
            maLoaiNguoiDung: taiKhoanCanTim.maLoaiNguoiDung,
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
          navigate(`/user-management/${info.taiKhoan}`);
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
    if (taiKhoanCanTim)
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
              taiKhoan: taiKhoanCanTim.taiKhoan,
              matKhau: taiKhoanCanTim.matKhau,
              hoTen: taiKhoanCanTim.hoTen,
              email: taiKhoanCanTim.email,
              soDt: taiKhoanCanTim.soDt,
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
            <Form.Item {...tailFormItemLayout} className="flex justify-center">
              <Button
                type="primary"
                className="h-10 px-5 text-sm font-medium tracking-wider text-white uppercase duration-300 bg-blue-500 rounded hover:bg-blue-600"
                htmlType="submit"
              >
                Cập nhật
              </Button>
            </Form.Item>
          </Form>
        </div>
      );
  };
  return <div className="w-full">{FormEditUser()}</div>;
}
