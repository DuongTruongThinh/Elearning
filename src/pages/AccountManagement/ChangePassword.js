import React from "react";
import Button from "../../components/Button/Button";
import Footer from "../../components/layouts/Footer/Footer";
import PageSeparate from "../../components/PageSeparate/PageSeparate";
import Header from "../../components/layouts/Header/Header";

const ChangePassword = () => {
  return (
    <div>
      <Header />
      <div className="mt-16 page-section bg-bgColor">
        <div className="page-container">
          <h3 className="mb-5 text-3xl font-semibold">Thay đổi mật khẩu</h3>
          <PageSeparate type="gray">Thay đổi mật khẩu </PageSeparate>
          <div className="w-1/2">
            <div className="mb-4">
              <label
                className="inline-block mb-2 text-sm font-medium uppercase font-title"
                htmlFor=""
              >
                Mật khẩu cũ
              </label>
              <input
                type="password"
                className="inline-block w-full px-3 py-2 text-sm border rounded-sm shadow outline-none focus-visible:border-primary"
                placeholder="Nhập mật khẩu cũ"
              />
            </div>
            <div className="mb-4">
              <label
                className="inline-block mb-2 text-sm font-medium uppercase font-title"
                htmlFor=""
              >
                Mật khẩu mới
              </label>
              <input
                type="password"
                className="inline-block w-full px-3 py-2 text-sm border rounded-sm shadow outline-none focus-visible:border-primary"
                placeholder="Nhập mật khẩu mới"
              />
            </div>
            <div className="mb-4">
              <label
                className="inline-block mb-2 text-sm font-medium uppercase font-title"
                htmlFor=""
              >
                Xác nhận mật khẩu
              </label>
              <input
                type="password"
                className="inline-block w-full px-3 py-2 text-sm border rounded-sm shadow outline-none focus-visible:border-primary"
                placeholder="Xác nhận mật khẩu mới"
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

export default ChangePassword;
