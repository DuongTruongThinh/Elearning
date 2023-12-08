import React from "react";
import { Subscriptions, Update, VerifiedUser } from "@mui/icons-material";

export default function BlogsComponent() {
  return (
    <div className="page-section bg-white py-5">
      <div className="page-container">
        <div className="grid grid-cols-3 text-center">
          <div className="col-span-1 flex px-2">
            <div className="h-16 w-16 rounded-[50%] bg-[#5567ff] flex justify-center items-center mr-4">
              <Subscriptions className="text-2xl text-white" />
              {/* <i class="material-icons text-white">subscriptions</i> */}
            </div>
            <div className="text-left w-[67%]">
              <div className="pb-1 font-title font-semibold  ">
                8,000+ khóa học
              </div>
              <p className="text-[#272c33b3] text-[13px]">
                Khám phá đa dạng các kỹ năng trong nhiều lĩnh vực khác nhau
              </p>
            </div>
          </div>
          <div className="col-span-1 flex px-2">
            <div className="h-16 w-16 rounded-[50%] bg-[#5567ff] flex justify-center items-center mr-4">
              <VerifiedUser className="text-2xl text-white" />
            </div>
            <div className="text-left w-[67%]">
              <div className="pb-1 font-semibold  font-title  ">
                Các chuyên gia trong ngành
              </div>
              <p className="text-[#272c33b3] text-[13px]">
                Lộ trình học chuyên nghiệp với sự hướng dẫn từ những người giỏi
                nhất
              </p>
            </div>
          </div>
          <div className="col-span-1 flex px-2">
            <div className="h-16 w-16 rounded-[50%] bg-[#5567ff] flex justify-center items-center mr-4">
              <Update className="text-2xl text-white" />
            </div>
            <div className="text-left w-[67%]">
              <div className="pb-1 font-semibold  font-title">
                Truy cập không giới hạn
              </div>
              <p className="text-[#272c33b3] text-[13px]">
                Mở khóa thư viện và học bất kỳ chủ đề nào chỉ với một lần đăng
                ký
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
