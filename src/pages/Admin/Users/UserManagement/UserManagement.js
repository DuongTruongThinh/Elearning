import React from "react";
import TableUser from "./TableUser";
import Header from "../../../../components/layouts/Header/Header";
import { NavLink } from "react-router-dom";
import Footer from "../../../../components/layouts/Footer/Footer";
import Button from "../../../../components/Button/Button";
import PageSeparate from "../../../../components/PageSeparate/PageSeparate";
import { EditFilled, DeleteFilled } from "@ant-design/icons";

export default function UserManagement() {
  return (
    // <div className=" bg-bgColor">
    //   <div className="flex pt-20 pb-10 ">
    //     <div>
    //       <div className="flex items-center justify-between ">
    //         <div className="text-center">
    //           <p className="text-lg font-medium uppercase">
    //             Danh sách người dùng
    //           </p>
    //         </div>

    //         <NavLink to={`/user-management/add-user`}>
    //           <button
    //             type="primary"
    //             className="h-10 px-5 mb-3 text-sm font-medium tracking-wider text-green-600 duration-300 bg-white border border-green-600 rounded hover:bg-green-700 hover:text-white"
    //           >
    //             <i class="fa-solid fa-plus"></i> Thêm người dùng
    //           </button>
    //         </NavLink>
    //       </div>

    //       <TableUser className="pt-36"></TableUser>
    //     </div>
    //   </div>
    // </div>
    <section className="bg-white page-section">
      <div className="page-container">
        <div className="flex justify-between">
          <h3 className="text-4xl font-semibold font-title">
            Quản lý người dùng
          </h3>
          <NavLink to={`/admin/add-user`}>
            <button
              type="primary"
              className="h-10 px-5 mb-3 text-sm font-medium tracking-wider text-green-600 duration-300 bg-white border border-green-600 rounded hover:bg-green-700 hover:text-white"
            >
              <i class="fa-solid fa-plus"></i> Thêm người dùng
            </button>
          </NavLink>
        </div>

        <div>
          <PageSeparate>Danh sách người dùng</PageSeparate>
          <TableUser className="pt-36"></TableUser>
        </div>
      </div>
    </section>
  );
}
