import React from "react";
import FormEdit from "./FormEdit";

const EditCourse = () => {
  return (
    <div className="page-section bg-bgColor">
      <div className="page-container">
        <h3 className="text-4xl font-semibold font-title">
          Chỉnh sửa khóa học
        </h3>
        <FormEdit />
      </div>
    </div>
  );
};

export default EditCourse;
