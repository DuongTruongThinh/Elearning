import React from "react";
import FormUpdate from "./FormUpdate";

const EditCourse = () => {
  return (
    <div className="page-section bg-bgColor">
      <div className="page-container">
        <h3 className="font-title font-semibold text-4xl">
          Chỉnh sửa khóa học
        </h3>
        <FormUpdate />
      </div>
    </div>
  );
};

export default EditCourse;
