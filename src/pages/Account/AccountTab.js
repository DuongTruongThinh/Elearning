import React from "react";
import { Tabs } from "antd";
const onChange = (key) => {
  console.log(key);
};
let thongTinTaiKhoan = {
  chiTietKhoaHocGhiDanh: [],
  taiKhoan: "abcdefgh",
  matKhau: "123456@aA",
  hoTen: "Quam obcaecati et qu",
  soDT: "01234567889",
  maLoaiNguoiDung: "HV",
  maNhom: "GP01",
  email: "piritujoqu1@mailinator.com",
};
let renderThongTinTaiKhoan1 = () => {
  return (
    <div className="w-full lg:w-1/2 space-y-3">
      <p className="font-bold">
        <span>Email:</span>
        <span className="font-normal"> {thongTinTaiKhoan.email}</span>
      </p>
      <p className="font-bold">
        <span>Họ và tên:</span>
        <span className="font-normal"> {thongTinTaiKhoan.hoTen}</span>
      </p>
      <p className="font-bold">
        <span>Số điện thoại:</span>
        <span className="font-normal"> {thongTinTaiKhoan.soDT}</span>
      </p>
    </div>
  );
};
let renderThongTinTaiKhoan2 = () => {
  return (
    <div className="w-full lg:w-1/2 space-y-3">
      <p className="font-bold">
        <span>Tài khoản:</span>
        <span className="font-normal"> {thongTinTaiKhoan.email}</span>
      </p>
      <p className="font-bold">
        <span>Nhóm:</span>
        <span className="font-normal"> {thongTinTaiKhoan.hoTen}</span>
      </p>
      <p className="font-bold">
        <span>Đối tượng:</span>
        <span className="font-normal"> {thongTinTaiKhoan.soDT}</span>
      </p>
      <button
        type="primary"
        className="px-5 h-10 text-sm font-medium tracking-wider duration-300 rounded shadow-lg uppercase  bg-orange-500 text-white hover:bg-orange-600"
      >
        Cập nhật
      </button>
    </div>
  );
};
let danhMucKhoaHoc = [
  {
    maDanhMuc: "BackEnd",
    tenDanhMuc: "Lập trình Backend",
  },
  {
    maDanhMuc: "Design",
    tenDanhMuc: "Thiết kế Web",
  },
  {
    maDanhMuc: "DiDong",
    tenDanhMuc: "Lập trình di động",
  },
  {
    maDanhMuc: "FrontEnd",
    tenDanhMuc: "Lập trình Front end",
  },
  {
    maDanhMuc: "FullStack",
    tenDanhMuc: "Lập trình Full Stack",
  },
  {
    maDanhMuc: "TuDuy",
    tenDanhMuc: "Tư duy lập trình",
  },
];

const AccountTab = () => (
  <div className="bg-white p-10 shadow-md">
    <Tabs
      onChange={onChange}
      type="card"
      items={[
        {
          label: "Thông tin cá nhân",
          key: "1",
          children: [renderThongTinTaiKhoan1(), renderThongTinTaiKhoan2()],
        },
        { label: "Khóa học", key: "2", children: "Nội dung 2" },
      ]}
      //   items={new Array(3).fill(null).map((_, i) => {
      //     const id = String(i + 1);
      //     return {
      //       label: `Tab ${id}`,
      //       key: id,
      //       children: `Content of Tab Pane ${id}`,
      //     };
      //   })}
    />
  </div>
);
export default AccountTab;
