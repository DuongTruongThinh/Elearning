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
import { useNavigate, useParams } from "react-router-dom";
import { userLocalStorage } from "../../../../services/localServices";
import axios from "axios";
import { BASE_URL, TOKEN_CYBER } from "../../../../services/config";
import { useSelector } from "react-redux";

export default function FormGhiDanh() {
  const [listChuaDangKy, setListChuaDangKy] = useState([]);
  let { info } = useSelector((state) => {
    return state.userReducer;
  });
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
    axios
      .post(
        `${BASE_URL}/QuanLyNguoiDung/LayDanhSachKhoaHocChuaGhiDanh?TaiKhoan=${taiKhoan}`,
        { TaiKhoan: taiKhoan },
        {
          headers: {
            TokenCybersoft: TOKEN_CYBER,
            Authorization: "Bearer " + info.accessToken,
          },
        }
      )
      .then((res) => {
        setListChuaDangKy(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const GhiDanh = () => {
    const [form] = Form.useForm();
    let navigate = useNavigate();

    const onFinish = (values) => {
      axios
        .post(
          `${BASE_URL}/QuanLyKhoaHoc/GhiDanhKhoaHoc`,
          {
            maKhoaHoc: values.maKhoaHoc,
            taiKhoan: taiKhoan,
          },
          {
            headers: {
              TokenCybersoft: TOKEN_CYBER,
              Authorization: "Bearer " + userLocalStorage.get()?.accessToken,
            },
          }
        )
        .then((res) => {
          message.success("Thêm thành công");
          window.location.reload();
        })
        .catch((err) => {
          message.error(err.response);
          console.log(err);
        });
    };
    return (
      <div className="  form-register ">
        <Form
          className="w-full space-y-5"
          {...formItemLayout}
          form={form}
          labelWrap
          layout="vertical"
          name="register"
          onFinish={onFinish}
          //   style={{
          //     maxWidth: 600,
          //   }}
          scrollToFirstError
        >
          <Form.Item
            name="maKhoaHoc"
            label="Chọn khóa học:"
            rules={[
              {
                required: true,
                message: "Vui lòng chọn khóa học",
              },
            ]}
          >
            <Select>
              {listChuaDangKy.map((item, index) => {
                return (
                  <Option key={index} value={item.maKhoaHoc}>
                    {item.tenKhoaHoc}
                  </Option>
                );
              })}
            </Select>
          </Form.Item>
          <Form.Item {...tailFormItemLayout} className="flex justify-center">
            <Button
              type="primary"
              className="px-5 h-10 text-sm font-medium tracking-wider duration-300 rounded uppercase  bg-blue-500 text-white hover:bg-blue-600"
              htmlType="submit"
            >
              Ghi danh
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  };
  return <div className="w-full mb-3">{GhiDanh()}</div>;
}
