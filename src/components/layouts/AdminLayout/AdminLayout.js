import React from "react";
import {
  UserOutlined,
  KeyOutlined,
  ReadFilled,
  PlusOutlined,
  ReadOutlined,
} from "@ant-design/icons";
import { ConfigProvider, Layout, Menu, Tooltip, theme, Popover } from "antd";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Search from "../../Search";
import { PeopleAltOutlined, PersonAddAltOutlined } from "@mui/icons-material";
const { Content, Footer, Sider } = Layout;

const AdminLayout = () => {
  const navigate = useNavigate();
  const items = [
    {
      key: 1,
      icon: <UserOutlined />,
      label: "Quản lý người dùng",
      children: [
        {
          key: "userList",
          icon: <PeopleAltOutlined />,
          label: "Danh sách người dùng",
          onClick: () => navigate("/admin/user-management"),
        },
        {
          key: "addUser",
          icon: <PersonAddAltOutlined />,
          label: "Thêm người dùng",
          onClick: () => navigate("/admin/add-user"),
        },
      ],
    },
    {
      key: 2,
      icon: <ReadFilled />,
      label: "Quản lý khóa học",
      children: [
        {
          key: "allCourses",
          icon: <ReadOutlined />,
          label: "Tất cả khóa học",
          onClick: () => navigate("/admin/courses"),
        },
        {
          key: "addCourse",
          icon: <PlusOutlined />,
          label: "Thêm khóa học",
          onClick: () => navigate("/admin/add-course"),
        },
      ],
    },
  ];
  const content = (
    <>
      <Link
        to=""
        className="block px-2 py-2 text-base text-gray-500 duration-100 hover:text-black "
        // onClick={handleFeatureDeveloping}
      >
        Thông tin cá nhân
      </Link>
      <Link
        to=""
        className="block px-2 py-2 text-base text-gray-500 duration-100 hover:text-black"
        // onClick={handleFeatureDeveloping}
      >
        Khóa học của tôi
      </Link>
      <Link
        to=""
        className="block px-2 py-2 text-base text-gray-500 duration-100 hover:text-black"
        // onClick={handleFeatureDeveloping}
      >
        Cài đặt
      </Link>
      <Link
        className="block px-2 py-2 text-base text-gray-500 duration-100 hover:text-black"
        // onClick={handleLogOut}
      >
        Đăng xuất
      </Link>
    </>
  );
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            headerPadding: "10px 50px 10px 220px",
          },
        },
      }}
    >
      <Layout>
        <Sider
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
            top: 0,
            bottom: 0,
            zIndex: 10000,
          }}
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {}}
          onCollapse={(collapsed, type) => {}}
          width={220}
        >
          <Link
            to={"/"}
            className="flex items-center py-2 pl-5 text-lg font-bold cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width={48}
              height={48}
              viewBox="0 0 60 60"
            >
              <linearGradient
                id="h~IBoWElkyMIR4x0RFnIHa_11GYjnycDCTi_gr1"
                x1="33.006"
                x2="33.006"
                y1="12.995"
                y2="55.002"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset={0} stopColor="#1a6dff" />
                <stop offset={1} stopColor="#c822ff" />
              </linearGradient>
              <path
                fill="url(#h~IBoWElkyMIR4x0RFnIHa_11GYjnycDCTi_gr1)"
                d="M16.676,55.001c-0.7,0-1.443-0.075-2.236-0.232c-2.641-0.711-4.742-2.63-6.312-5.718	C3.99,40.913,4.555,26.125,6.433,21.096c0.167-0.75,0.487-1.396,0.797-2.021l0.153-0.311c1.25-2.414,3.413-3.956,5.947-4.253	c2.299-0.271,4.583,0.55,5.953,2.139c1.859,2.157,2.094,5.616,1.929,8.886c2.517-3.791,5.779-7.926,8.839-10.275	c3.302-2.452,6.845-2.946,9.488-1.325c1.623,0.994,4.023,3.513,3.782,9.665c3.361-4.03,9.9-10.798,14.735-9.062	c1.452,0.447,2.572,1.648,2.812,3.045c0.571,2.373-0.649,4.161-2.864,7.408c-0.916,1.342-2.055,3.012-3.365,5.144	c-2.596,4.226-4.307,7.739-5.682,10.562c-1.486,3.051-2.56,5.255-3.913,6.583c-2.322,2.592-5.848,3.449-8.935,2.14	c-3.443-1.461-5.592-5.173-6.075-10.256c-0.461,1.004-0.904,2.015-1.34,3.011C25.814,48.752,23.078,55.001,16.676,55.001z M14.209,16.459c-0.214,0-0.43,0.013-0.646,0.038c-1.095,0.128-3.122,0.71-4.393,3.163l-0.148,0.302	c-0.277,0.559-0.539,1.086-0.648,1.619c-0.011,0.053-0.026,0.105-0.046,0.156c-1.743,4.546-2.273,18.824,1.582,26.408	c1.303,2.563,2.98,4.137,4.984,4.678c6.088,1.206,8.515-3.566,11.967-11.45c0.999-2.281,2.031-4.64,3.264-6.859	c0.228-0.41,0.707-0.608,1.159-0.473c0.45,0.134,0.746,0.562,0.712,1.03c-0.453,6.339,1.376,11.015,4.893,12.507	c2.289,0.972,4.922,0.311,6.709-1.681c1.151-1.132,2.161-3.206,3.56-6.076c1.394-2.862,3.129-6.424,5.776-10.733	c1.336-2.173,2.49-3.865,3.417-5.224c2.23-3.27,2.919-4.375,2.558-5.878c-0.142-0.817-0.846-1.353-1.486-1.551	c-3.902-1.394-11.053,6.081-14.657,11.117c-0.271,0.377-0.767,0.52-1.197,0.341c-0.43-0.179-0.68-0.63-0.603-1.089	c0.936-5.559,0.035-9.627-2.474-11.163c-1.922-1.177-4.627-0.722-7.238,1.215c-3.826,2.938-8.064,8.974-10.528,13.247	c-0.235,0.408-0.725,0.595-1.172,0.453c-0.449-0.144-0.736-0.582-0.689-1.05l0.052-0.519c0.347-3.458,0.872-8.684-1.15-11.03	C16.949,17.006,15.625,16.459,14.209,16.459z"
              />
              <linearGradient
                id="h~IBoWElkyMIR4x0RFnIHb_11GYjnycDCTi_gr2"
                x1="32.992"
                x2="32.992"
                y1={17}
                y2="50.993"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset={0} stopColor="#6dc7ff" />
                <stop offset={1} stopColor="#e6abff" />
              </linearGradient>
              <path
                fill="url(#h~IBoWElkyMIR4x0RFnIHb_11GYjnycDCTi_gr2)"
                d="M16.61,50.993c-0.399,0-0.831-0.042-1.285-0.126c-1.396-0.415-2.618-1.635-3.631-3.628	c-3.561-7.002-3.09-20.633-1.498-24.785l0.087-0.229l0.05-0.24c0.057-0.279,0.263-0.694,0.481-1.134l0.167-0.34	c0.957-1.844,2.573-2.051,3.223-2.051c0.837,0,1.623,0.308,2.05,0.803C17.715,20.958,17.163,26.255,17,29	c-0.062,1.042-0.036,1.881,0.333,4.154c0.202,1.245,1.774,1.681,2.582,0.712c4.069-4.873,9.687-13.218,12.572-15.434	C33.719,17.52,35.021,17,36.115,17c0.809,0,1.444,0.288,1.944,0.878c0.461,0.545,1.364,6.859,1.296,12.473	c-0.018,1.493,1.807,2.222,2.813,1.119c4.477-4.912,12.324-13.211,14.226-13.211c0.126,0,0.229,0.015,0.313,0.045l0.126,0.042	c0.047,0.015,0.09,0.04,0.121,0.062l0.01,0.044c0.158,0.658-0.424,1.585-2.265,4.285c-0.939,1.377-2.108,3.091-3.469,5.304	c-2.698,4.393-4.457,8.003-5.87,10.904c-1.261,2.589-2.258,4.634-3.118,5.479l-0.132,0.138c-0.846,0.942-1.927,1.461-3.045,1.461	c-1.058,0-2.054-0.468-2.878-1.354c-0.747-0.802-1.604-5.844-2.408-11.69c-0.297-2.158-3.148-2.726-4.25-0.847	c-1.926,3.282-3.898,7.066-4.499,8.437C22.2,47.032,20.279,50.993,16.61,50.993z"
              />
            </svg>
            <span className="hidden text-2xl text-white lg:inline-block font-logo">
              eloky
            </span>
          </Link>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["4"]}
            items={items}
          />
        </Sider>
        <Layout>
          <div className="pl-[240px] bg-bgColor pr-12 py-3 flex justify-between items-center">
            {/* <div className="flex items-center justify-between rounded w-60 bg-slate-200">
              <input
                type="text"
                placeholder="Tìm kiếm khóa học..."
                className="flex-1 px-3 py-2 bg-transparent outline-none"
              />
              <button className="p-2 text-lg">
                <SearchOutlined />
              </button>
            </div> */}
            <Search type="light" className="ml-0" />
            <span className="cursor-pointer">
              <ConfigProvider
                theme={{
                  token: {
                    sizePopupArrow: 20,
                  },
                }}
              >
                <Popover
                  content={content}
                  trigger="click"
                  placement="bottomLeft"
                  className="shadow-sm"
                >
                  <img
                    className="w-12 h-12 rounded-full"
                    src="https://img.icons8.com/plasticine/100/user-male-circle.png"
                    alt="user-male-circle"
                  />
                </Popover>
              </ConfigProvider>
            </span>
          </div>
          <Content>
            <div
              style={{
                paddingLeft: 220,
                minHeight: 360,
                background: colorBgContainer,
              }}
            >
              <Outlet />
            </div>
          </Content>
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            ©2023 Created by Cyber Team
          </Footer>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};
export default AdminLayout;
