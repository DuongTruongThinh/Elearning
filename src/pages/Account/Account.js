import React, { useEffect, useState } from "react";
import Header from "../../components/layouts/Header/Header";
import Footer from "../../components/layouts/Footer/Footer";
import "../../styles/components/account.scss";
import { NavLink, Navigate, useNavigate, useParams } from "react-router-dom";
import { Tabs, message } from "antd";
import { BASE_URL, TOKEN_CYBER } from "../../services/config";
import { userLocalStorage } from "../../services/localServices";
import axios from "axios";
export default function Account() {
  const [account, setAccount] = useState({});
  const onChange = (key) => {
    console.log(key);
  };
  let token = userLocalStorage.get().accessToken;
  let bearerToken = "Bearer " + token;
  let params = useParams();
  let taiKhoan = { taiKhoan: params.id };
  useEffect(
    () => {
      axios
        .post(`${BASE_URL}/QuanLyNguoiDung/ThongTinTaiKhoan`, taiKhoan, {
          headers: {
            TokenCybersoft: TOKEN_CYBER,
            Authorization: bearerToken,
          },
        })
        .then((res) => {
          setAccount(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    { account }
  );
  let handleHuyKhoaHoc = (index) => {
    let data = {
      taiKhoan: account.taiKhoan,
      maKhoaHoc: account.chiTietKhoaHocGhiDanh[index].maKhoaHoc,
    };
    axios
      .post(`${BASE_URL}/QuanLyKhoaHoc/HuyGhiDanh`, data, {
        headers: {
          TokenCybersoft: TOKEN_CYBER,
          Authorization: bearerToken,
        },
      })
      .then((res) => {
        console.log(res);
        message.success("Hủy thành công");
        axios
          .post(`${BASE_URL}/QuanLyNguoiDung/ThongTinTaiKhoan`, taiKhoan, {
            headers: {
              TokenCybersoft: TOKEN_CYBER,
              Authorization: bearerToken,
            },
          })
          .then((res) => {
            setAccount(res.data);
            // console.log(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  let renderThongTinTaiKhoan1 = (thongTinTaiKhoan) => {
    if (thongTinTaiKhoan != null) {
      return (
        <div className="w-full lg:w-1/2 space-y-3">
          <p className="font-bold">
            <span>Email:</span>
            <span className="font-normal"> {thongTinTaiKhoan.email}</span>
          </p>
          <p className="font-bold">
            <span>Tài khoản:</span>
            <span className="font-normal"> {thongTinTaiKhoan.taiKhoan}</span>
          </p>
          <p className="font-bold">
            <span>Đối tượng:</span>
            <span className="font-normal">
              {" "}
              {thongTinTaiKhoan.maLoaiNguoiDung}
            </span>
          </p>
        </div>
      );
    }
  };
  let renderThongTinTaiKhoan2 = (thongTinTaiKhoan) => {
    if (thongTinTaiKhoan != null) {
      return (
        <div className="w-full lg:w-1/2 space-y-3">
          <p className="font-bold">
            <span>Họ và tên:</span>
            <span className="font-normal"> {thongTinTaiKhoan.hoTen}</span>
          </p>
          <p className="font-bold">
            <span>Nhóm:</span>
            <span className="font-normal"> {thongTinTaiKhoan.maNhom}</span>
          </p>
          <p className="font-bold">
            <span>Số điện thoại:</span>
            <span className="font-normal"> {thongTinTaiKhoan.soDT}</span>
          </p>
          <div>
            <NavLink to={`/update-account/${params.id}`}>
              <button
                type="primary"
                className="px-5 h-10 text-sm font-medium tracking-wider duration-300 rounded shadow-lg uppercase  bg-orange-500 text-white hover:bg-orange-600"
              >
                Cập nhật
              </button>
            </NavLink>
          </div>
        </div>
      );
    }
  };
  let renderKhoaHoc = (thongTinTaiKhoan) => {
    console.log(thongTinTaiKhoan);
    if (
      thongTinTaiKhoan != null &&
      thongTinTaiKhoan.chiTietKhoaHocGhiDanh != null
    ) {
      return (
        <div className="w-full space-y-3 pt-5">
          {/* <p>KHÓA HỌC CỦA TÔI</p> */}

          {thongTinTaiKhoan.chiTietKhoaHocGhiDanh.map((item, index) => {
            return (
              <div
                className="lg:flex md:flex justify-center py-3 shadow-sm"
                key={index}
              >
                <div className="w-1/4">
                  <img
                    src={item.hinhAnh}
                    className="h-32 w-32 object-fill"
                  ></img>
                </div>
                <div className="w-1/2 space-y-2">
                  <p>
                    <span className="font-medium">Tên khóa học: </span>
                    <span>{item.tenKhoaHoc}</span>
                  </p>
                  <p>
                    <span className="font-medium">Mô tả khóa học: </span>
                    <span>{item.moTa}</span>
                  </p>
                  <p>
                    <span className="font-medium">Đánh giá: </span>
                    {item.danhGia}/10
                  </p>
                  <button
                    onClick={() => handleHuyKhoaHoc(index)}
                    type="primary"
                    className="px-5 h-10 text-sm font-medium tracking-wider duration-300 rounded uppercase  bg-red-500 text-white hover:bg-red-600"
                  >
                    HỦY ĐĂNG KÝ
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      );
    }
  };
  return (
    <div>
      <Header></Header>
      <div className="border-b border-gray-400">
        <div className="page-container ">
          <div className="pt-24 pb-10 lg:flex justify-between items-center lg:flex-row-reverse">
            <div className="sm:w-full md:w-2/3 lg:w-2/3 flex justify-end">
              <img
                src="/img/account-banner.jpg"
                className="h-40 object-contain"
                alt="ảnh bị lỗi"
              />
            </div>
            <div className="sm:w-full md:w-1/3 lg:w-1/3">
              <p className="text-xl font-bold">THÔNG TIN CÁ NHÂN</p>
              <p className="text-gray-500"> Thông tin học viên</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" py-10 bg-bgColor">
        <div className="page-container">
          <div className="bg-white p-10 ">
            <Tabs
              onChange={onChange}
              type="card"
              items={[
                {
                  label: "Thông tin cá nhân",
                  key: "1",
                  children: [
                    renderThongTinTaiKhoan1(account),
                    renderThongTinTaiKhoan2(account),
                  ],
                },
                {
                  label: "Khóa học",
                  key: "2",
                  children: [renderKhoaHoc(account)],
                },
              ]}
            />
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
