import React, { useEffect, useState } from "react";
import {
  Checkbox,
  ConfigProvider,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Select,
  Upload,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import Button from "../../../components/Button/Button";
import TextArea from "antd/es/input/TextArea";
import moment from "moment/moment";
import "moment/locale/vi";
import { courseServ } from "../../../services/api";
import { userLocalStorage } from "../../../services/localServices";
const onFinish = (values) => {
  const ngayTao = moment(values.ngayTao.$d.toUTCString()).format("L");

  const data = {
    ...values,
    ngayTao,
    luotXem: 0,
    danhGia: 0,
    taiKhoanNguoiTao: userLocalStorage?.get().taiKhoan,
  };
  courseServ
    .addCourse(data)
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
  console.log(data);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
const FormAdding = () => {
  const [catagory, setCatagory] = useState([]);
  useEffect(() => {
    courseServ
      .getCategoryList()
      .then((result) => {
        setCatagory(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <ConfigProvider
      theme={{
        components: {
          Form: {
            labelFontSize: 16,
            verticalLabelPadding: "0",
          },
        },
        token: {
          fontSize: 14,
          fontFamily: "Exo, sans-serif",
          colorPrimary: "#5567ff",
        },
      }}
    >
      <Form
        size="large"
        name="basic"
        labelAlign="left"
        labelWrap={true}
        labelCol={{
          span: 24,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="grid grid-cols-12 gap-x-4"
      >
        <Form.Item
          colon={false}
          label="Tên khóa học"
          name="tenKhoaHoc"
          className="font-semibold uppercase col-span-6"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập tên khóa học",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          colon={false}
          label="Mã khóa học"
          name="maKhoaHoc"
          className="font-semibold uppercase col-span-6"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập mã khóa học",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Danh Mục Khóa Học"
          name="maDanhMucKhoaHoc"
          className="font-semibold uppercase col-span-6"
        >
          <Select>
            {catagory?.map((item) => (
              <Select.Option key={item} value={item.maDanhMuc}>
                {item.tenDanhMuc}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="Mã nhóm"
          name="maNhom"
          className="font-semibold uppercase col-span-3"
        >
          <Select value="GP09">
            <Select.Option value="GP09">GP09</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="ngayTao"
          label="Ngày tạo"
          className="font-semibold uppercase col-span-3"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập chọn ngày tạo",
            },
          ]}
        >
          <DatePicker />
        </Form.Item>

        <Form.Item
          label="Mô tả"
          name="moTa"
          className="font-semibold uppercase col-span-12"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập mô tả khóa học",
            },
          ]}
        >
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item
          colon={false}
          label="Liên kết hình ảnh"
          name="hinhAnh"
          className="font-semibold uppercase col-span-12"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập link hình ảnh khóa học",
            },
          ]}
        >
          <input type="file" />
        </Form.Item>

        {/* <Form.Item
          label="Hình ảnh khóa học"
          name="hinhAnh"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          className="font-semibold uppercase col-span-12"
        >
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                Upload
              </div>
            </div>
          </Upload>
        </Form.Item> */}

        <Form.Item className="col-span-12">
          <Button type="primary" htmlType="submit">
            Thêm khóa học
          </Button>
        </Form.Item>
      </Form>
    </ConfigProvider>
  );
};
export default FormAdding;
