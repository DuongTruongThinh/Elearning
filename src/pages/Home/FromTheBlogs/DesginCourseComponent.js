import React, { useEffect, useState } from "react";
import PageSeparate from "../../../components/PageSeparate/PageSeparate";
import { courseServ } from "../../../services/api";
import {
  AccessTime,
  FavoriteBorderOutlined,
  PlayCircleFilledOutlined,
  PlayCircleOutlineOutlined,
  Star,
  StarBorder,
} from "@mui/icons-material";
import { Tooltip } from "antd";
import { useNavigate } from "react-router-dom";

export default function DesginCourseComponent() {
  const [courses, setCourses] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    courseServ
      .getCourses()
      .then((result) => {
        setCourses(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return courses ? (
    <div className="page-section bg-bgColor">
      <div className="page-container">
        <PageSeparate type="gray">Khóa học phổ biến</PageSeparate>
        <div className="grid grid-cols-4 gap-4 ">
          {courses.map((course) => (
            <div
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

          {/* <div
            className="col-span-1 flex-col flex overflow-hidden rounded-lg"
            style={{
              border: "1px solid #dfe2e6",
              boxShadow:
                " 0 3px 3px -2px rgba(39,44,51,.1), 0 3px 4px 0 rgba(39,44,51,.04), 0 1px 8px 0 rgba(39,44,51,.02)",
            }}
          >
            <a
              href=""
              className="relative w-full h-[140px]"
              style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundImage:
                  "url(https://luma.humatheme.com/public/images/paths/flinto_430x168.png)",
                borderRadius: "0.5rem 0.5rem 0 0",
              }}
            >
              <span className="absolute top-0 left-0 right-0 bottom-0 bg-[#5567ff59]"></span>
            </a>

            <div
              className="flex flex-col  px-[10px] py-3 "
              style={{ borderBottom: "1px solid #dfe2e6" }}
            >
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <i>
                    <a href="" className="font-medium">
                      Learn Flinto
                    </a>
                  </i>
                  <small className="text-[#272c3380] font-medium">
                    Elijah Murray
                  </small>
                </div>
                <a href="">
                  <i class="material-icons text-[#272c3333]">favorite_border</i>
                </a>
              </div>
              <div className="flex">
                <i class="material-icons text-base text-[#f9c32c]">star</i>
                <i class="material-icons text-base text-[#f9c32c]">star</i>
                <i class="material-icons text-base text-[#f9c32c]">star</i>
                <i class="material-icons text-base text-[#f9c32c]">star</i>
                <i class="material-icons text-base text-[#f9c32c]">
                  star_border
                </i>
              </div>
            </div>
            <div className="flex px-[10px] py-3 justify-between">
              <div className="flex  items-center">
                <i class="material-icons text-[#272c3380] text-base mr-1">
                  access_time
                </i>
                <small className="text-[#272c3380]">6 hours</small>
              </div>
              <div className="flex  items-center">
                <i class="material-icons text-[#272c3380] text-base mr-1">
                  play_circle_outline
                </i>
                <small className="text-[#272c3380]">12 lessons</small>
              </div>
            </div>
          </div>
          <div
            className="col-span-1 flex-col flex overflow-hidden rounded-lg"
            style={{
              border: "1px solid #dfe2e6",
              boxShadow:
                " 0 3px 3px -2px rgba(39,44,51,.1), 0 3px 4px 0 rgba(39,44,51,.04), 0 1px 8px 0 rgba(39,44,51,.02)",
            }}
          >
            <a
              href=""
              className="relative w-full h-[140px]"
              style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundImage:
                  "url(https://luma.humatheme.com/public/images/paths/photoshop_430x168.png)",
                borderRadius: "0.5rem 0.5rem 0 0",
              }}
            >
              <span className="absolute top-0 left-0 right-0 bottom-0 bg-[#5567ff59]"></span>
            </a>

            <div
              className="flex flex-col  px-[10px] py-3 "
              style={{ borderBottom: "1px solid #dfe2e6" }}
            >
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <i>
                    <a href="" className="font-medium">
                      Learn Photoshop
                    </a>
                  </i>
                  <small className="text-[#272c3380] font-medium">
                    Elijah Murray
                  </small>
                </div>
                <a href="">
                  <i class="material-icons text-[#272c3333]">favorite_border</i>
                </a>
              </div>
              <div className="flex">
                <i class="material-icons text-base text-[#f9c32c]">star</i>
                <i class="material-icons text-base text-[#f9c32c]">star</i>
                <i class="material-icons text-base text-[#f9c32c]">star</i>
                <i class="material-icons text-base text-[#f9c32c]">star</i>
                <i class="material-icons text-base text-[#f9c32c]">
                  star_border
                </i>
              </div>
            </div>
            <div className="flex px-[10px] py-3 justify-between">
              <div className="flex  items-center">
                <i class="material-icons text-[#272c3380] text-base mr-1">
                  access_time
                </i>
                <small className="text-[#272c3380]">6 hours</small>
              </div>
              <div className="flex  items-center">
                <i class="material-icons text-[#272c3380] text-base mr-1">
                  play_circle_outline
                </i>
                <small className="text-[#272c3380]">12 lessons</small>
              </div>
            </div>
          </div>
          <div
            className="col-span-1 flex-col flex overflow-hidden rounded-lg"
            style={{
              border: "1px solid #dfe2e6",
              boxShadow:
                " 0 3px 3px -2px rgba(39,44,51,.1), 0 3px 4px 0 rgba(39,44,51,.04), 0 1px 8px 0 rgba(39,44,51,.02)",
            }}
          >
            <a
              href=""
              className="relative w-full h-[140px]"
              style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundImage:
                  "url(https://luma.humatheme.com/public/images/paths/figma_430x168.png)",
                borderRadius: "0.5rem 0.5rem 0 0",
              }}
            >
              <span className="absolute top-0 left-0 right-0 bottom-0 bg-[#5567ff59]"></span>
            </a>

            <div
              className="flex flex-col  px-[10px] py-3 "
              style={{ borderBottom: "1px solid #dfe2e6" }}
            >
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <i>
                    <a href="" className="font-medium">
                      Learn Figma
                    </a>
                  </i>
                  <small className="text-[#272c3380] font-medium">
                    Elijah Murray
                  </small>
                </div>
                <a href="">
                  <i class="material-icons text-[#272c3333]">favorite_border</i>
                </a>
              </div>
              <div className="flex">
                <i class="material-icons text-base text-[#f9c32c]">star</i>
                <i class="material-icons text-base text-[#f9c32c]">star</i>
                <i class="material-icons text-base text-[#f9c32c]">star</i>
                <i class="material-icons text-base text-[#f9c32c]">star</i>
                <i class="material-icons text-base text-[#f9c32c]">
                  star_border
                </i>
              </div>
            </div>
            <div className="flex px-[10px] py-3 justify-between">
              <div className="flex  items-center">
                <i class="material-icons text-[#272c3380] text-base mr-1">
                  access_time
                </i>
                <small className="text-[#272c3380]">6 hours</small>
              </div>
              <div className="flex  items-center">
                <i class="material-icons text-[#272c3380] text-base mr-1">
                  play_circle_outline
                </i>
                <small className="text-[#272c3380]">12 lessons</small>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}
