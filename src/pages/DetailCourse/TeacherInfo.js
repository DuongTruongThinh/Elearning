import React from "react";
import { ClockCircleOutlined, ProjectFilled } from "@ant-design/icons";
import { ConfigProvider, Rate } from "antd";

const TeacherInfo = ({ info }) => {
  return (
    info && (
      <div className="bg-white border-2 border-b-gray-100 ">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between sm:h-16 page-container">
          <div className="flex sm:items-center flex-col sm:flex-row gap-x-5">
            <div className="flex items-center gap-3 p-4 sm:p-0 border-b sm:border-b-0">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="object-cover w-10 h-10 rounded-full"
              />
              <div>
                <h5 className="font-semibold text-gray-800">{info.hoTen}</h5>
                <p className="text-gray-sm">Giảng viên</p>
              </div>
            </div>
            <div className="flex items-center gap-2 p-4 sm:p-0 border-b sm:border-b-0">
              <ClockCircleOutlined
                style={{ fontSize: "20px" }}
                className="text-gray-400"
              />
              <span className="text-sm text-gray-800">2h 40m</span>
            </div>
            <div className="flex items-center gap-2 p-4 sm:p-0 border-b sm:border-b-0">
              <ProjectFilled
                style={{ fontSize: "20px" }}
                className="text-gray-400"
              />
              <span className="text-sm text-gray-800 ">Nhập môn</span>
            </div>
          </div>
          <div className="sm:text-center p-4 sm:p-0">
            <ConfigProvider
              theme={{
                token: {
                  marginXS: 4,
                },
              }}
            >
              <Rate disabled defaultValue={4}></Rate>
            </ConfigProvider>

            <p className="text-gray-sm">232 đánh giá</p>
          </div>
        </div>
      </div>
    )
  );
};

export default TeacherInfo;
