import React from "react";
import FormAddUser from "./FormAddUser";
import Header from "../../components/layouts/Header/Header";
import Footer from "../../components/layouts/Footer/Footer";
import { NavLink } from "react-router-dom";

export default function UserMnAddUser() {
  return (
    <div>
      <Header></Header>
      <div className="pt-20 flex bg-bgColor ">
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
        <div className="w-3/5">
          <div className="flex justify-between items-center mb-3 ">
            <div className="text-center">
              <p className="uppercase font-medium text-lg">Thêm người dùng</p>
            </div>
          </div>
          <div className="pl-20">
            <FormAddUser></FormAddUser>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
