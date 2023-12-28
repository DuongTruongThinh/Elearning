import React from "react";
import FormAddUser from "./FormAddUser";
import Header from "../../../../components/layouts/Header/Header";
import Footer from "../../../../components/layouts/Footer/Footer";
import { NavLink } from "react-router-dom";
import TableUser from "../UserManagement/TableUser";
import PageSeparate from "../../../../components/PageSeparate/PageSeparate";

export default function UserMnAddUser() {
  return (
    // <div className="flex pt-20 bg-bgColor ">
    //   <div className="hidden w-1/5 h-screen lg:block ">
    //     <div className="pb-5">
    //       <NavLink
    //         to={`/user-management`}
    //         className="pl-10 mb-10 text-lg text-blue-700"
    //       >
    //         <i class="fa-solid fa-user"></i> Quản lý người dùng
    //       </NavLink>
    //     </div>
    //     <NavLink to={`/`} className="pl-10 text-lg text-blue-700">
    //       <i class="fa-solid fa-book-open"></i> Quản lý khóa học
    //     </NavLink>
    //   </div>
    //   <div className="w-3/5">
    //     <div className="flex items-center justify-between mb-3 ">
    //       <div className="text-center">
    //         <p className="text-lg font-medium uppercase">Thêm người dùng</p>
    //       </div>
    //     </div>
    //     <div className="pl-20">
    //       <FormAddUser></FormAddUser>
    //     </div>
    //   </div>
    // </div>
    <section className="bg-bgColor page-section">
      <div className="page-container">
        <h3 className="text-4xl font-semibold font-title">
          Quản lý người dùng
        </h3>

        <div>
          <PageSeparate type="gray">Thêm người dùng</PageSeparate>
          <FormAddUser></FormAddUser>
        </div>
      </div>
    </section>
  );
}
