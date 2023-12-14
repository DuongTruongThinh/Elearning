import React from "react";
import { useSelector } from "react-redux";
import { ClockLoader } from "react-spinners";

const Spinner = () => {
  let { isLoading } = useSelector((state) => state.spinnerReducer);
  return isLoading ? (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "rgb(15 23 42)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 99999,
      }}
    >
      <ClockLoader size={100} color="#5567ff" />
    </div>
  ) : (
    <></>
  );
};

export default Spinner;
