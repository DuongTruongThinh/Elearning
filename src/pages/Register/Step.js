import React, { useEffect, useState } from "react";
import { Steps } from "antd";
import "../../styles/components/register.scss";
const StepRegister = () => {
  const [current, setCurrent] = useState(0);
  const onChange = (value) => {
    console.log("onChange:", value);
    setCurrent(value);
  };
  return (
    <div className="page-container StepRegister">
      <Steps
        className="flex justify-center items-stretch pt-24 pb-8"
        current={current}
        onChange={onChange}
        labelPlacement="vertical"
        items={[
          {
            title: <a href="/register">ĐĂNG KÝ</a>,
          },
          {
            title: <a href="/login">ĐĂNG NHẬP</a>,
          },
          {
            title: <a href="/">BẮT ĐẦU HỌC</a>,
          },
        ]}
      />
    </div>
  );
};
export default StepRegister;
