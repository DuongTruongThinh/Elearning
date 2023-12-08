import React from "react";
import PageSeparate from "../../../components/PageSeparate/PageSeparate";
import { FavoriteBorderOutlined } from "@mui/icons-material";
import { KeyOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import { LearningPathData } from "../../../data/HomeData";

export default function FromTheBlogs2Component() {
  return (
    <div className="page-section bg-bgColor">
      <div className="page-container">
        <PageSeparate type="gray">Lộ trình học tập</PageSeparate>
        <div className="grid grid-cols-3 gap-3">
          {LearningPathData.map((item) => (
            <div
              key={item.id}
              className="learning-path col-span-1 px-3 py-[10px] mb-[26px] rounded-lg bg-white relative shadow border"
            >
              <div className="flex items-center justify-between">
                <div className=" flex">
                  <div className="flex justify-center items-center">
                    <div className="rounded o relative mr-3">
                      <img
                        src={item.img}
                        className="h-10 w-10 rounded"
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col">
                      <h6 className="font-semibold">{item.title}</h6>
                      <p className="text-gray-sm">
                        <span>{item.numberCourse}</span> khóa học
                      </p>
                    </div>
                  </div>
                </div>
                <span>
                  <Tooltip
                    title="Thêm vào ưa thích"
                    color="#fff"
                    overlayInnerStyle={{ color: "black", fontWeight: 500 }}
                  >
                    <FavoriteBorderOutlined className="cursor-pointer text-gray-400" />
                  </Tooltip>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
