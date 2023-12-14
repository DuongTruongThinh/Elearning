import React, { useEffect, useState } from "react";
import PageSeparate from "../../components/PageSeparate/PageSeparate";
import { useNavigate, useParams } from "react-router-dom";
import { courseServ } from "../../services/api";
import {
  FavoriteBorderOutlined,
  AccessTime,
  PlayCircleOutlineOutlined,
  Star,
  StarBorder,
} from "@mui/icons-material";
import { Tooltip } from "antd";

const Courses = () => {
  const [listCode, setListCode] = useState([]);
  const navigate = useNavigate();
  const { courseCode } = useParams();

  useEffect(() => {
    courseServ
      .getCourseFromCategory(courseCode)
      .then((result) => {
        setListCode(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [courseCode]);
  return (
    listCode.length > 0 && (
      <div className="page-section pt-24">
        <div className="page-container">
          <PageSeparate>
            Khóa học {listCode[0].danhMucKhoaHoc.tenDanhMucKhoaHoc}
          </PageSeparate>
          <div className="grid grid-cols-4 gap-4 ">
            {listCode.map((course) => (
              <div
                key={course.maKhoaHoc}
                className="col-span-1 flex-col flex overflow-hidden rounded-lg border shadow-md cursor-pointer"
                onClick={() => navigate(`/detail-course/${course.maKhoaHoc}`)}
              >
                <img
                  src={course.hinhAnh}
                  className="h-[180px] object-cover w-full"
                  alt=""
                />

                <div
                  className="flex flex-col  px-[10px] py-3 "
                  style={{ borderBottom: "1px solid #dfe2e6" }}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                      <h5 className="font-semibold">{course.tenKhoaHoc}</h5>
                      <p className="text-gray-sm font-medium">
                        {course.nguoiTao.hoTen}
                      </p>
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
                  <div className="flex text-sm text-yellow-500">
                    <Star fontSize="small" />
                    <Star fontSize="small" />
                    <Star fontSize="small" />
                    <Star fontSize="small" />
                    <StarBorder fontSize="small" />
                  </div>
                </div>
                <div className="flex px-[10px] py-3 justify-between">
                  <div className="flex items-center text-xs text-gray-500 gap-x-1">
                    <AccessTime fontSize="small" />
                    <p>6 hours</p>
                  </div>
                  <div className="flex items-center text-xs text-gray-500  gap-x-1">
                    <PlayCircleOutlineOutlined fontSize="small" />
                    <p>12 lessons</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default Courses;
