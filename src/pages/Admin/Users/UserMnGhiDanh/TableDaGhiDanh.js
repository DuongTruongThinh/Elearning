import React, { useEffect, useState } from "react";
// import { userServ } from "../../api/api";
import { Button, Table, Tag, message, theme } from "antd";
import axios from "axios";
import { BASE_URL, TOKEN_CYBER } from "../../../../services/config";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function TableDaGhiDanh() {
  let params = useParams();
  let taiKhoan = params.id;
  const [listCourse, setListCourse] = useState([]);
  let { info } = useSelector((state) => {
    return state.userReducer;
  });
  let token = info.accessToken;
  let bearerToken = "Bearer " + token;
  function fetchlistCourse() {
    axios
      .post(
        `${BASE_URL}/QuanLyNguoiDung/LayDanhSachKhoaHocDaXetDuyet`,
        { taiKhoan: taiKhoan },
        {
          headers: {
            Authorization: bearerToken,
            TokenCybersoft: TOKEN_CYBER,
          },
        }
      )
      .then((res) => {
        setListCourse(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    axios
      .post(
        `${BASE_URL}/QuanLyNguoiDung/LayDanhSachKhoaHocDaXetDuyet`,
        { taiKhoan: taiKhoan },
        {
          headers: { Authorization: bearerToken, TokenCybersoft: TOKEN_CYBER },
        }
      )
      .then((res) => {
        setListCourse(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  let handleHuyGhiDanh = (khoaHoc) => {
    axios
      .post(
        `${BASE_URL}/QuanLyKhoaHoc/HuyGhiDanh`,
        {
          maKhoaHoc: khoaHoc,
          taiKhoan: taiKhoan,
        },
        {
          headers: { Authorization: bearerToken, TokenCybersoft: TOKEN_CYBER },
        }
      )
      .then((res) => {
        message.success("Xóa thành công");
        fetchlistCourse();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  let columnsHeader = [
    // { title: "Số thứ tự", dataIndex: "soThuTu", key: "tenKhoaHoc" },
    {
      title: "Tên khóa học",
      dataIndex: "tenKhoaHoc",
      key: "tenKhoaHoc",
    },
    {
      title: "Chờ xác nhận",
      render: (_, khoaHoc) => {
        return (
          <div className=" flex space-x-2">
            <Button
              onClick={() => {
                handleHuyGhiDanh(khoaHoc.maKhoaHoc);
              }}
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
      <Table dataSource={listCourse} columns={columnsHeader} className="" />
    </div>
  );
}
