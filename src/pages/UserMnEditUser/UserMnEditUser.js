import React, { useState } from "react";
import Header from "../../components/layouts/Header/Header";
import FormUpdateAccount from "../UpdateAccount/FormUpdateAccount";
import FormEditUser from "./FormEditUser";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Footer from "../../components/layouts/Footer/Footer";

export default function UserMnEditUser() {
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
              <p className="uppercase font-medium text-lg">
                Chỉnh sửa người dùng
              </p>
            </div>
          </div>
          <div className="pl-20">
            <FormEditUser></FormEditUser>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
