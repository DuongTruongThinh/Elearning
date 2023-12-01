import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BASE_URL, configHeader } from "../../services/config";
import { Button, Form, Input, message } from "antd";
// import { loginAction } from "../../redux/reducer/action/user";
// import { loginApi } from "../../services/api";
import { SET_INFO } from "../../redux/constant/user";
import { userLocalStorage } from "../../services/localServices";

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const FormLogin = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const onFinish = (values) => {
    console.log("Success:", values);
    axios
      .post(`${BASE_URL}/QuanLyNguoiDung/DangNhap`, values, {
        headers: configHeader(),
      })
      .then((res) => {
        // đẩy info lên sau khi đăng nhập thành công
        let action = { type: SET_INFO, payload: res.data };
        dispatch(action);
        // đẩy data xuống local storage
        userLocalStorage.set(res.data);
        message.success("Đăng nhập thành công");
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        message.error("Tài khoản hoặc mật khẩu không chính xác");
        console.log(err);
      });
  };
  return (
    <div className="pt-28  bg-bgColor pb-10">
      <div className="page-container flex justify-center mb-7">
        <Form
          className="w-full space-y-5"
          layout="vertical"
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 20,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="TÀI KHOẢN:"
            name="taiKhoan"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập vào tài khoản của bạn!",
              },
            ]}
          >
            <Input className="mt-3 shadow-md leading-10 w-full" />
          </Form.Item>

          <Form.Item
            label="MẬT KHẨU:"
            name="matKhau"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập vào mật khẩu của bạn!",
              },
            ]}
          >
            <Input.Password className="mt-3 shadow-md leading-10" />
          </Form.Item>
          <p className="flex justify-end">
            <a href="/" className="italic text-right text-gray-500">
              Quên mật khẩu?
            </a>
          </p>
          <Form.Item>
            <div className="flex justify-center">
              <Button
                type="primary"
                className="px-5 h-10 text-sm font-medium tracking-wider duration-300 rounded uppercase  bg-blue-500 text-white hover:bg-blue-600"
                htmlType="submit"
              >
                Đăng nhập
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
      <div class="login-page-separator justify-content-center m-0 gray">
        <div class="login-page-separator__text gray-600">
          Hoặc đăng nhập với
        </div>
      </div>
      <div className=" flex flex-col md:flex-row lg:flex-row justify-center items-center">
        <div>
          <button className=" w-48 bg-blue-800 text-white px-3 h-10 rounded shadow-md m-3 hover:bg-blue-900">
            <a href="/">
              <i class="fa-brands fa-facebook-f"></i> Login with Facebook
            </a>
          </button>
        </div>
        <div>
          <button className="w-48 bg-blue-400 text-white px-3 h-10 rounded shadow-md m-3 hover:bg-blue-500">
            <a href="/" className="twitter btn">
              <i class="fa-brands fa-twitter"></i> Login with Twitter
            </a>
          </button>
        </div>
        <div>
          <button className="w-48 bg-red-500 text-white px-3 h-10 rounded shadow-md m-3 hover:bg-red-600">
            <a href="/" className="google btn">
              <i class="fa-brands fa-google-plus-g"></i> Login with Google+
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};
export default FormLogin;
