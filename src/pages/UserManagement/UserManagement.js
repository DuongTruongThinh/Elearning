import React from "react";
import TableUser from "./TableUser";
import Header from "../../components/layouts/Header/Header";
import { NavLink } from "react-router-dom";
import Footer from "../../components/layouts/Footer/Footer";

export default function UserManagement() {
  return (
    <div>
      <div className=" bg-bgColor">
        <Header></Header>
        <div className="pt-20 pb-10 flex ">
          <div className="h-screen w-1/5 hidden lg:block ">
            <div className="pb-5">
              <NavLink
                to={`/user-management`}
                className="pl-10 text-lg text-blue-700 mb-10"
              >
                <i class="fa-solid fa-user"></i> Quản lý người dùng
              </NavLink>
            </div>
            <NavLink
              to={`/admin/courses`}
              className="pl-10 text-lg text-blue-700"
            >
              <i class="fa-solid fa-book-open"></i> Quản lý khóa học
            </NavLink>
          </div>
          <div>
            <div className="flex justify-between items-center  ">
              <div className="text-center">
                <p className="uppercase font-medium text-lg">
                  Danh sách người dùng
                </p>
              </div>

              <NavLink to={`/user-management/add-user`}>
                <button
                  type="primary"
                  className="mb-3 px-5 h-10 text-sm font-medium tracking-wider duration-300 border rounded border-green-600   bg-white text-green-600 hover:bg-green-700 hover:text-white"
                >
                  <i class="fa-solid fa-plus"></i> Thêm người dùng
                </button>
              </NavLink>
            </div>

            <TableUser className="pt-36"></TableUser>
          </div>
        </div>
      </div>
      <Footer className="bg-white"></Footer>
    </div>
  );
}
