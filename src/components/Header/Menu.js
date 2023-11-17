import React, { useState } from "react";
import { MailOutlined, SettingOutlined } from "@ant-design/icons";
import { ConfigProvider, Menu } from "antd";
const items = [
  {
    label: "Trang chủ",
    key: "home",
  },
  {
    label: "Khóa học",
    key: "SubMenu",
    children: [
      {
        type: "group",
        label: "Item 1",
        children: [
          {
            label: "Option 1",
            key: "setting:1",
          },
          {
            label: "Option 2",
            key: "setting:2",
          },
        ],
      },
      {
        type: "group",
        label: "Item 2",
        children: [
          {
            label: "Option 3",
            key: "setting:3",
          },
          {
            label: "Option 4",
            key: "setting:4",
          },
        ],
      },
    ],
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
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  console.log(current);
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#fff",
          padding: 8,
        },
        components: {
          Menu: {
            horizontalLineHeight: 2,
            itemHoverColor: "#fff",
          },
        },
      }}
    >
      <Menu
        disabledOverflow={true}
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
        className="text-base font-medium text-gray-400 bg-transparent"
      />
    </ConfigProvider>
  );
};
export default NavMenu;
