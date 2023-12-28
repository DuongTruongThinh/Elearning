import React, { useEffect, useState } from "react";
import { ConfigProvider, DatePicker, Form, Input, Select } from "antd";
import Button from "../../../../components/Button/Button";
import TextArea from "antd/es/input/TextArea";
import moment from "moment/moment";
import "moment/locale/vi";
import { courseServ } from "../../../../services/api";
import { userLocalStorage } from "../../../../services/localServices";
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
  courseServ
    .addImageCourse(values.hinhAnh)
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
// const normFile = (e) => {
//   if (Array.isArray(e)) {
//     return e;
//   }
//   return e?.fileList;
// };
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
          className="col-span-6 font-semibold uppercase"
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
          className="col-span-6 font-semibold uppercase"
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
          className="col-span-6 font-semibold uppercase"
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
          className="col-span-3 font-semibold uppercase"
        >
          <Select value="GP09">
            <Select.Option value="GP09">GP09</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="ngayTao"
          label="Ngày tạo"
          className="col-span-3 font-semibold uppercase"
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
          className="col-span-12 font-semibold uppercase"
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
          className="col-span-12 font-semibold uppercase"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập link hình ảnh khóa học",
            },
          ]}
        >
          <input type="file" />
        </Form.Item>

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
