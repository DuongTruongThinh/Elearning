import React, { useEffect, useState } from "react";
import { ConfigProvider, Menu, Popover } from "antd";
import { courseServ } from "../../../services/api";
import { Link, NavLink, useNavigate } from "react-router-dom";
const items = [
  {
    label: "Khóa học",
    key: "courses",
  },
  {
    label: "Học phí",
    key: "price",
  },
  {
    label: "Đội ngũ",
    key: "teams",
  },
];

const NavMenu = () => {
  const [current, setCurrent] = useState("home");
  const [category, setCategory] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    courseServ
      .getCategoryList()
      .then((result) => {
        setCategory(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const content = (
    <div>
      {category.map((item) => (
        <NavLink
          to={`/courses/${item.maDanhMuc}`}
          className="text-base px-2 py-2 block text-gray-500 hover:text-black duration-100"
          key={item.maDanhMuc}
          onClick={() => navigate("/")}
        >
          {item.tenDanhMuc}
        </NavLink>
      ))}
    </div>
  );
  const onClick = (e) => {
    setCurrent(e.key);
  };
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#fff",
          padding: 8,
          colorSplit: "transparent",
        },
        components: {
          Menu: {
            itemHoverColor: "#fff",
            activeBarHeight: 0,
            itemSelectedColor: "#fff",
            itemHoverBg: "#fff",
            itemMarginInline: 8,
            itemMarginBlock: 8,
          },
        },
      }}
    >
      <Menu
        disabledOverflow={true}
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        className="text-base font-medium text-gray-400 bg-transparent "
      >
        {items.map((item) => {
          if (item.key === "courses") {
            return (
              <Menu.Item key={item.key}>
                <Popover
                  content={content}
                  trigger="click"
                  placement="bottomLeft"
                >
                  <span>{item.label}</span>
                </Popover>
              </Menu.Item>
            );
          } else {
            return <Menu.Item key={item.key}>{item.label}</Menu.Item>;
          }
        })}
      </Menu>
    </ConfigProvider>
  );
};
export default NavMenu;
