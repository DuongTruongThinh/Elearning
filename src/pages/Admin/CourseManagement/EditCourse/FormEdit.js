import React, { useEffect, useState } from "react";
import { ConfigProvider, DatePicker, Form, Input, Select, message } from "antd";
import Button from "../../../../components/Button/Button";
import TextArea from "antd/es/input/TextArea";
import "moment/locale/vi";
import { courseServ } from "../../../../services/api";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const FormEdit = () => {
  const [catagory, setCatagory] = useState([]);
  const { infoUpdate } = useSelector((state) => state.courseReducer);
  const navigate = useNavigate();
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
  const onFinish = (values) => {
    const data = {
      ...values,
      luotXem: 0,
      danhGia: 0,
      biDanh: infoUpdate.biDanh,
      taiKhoanNguoiTao: infoUpdate.nguoiTao.taiKhoan,
      hinhAnh: infoUpdate.hinhAnh,
      ngayTao: infoUpdate.ngayTao,
    };
    courseServ
      .editCourse(data)
      .then((result) => {
        message.success("Cập nhật thành công");
        navigate("/admin/courses");
      })
      .catch((err) => {
        console.log(err);
        message.error(err.response.data);
      });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
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
          tenKhoaHoc: infoUpdate.tenKhoaHoc,
          maKhoaHoc: infoUpdate.maKhoaHoc,
          maDanhMucKhoahoc: infoUpdate.danhMucKhoaHoc.maDanhMucKhoahoc,
          maNhom: infoUpdate.maNhom,
          moTa: infoUpdate.moTa,
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
          <Input disabled />
        </Form.Item>

        <Form.Item
          label="Danh Mục Khóa Học"
          name="maDanhMucKhoahoc"
          className="col-span-6 font-semibold uppercase"
        >
          <Select>
            {catagory?.map((item, index) => (
              <Select.Option key={index} value={item.maDanhMuc}>
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
              message: "Vui lòng nhập chọn ngày tạo",
            },
          ]}
        >
          <DatePicker disabled format="DD/MM/YYYY" />
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
              message: "Vui lòng nhập link hình ảnh khóa học",
            },
          ]}
        >
          <input type="file" disabled />
        </Form.Item>

        <Form.Item className="col-span-12">
          <Button type="primary" htmlType="submit">
            Cập nhật
          </Button>
        </Form.Item>
      </Form>
    </ConfigProvider>
  );
};
export default FormEdit;
