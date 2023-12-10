import React, { useEffect, useState } from "react";
import Header from "../../components/layouts/Header/Header";
import { courseServ } from "../../services/api";
import Button from "../../components/Button/Button";
import { PlayCircleOutlined, CheckOutlined } from "@ant-design/icons";
import TeacherInfo from "./TeacherInfo";
import PageSeparate from "../../components/PageSeparate/PageSeparate";
import CollapseCourse from "./CollapseCourse";
import { detailData } from "../../data/DetailData";
import Feedback from "../../components/layouts/Feedback/Feedback";
import Footer from "../../components/layouts/Footer/Footer";
import { useParams } from "react-router-dom";

const DetailCourse = () => {
  const [course, setCourse] = useState({});
  const { idCourse } = useParams();
  useEffect(() => {
    courseServ
      .getListCourse(idCourse)
      .then((result) => {
        setCourse(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    course && (
      <div>
        <div className="py-16 mt-16 bg-primary">
          <div className="page-container ">
            <h2 className="mb-4 text-5xl lg:text-6xl font-semibold text-white">
              {course.tenKhoaHoc}
            </h2>
            <p className="max-w-2xl mb-8 text-md lg:text-xl text-white text-opacity-50">
              {course.moTa}
            </p>
            <div className="flex gap-3">
              <Button type="outline">
                <span className="mr-1">Xem Trailer</span> <PlayCircleOutlined />
              </Button>
              <Button>Học thử</Button>
            </div>
          </div>
        </div>

        <TeacherInfo info={course.nguoiTao} />
        <section className="page-section bg-bgColor">
          <div className="page-container">
            <PageSeparate type="gray">Mục Lục</PageSeparate>

            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 lg:col-span-7 ">
                {detailData.map((data) => (
                  <CollapseCourse
                    key={data.key}
                    label={data.label}
                    lessions={data.lessionArr}
                  ></CollapseCourse>
                ))}
              </div>
              <div className="col-span-12 lg:col-span-5">
                <div className="p-4 border border-[#d9d9d9] rounded-lg shadow flex flex-col items-center bg-white">
                  <img
                    src={course.hinhAnh}
                    className="object-cover mb-3 w-60"
                    alt=""
                  />
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-semibold">
                      <sup className="underline">đ</sup>349.000
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                      <sup className="underline">đ</sup>849.000
                    </span>
                  </div>
                  <h4 className="mb-6 font-semibold text-slate-800">
                    {course.tenKhoaHoc}
                  </h4>
                  <Button type="red">Đăng ký ngay</Button>
                  <p className="mt-2 text-sm">
                    Bạn đã có tài khoản chưa?{" "}
                    <button className="text-gray-500 duration-300 hover:text-primary">
                      Đăng nhập
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT COURSE */}

        <section className="page-section">
          <div className="page-container">
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 md:col-span-7">
                <PageSeparate>Về khóa học</PageSeparate>
                <p className="mb-3 text-sm text-gray-sm">
                  Khóa học React là chương trình dạy thư viện JavaScript React
                  để xây dựng giao diện người dùng. Nó bao gồm các chủ đề như
                  thành phần React, JSX, quản lý trạng thái, định tuyến và xử lý
                  sự kiện. Học viên học cách tạo thành phần tái sử dụng và hiểu
                  về DOM ảo của React. Khóa học bao gồm dự án thực hành và bài
                  tập để rèn kỹ năng phát triển ứng dụng thực tế.
                </p>
                <p className="text-sm text-gray-sm">
                  Sau khóa học, học viên có khả năng xây dựng ứng dụng web hiện
                  đại, đáp ứng và mở rộng bằng React. Đây là khóa học quan trọng
                  cho nhà phát triển web muốn nâng cao kỹ năng phát triển phía
                  frontend.
                </p>
              </div>
              <div className="col-span-12 md:col-span-5 text-gray-sm">
                <PageSeparate>Những gì bạn sẽ học</PageSeparate>
                <div>
                  <div className="flex gap-3 mb-2">
                    <CheckOutlined />
                    <span>Suy nghĩ và tư duy như một chuyên gia</span>
                  </div>
                  <div className="flex gap-3 mb-2">
                    <CheckOutlined />
                    <span>Quản lý và sử dụng state</span>
                  </div>
                  <div className="flex gap-3 mb-2">
                    <CheckOutlined />
                    <span>Thực hành và xây dựng dự án thực tế</span>
                  </div>
                  <div className="flex gap-3 mb-2">
                    <CheckOutlined />
                    <span>Kiến thức cơ bản về React</span>
                  </div>
                  <div className="flex gap-3 mb-2">
                    <CheckOutlined />
                    <span>Kiến thức nâng cao về React</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT AUTHOR */}

        <section className="page-section">
          <div className="page-container">
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 md:col-span-7">
                <h3 className="mb-3 text-2xl font-semibold">
                  Thông tin giảng viên
                </h3>
                <p className="text-gray-sm mb-6">
                  {course?.nguoiTao?.hoTen && (
                    <span>{course?.nguoiTao?.hoTen} </span>
                  )}
                  một nhà phát triển phần mềm tại LearnD*ash, sở hữu hơn 20 năm
                  kinh nghiệm trong lĩnh vực phát triển phần mềm. Anh ấy đã nuôi
                  dưỡng đam mê với phương pháp phát triển phần mềm Agile - đặc
                  biệt là phương pháp Lean.
                </p>
                <PageSeparate>Thông tin thêm</PageSeparate>
              </div>
              <div className="col-span-12 md:col-span-5 flex items-center flex-col">
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="object-cover w-20 h-20 rounded-full mb-3"
                />
                <h5 className="text-lg font-semibold">
                  {course?.nguoiTao?.hoTen}
                </h5>
                <p className="text-gray-sm mb-3">React, Web Develoment</p>
                <div className="flex gap-3">
                  <Button type="primary-outline">Theo dõi</Button>
                  <Button type="gray-outline">Xem hồ sơ</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Feedback></Feedback>
      </div>
    )
  );
};

export default DetailCourse;
