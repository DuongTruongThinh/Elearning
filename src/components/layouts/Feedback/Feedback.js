import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import BubbleComment from "./BubbleComment";

const Feedback = () => {
  return (
    <div className="page-section bg-bgColor">
      <div className="page-container ">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold line-title relative inline-block mb-6">
            Phản hồi
          </h2>
          <p className="text-gray-500 text-sm">
            Những học viên trước đây đã trở thành chuyên gia sau khi học tập và
            <br />
            đạt được mục tiêu của họ đã có những lời nhận xét gì về chúng tôi?
          </p>
        </div>

        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
          loop={true}
        >
          <SwiperSlide>
            <BubbleComment
              author={{
                text: " Một khóa học tuyệt vời về cách bắt đầu. Giảng viên đã truyền đạt rất tốt mọi kiến thức cần thiết để trở thành một nhà phát triển React giỏi. Rất vui vì đã tham gia khóa học này. Cám ơn giảng viên rất nhiều. ",
                name: "Kevin Nicolas",
                img: "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <BubbleComment
              author={{
                text: "Một khóa học tuyệt vời về cách bắt đầu. Giảng viên rất thành thạo trong việc truyền đạt những kiến thức cần thiết để trở thành một nhà phát triển React giỏi. Rất hài lòng với khóa học này. Xin cảm ơn giảng viên rất nhiều!",
                name: "Kaito Kyoshi",
                img: "https://images.unsplash.com/photo-1482961674540-0b0e8363a005?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <BubbleComment
              author={{
                text: "Một khóa học tuyệt vời về cách bắt đầu. Giảng viên rất thành thạo trong việc truyền đạt những kiến thức cần thiết để trở thành một nhà phát triển React giỏi. Rất hài lòng với khóa học này. Xin cảm ơn giảng viên rất nhiều!",
                name: "Eren Yeager",
                img: "https://images.unsplash.com/photo-1655874819398-c6dfbec68ac7?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <BubbleComment
              author={{
                text: "Một khóa học tuyệt vời về cách bắt đầu. Giảng viên rất thành thạo trong việc truyền đạt những kiến thức cần thiết để trở thành một nhà phát triển React giỏi. Rất hài lòng với khóa học này. Xin cảm ơn giảng viên rất nhiều!",
                name: "Mikasa Ackerman",
                img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              }}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Feedback;
