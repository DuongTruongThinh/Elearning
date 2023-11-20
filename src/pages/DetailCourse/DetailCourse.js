import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { courseServ } from "../../services/api";
import Button from "../../components/Button/Button";
import { PlayCircleOutlined } from "@ant-design/icons";
import TeacherInfo from "./TeacherInfo";
import PageSeparate from "../../components/PageSeparate/PageSeparate";
import { ConfigProvider, Divider } from "antd";

const DetailCourse = () => {
  const [course, setCourse] = useState({});
  useEffect(() => {
    courseServ
      .getListCourse()
      .then((result) => {
        setCourse(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(course);
  return (
    course && (
      <div>
        <Header />

        <div className="py-16 mt-16 bg-primary">
          <div className="page-container">
            <h2 className="mb-4 text-6xl font-semibold text-white">
              {course.tenKhoaHoc}
            </h2>
            <p className="max-w-2xl mb-8 text-xl text-white text-opacity-50">
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
        <section className="page-section">
          <div className="page-container">
            <PageSeparate>Mục Lục</PageSeparate>

            <div className="grid grid-cols-12">
              <div className="col-span-7 bg-red-400">a</div>
              <div className="col-span-5">b</div>
            </div>
          </div>
        </section>
      </div>
    )
  );
};

export default DetailCourse;
