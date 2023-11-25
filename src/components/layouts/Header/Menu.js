import React, { useState } from "react";
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
    setCurrent(e.key);
  };
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#fff",
          padding: 8,
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
        items={items}
        className="text-base font-medium text-gray-400 bg-transparent"
      />
    </ConfigProvider>
  );
};
export default NavMenu;
