import React, { useEffect, useState } from "react";
import { ConfigProvider, DatePicker, Form, Input, Select, message } from "antd";
import Button from "../../../../components/Button/Button";
import TextArea from "antd/es/input/TextArea";
import moment from "moment/moment";
import "moment/locale/vi";
import { courseServ } from "../../../../services/api";
import { userLocalStorage } from "../../../../services/localServices";
import { useNavigate } from "react-router-dom";

const FormAdding = () => {
  const [catagory, setCatagory] = useState([]);
  const [selectedImage, setSelectedImage] = useState();
  const navigate = useNavigate();
  const handleChangeFile = (e) => {
    let file = e.target.files[0];
    setSelectedImage(file);
  };
  const onFinish = async (values) => {
    const ngayTao = moment(values.ngayTao.$d.toUTCString()).format("L");
    let formData = new FormData();

    const data = {
      ...values,
      ngayTao,
      luotXem: 0,
      danhGia: 0,
      taiKhoanNguoiTao: userLocalStorage?.get().taiKhoan,
      hinhAnh: selectedImage,
    };
    for (let key in data) {
      formData.append(key, data[key]);
    }
    try {
      await courseServ.addImageCourse(formData);
      message.success("Thêm khóa học thành công");
      navigate("/admin/courses");
    } catch (error) {
      console.log(error);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
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
          <input type="file" onChange={handleChangeFile} />
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
