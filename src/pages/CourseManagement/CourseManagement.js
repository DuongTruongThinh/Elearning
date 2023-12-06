import React, { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import PageSeparate from "../../components/PageSeparate/PageSeparate";
import { courseServ } from "../../services/api";
import { EditFilled, DeleteFilled } from "@ant-design/icons";
import { notification } from "antd";

const CourseManagement = () => {
  const [catagory, setCatagory] = useState([]);
  const [listCourses, setListCourses] = useState([]);

  const fetchListCourses = async () => {
    try {
      const result = await courseServ.getCourses();
      setListCourses(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    courseServ
      .getCategoryList()
      .then((result) => {
        setCatagory(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    fetchListCourses();
  }, []);
  const handleDeleteCourse = (id) => {
    console.log(id);
    courseServ
      .deleteCourse(id)
      .then((result) => {
        notification.success({
          message: "Xóa thành công!",
          style: {
            margin: 0,
          },
        });
        fetchListCourses();
      })
      .catch((error) => {
        console.log(error);
        notification.error({
          message: `${error.response.data}`,
          style: {
            margin: "0 !important",
          },
          closeIcon: false,
        });
      });
  };
  return (
    <section className="page-section bg-bgColor">
      <div className="page-container">
        <div className="flex justify-between">
          <h3 className="font-title font-semibold text-4xl">Khóa học</h3>
          <Button type="gray-outline">Thêm khóa học</Button>
        </div>

        <div>
          <PageSeparate type="gray">{catagory[0]?.tenDanhMuc}</PageSeparate>
          <div className="grid grid-cols-4 gap-4">
            {listCourses &&
              listCourses.map((course, index) => (
                <div className="p-4 rounded border flex flex-col " key={index}>
                  <p className="h-32 mb-2">
                    <img
                      src={course.hinhAnh}
                      className="w-full h-full object-cover rounded"
                      alt=""
                    />
                  </p>
                  <h5 className="font-title font-medium text-base">
                    {course.tenKhoaHoc}
                  </h5>
                  <p>
                    Mã khóa học: <b>{course.maKhoaHoc}</b>
                  </p>
                  <div className="flex justify-between mb-3">
                    <span className="text-gray-500 font-medium">
                      {course.nguoiTao.hoTen}
                    </span>
                    <span className="text-gray-sm">{course.ngayTao}</span>
                  </div>
                  <div className="flex gap-2 mt-auto justify-end">
                    <Button type="primary">
                      <EditFilled />
                    </Button>
                    <Button
                      type="red"
                      onClick={() => handleDeleteCourse(course.maKhoaHoc)}
                    >
                      <DeleteFilled />
                    </Button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseManagement;
