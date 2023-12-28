import React, { useState } from "react";
import FormEditUser from "./FormEditUser";
import { NavLink } from "react-router-dom";

export default function UserMnEditUser() {
  return (
    <div>
      <div className="flex pt-20 bg-bgColor ">
        <div className="hidden w-1/5 h-screen lg:block ">
          <div className="pb-5">
            <NavLink
              to={`/user-management`}
              className="pl-10 mb-10 text-lg text-blue-700"
            >
              <i class="fa-solid fa-user"></i> Quản lý người dùng
            </NavLink>
          </div>
          <NavLink to={`/`} className="pl-10 text-lg text-blue-700">
            <i class="fa-solid fa-book-open"></i> Quản lý khóa học
          </NavLink>
        </div>
        <div className="w-3/5">
          <div className="flex items-center justify-between mb-3 ">
            <div className="text-center">
              <p className="text-lg font-medium uppercase">
                Chỉnh sửa người dùng
              </p>
            </div>
          </div>
          <div className="pl-20">
            <FormEditUser></FormEditUser>
          </div>
        </div>
      </div>
    </div>
  );
}
