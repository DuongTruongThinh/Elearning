import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import { userLocalStorage } from "../../services/localServices";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="banner bg-[url('https://images.unsplash.com/photo-1585661417298-8236a5f449aa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] h-[600px] relative pt-40">
      <div className="relative z-20 px-6 mx-auto text-white max-w-7xl">
        <h1 className="mb-4 text-6xl font-semibold">
          Thiên tài 1% là cảm hứng <br />
          và 99% là mồ hôi
        </h1>
        <p className="mb-12 text-2xl">
          Kỹ năng kinh doanh, công nghệ và sáng tạo được giảng dạy bởi các
          chuyên gia trong ngành. <br /> Khám phá một loạt các kỹ năng với các
          hướng dẫn chuyên nghiệp của chúng tôi.
        </p>
        <Button>KHÁM PHÁ KHÓA HỌC</Button>
        {!userLocalStorage.get() && (
          <button onClick={() => navigate("/login")} className="block mt-4">
            Bạn là giáo viên?
          </button>
        )}
      </div>
      <div className="absolute inset-0 z-10 bg-gray-800 bg-opacity-50 overlay"></div>
    </div>
  );
};

export default Banner;
