import React from "react";
import TableChoXacThuc from "./TableChoXacThuc";
import TableDaGhiDanh from "./TableDaGhiDanh";
import Header from "../../components/layouts/Header/Header";
import Footer from "../../components/layouts/Footer/Footer";
import { NavLink } from "react-router-dom";
import FormGhiDanh from "./FormGhiDanh";

export default function UserMnGhiDanh() {
  return (
    <div>
      <Header></Header>
      <div className="flex pt-20 pb-10">
        <div className="h-screen w-1/5 hidden lg:block ">
          <div className="pb-5">
            <NavLink
              to={`/user-management`}
              className="pl-10 text-lg text-blue-700 mb-10"
            >
              <i class="fa-solid fa-user"></i> Quản lý người dùng
            </NavLink>
          </div>
          <NavLink to={`/`} className="pl-10 text-lg text-blue-700">
            <i class="fa-solid fa-book-open"></i> Quản lý khóa học
          </NavLink>
        </div>
        <div className="pl-10 w-3/5 flex-col justify-center">
          <FormGhiDanh></FormGhiDanh>
          <p className="text-lg uppercase text-center font-medium mb-3">
            Danh sách khóa học chờ xác thực
          </p>
          <TableChoXacThuc></TableChoXacThuc>
          <p className="text-lg uppercase text-center font-medium mb-3">
            Danh sách khóa học đã ghi danh
          </p>
          <TableDaGhiDanh></TableDaGhiDanh>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
