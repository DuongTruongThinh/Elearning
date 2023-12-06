import React from "react";
import FormAdding from "./FormAdding";

const AddCourse = () => {
  return (
    <div className="page-section bg-bgColor">
      <div className="page-container">
        <h3 className="font-title font-semibold text-4xl">Thêm khóa học</h3>
        <FormAdding />
      </div>
    </div>
  );
};

export default AddCourse;
