import React from "react";
import { Collapse, ConfigProvider } from "antd";

const CollapseCourse = ({ label, lessions }) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Collapse: {
            contentPadding: 0,
            headerBg: "#fff",
          },
        },
      }}
    >
      <Collapse
        className="mb-6 shadow"
        expandIconPosition="end"
        items={[
          {
            key: lessions.text,
            label: <h5 className="font-semibold text-slate-800">{label}</h5>,
            children: (
              <div>
                {lessions.map((item) => (
                  <div
                    key={item.text}
                    className="flex justify-between p-3 border-b-2 cursor-pointer last:border-b-0"
                  >
                    <div className="flex items-center gap-3 ">
                      <span className="text-lg">{item.icons}</span>
                      <p>{item.text}</p>
                    </div>
                    <span>{item.time}</span>
                  </div>
                ))}
              </div>
            ),
          },
        ]}
      />
    </ConfigProvider>
  );
};

export default CollapseCourse;
