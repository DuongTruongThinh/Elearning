import React from "react";
import Header from "../../components/layouts/Header/Header";
import Footer from "../../components/layouts/Footer/Footer";
import AccountTab from "./AccountTab";
import "../../styles/components/account.scss";
export default function Account() {
  return (
    <div>
      <Header></Header>
      <div className="border-b border-gray-400">
        <div className="page-container ">
          <div className="pt-24 pb-10 lg:flex justify-between items-center lg:flex-row-reverse">
            <div className="sm:w-full md:w-2/3 lg:w-2/3 flex justify-end">
              <img
                src="/img/account-banner.jpg"
                className="h-40 object-contain"
                alt="ảnh bị lỗi"
              />
            </div>
            <div className="sm:w-full md:w-1/3 lg:w-1/3">
              <p className="text-xl font-bold">THÔNG TIN CÁ NHÂN</p>
              <p className="text-gray-500"> Thông tin học viên</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" py-10 bg-bgColor">
        <div className="page-container">
          <AccountTab className=""></AccountTab>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
