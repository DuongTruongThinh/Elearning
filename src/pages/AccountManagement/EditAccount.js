import React from "react";
import Header from "../../components/layouts/Header/Header";
import Footer from "../../components/layouts/Footer/Footer";
import PageSeparate from "../../components/PageSeparate/PageSeparate";
import Button from "../../components/Button/Button";

const EditAccount = () => {
  return (
    <div>
      <Header />
      <div className="page-section mt-16 bg-bgColor">
        <div className="page-container">
          <h3 className="text-3xl font-semibold mb-5">Tài khoản</h3>
          <PageSeparate type="gray">Thông tin cơ bản </PageSeparate>
          <div className="w-1/2">
            <div className="mb-4">
              <label
                className="font-title inline-block mb-2 uppercase text-sm font-medium"
                htmlFor=""
              >
                Tên người dùng
              </label>
              <input
                type="text"
                className="w-full inline-block px-3 py-2 rounded-sm text-sm shadow outline-none border  focus-visible:border-primary"
                placeholder="Nhập tên người dùng ..."
              />
            </div>
            <div className="mb-4">
              <label
                className="font-title inline-block mb-2 uppercase text-sm font-medium"
                htmlFor=""
              >
                Email
              </label>
              <input
                type="email"
                className="w-full inline-block px-3 py-2 rounded-sm text-sm shadow outline-none border  focus-visible:border-primary"
                placeholder="Nhập địa chỉ email ..."
              />
            </div>
            <div className="mb-4">
              <label
                className="font-title inline-block mb-2 uppercase text-sm font-medium"
                htmlFor=""
              >
                Số điện thoại
              </label>
              <input
                type="text"
                className="w-full inline-block px-3 py-2 rounded-sm text-sm shadow outline-none border  focus-visible:border-primary"
                placeholder="Nhập số điện thoại ..."
              />
            </div>
            <Button type="primary">Cập nhật</Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EditAccount;
