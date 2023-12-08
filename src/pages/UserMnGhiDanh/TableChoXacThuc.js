import React, { useEffect, useState } from "react";
// import { userServ } from "../../api/api";
import { Button, Table, Tag, message, theme } from "antd";
import axios from "axios";
import { BASE_URL, TOKEN_CYBER } from "../../services/config";
import { useSelector } from "react-redux";

export default function TableChoXacThuc() {
  const [listCourse, setListCourse] = useState([]);
  let { info } = useSelector((state) => {
    return state.userReducer;
  });
  let token = info.accessToken;
  let bearerToken = "Bearer " + token;
  function fetchlistCourse() {
    axios
      .post(
        `${BASE_URL}/QuanLyNguoiDung/LayDanhSachKhoaHocChoXetDuyet`,
        { taiKhoan: info.taiKhoan },
        {
          headers: { Authorization: bearerToken, TokenCybersoft: TOKEN_CYBER },
        }
      )
      .then((res) => {
        console.log(res);
        setListCourse(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    axios
      .post(
        `${BASE_URL}/QuanLyNguoiDung/LayDanhSachKhoaHocChoXetDuyet`,
        { taiKhoan: info.taiKhoan },
        {
          headers: { Authorization: bearerToken, TokenCybersoft: TOKEN_CYBER },
        }
      )
      .then((res) => {
        console.log(res);
        setListCourse(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  let columnsHeader = [
    // { title: "Số thứ tự", dataIndex: "soThuTu", key: "tenKhoaHoc" },
    {
      title: "Tên khóa học",
      dataIndex: "tenKhoaHoc",
      key: "tenKhoaHoc",
    },
    {
      title: "Chờ xác nhận",
      render: (_, user) => {
        return (
          <div className=" flex space-x-2">
            <Button
              className="text-white bg-green-500 hover:bg-green-700 border-none hover:shadow-lg
            "
            >
              <span className="text-white">Xác thực</span>
            </Button>

            <Button
              className="text-white bg-red-500   border border-none hover:bg-red-600 hover:shadow-lg    
            "
            >
              <span className="text-white">Hủy</span>
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <div>
      <Table
        dataSource={listCourse}
        columns={columnsHeader}
        // className="page-container"
      />
    </div>
  );
}
