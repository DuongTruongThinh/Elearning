import React, { useEffect, useState } from "react";
// import { userServ } from "../../api/api";
import { Button, Table, Tag, message, theme } from "antd";
import axios from "axios";
import { BASE_URL, TOKEN_CYBER } from "../../services/config";
import { useSelector } from "react-redux";

export default function TableUser() {
  const [listUser, setListUser] = useState([]);
  /**
   * 1. tạo button delete trong thead và tbody
   * 2. viết service delete user
   * 3. gắn vào button
   * 4. fetch get list sau khi xoá thành công
   *
   */
  let { info } = useSelector((state) => {
    return state.userReducer;
  });
  let token = info.accessToken;

  let bearerToken = "Bearer " + token;

  function fetchListUser() {
    axios
      .get(`${BASE_URL}/QuanLyNguoiDung/LayDanhSachNguoiDung`, {
        headers: {
          TokenCybersoft: TOKEN_CYBER,
        },
      })
      .then((res) => {
        console.log(res);
        setListUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    axios
      .get(`${BASE_URL}/QuanLyNguoiDung/LayDanhSachNguoiDung`, {
        headers: {
          TokenCybersoft: TOKEN_CYBER,
        },
      })
      .then((res) => {
        console.log(res);
        setListUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  let handleDelete = (taiKhoan) => {
    console.log(TOKEN_CYBER);
    console.log(bearerToken);
    axios
      .delete(
        `${BASE_URL}/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,

        {
          headers: { Authorization: bearerToken, TokenCybersoft: TOKEN_CYBER },
        }
      )
      .then((res) => {
        fetchListUser();
        message.success("Xoá thành công");
      })
      .catch((err) => {
        console.log(err);
        message.error(err.response.data);
      });
    // gọi api xoá
  };
  let columnsHeader = [
    {
      title: "Họ tên",
      dataIndex: "hoTen",
      key: "hoTen",
    },
    {
      title: "Tài khoản",
      dataIndex: "taiKhoan",
      key: "taiKhoan",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Người dùng",
      dataIndex: "maLoaiNguoiDung",
      key: "maLoaiNguoiDung",
      render: (text) => {
        if (text == "HV") {
          return <Tag color="green">Học viên</Tag>;
        } else {
          return <Tag color="red">Giáo vụ</Tag>;
        }
      },
    },
    { title: "Số điện thoại", dataIndex: "soDt", key: "soDt" },
    {
      title: "Action",
      render: (_, user) => {
        return (
          <div className="flex space-x-2">
            <Button
              onClick={() => {
                handleDelete(user.taiKhoan);
              }}
              className="text-white bg-green-500 hover:bg-green-700 border-none hover:shadow-lg
            "
            >
              <span className="text-white">Ghi danh</span>
            </Button>
            <Button
              onClick={() => {
                handleDelete(user.taiKhoan);
              }}
              className="text-white bg-orange-400 hover:bg-orange-600  border-none hover:shadow-lg
            "
            >
              <span className="text-white">Sửa</span>
            </Button>
            <Button
              onClick={() => {
                handleDelete(user.taiKhoan);
              }}
              className="text-white bg-red-400   border border-none hover:bg-red-500 hover:shadow-lg    
            "
            >
              <span className="text-white">Xóa</span>
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <div>
      <Table dataSource={listUser} columns={columnsHeader} />
    </div>
  );
}
