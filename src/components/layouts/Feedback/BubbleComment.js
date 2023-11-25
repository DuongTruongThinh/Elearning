import React from "react";
import { Rate, ConfigProvider } from "antd";

const BubbleComment = ({ author }) => {
  return (
    <div>
      <div className="p-4 rounded-lg bg-white shadow feedback-triangle relative mb-6">
        <p className="text-gray-sm px-4 py-2 border-l-4">{author.text}</p>
      </div>
      <div className="flex gap-3 items-center ml-5">
        <img
          src={author.img}
          alt=""
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <h5>{author.name}</h5>
          <ConfigProvider
            theme={{
              token: {
                marginXS: 4,
              },
            }}
          >
            <Rate
              style={{ fontSize: 14, color: "#f9c32c" }}
              disabled
              defaultValue={4}
            ></Rate>
          </ConfigProvider>
        </div>
      </div>
    </div>
  );
};

export default BubbleComment;
