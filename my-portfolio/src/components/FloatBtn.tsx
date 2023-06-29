import React, { useEffect, useState } from "react";
// import redux and reducers
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { setCurScroll } from "../redux/headerPosition";

import "../styles/css/FloatBtn.css";

function readFile(file: File) {
  let fileReader = new FileReader();
  const result = fileReader.readAsText(file);
  console.dir(result);
}

const moveToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // 부드럽게 스크롤 이동
  });
};

export default function FloatBtn() {
  const dispatch = useAppDispatch();
  const curScroll = useAppSelector((state) => state.headerPosition.curScroll);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {}, [curScroll]);

  return (
    <div
      onMouseOver={(e) => {
        setIsVisible(true);
      }}
      onMouseOut={(e) => {
        setIsVisible(false);
      }}
      className="float-btn"
      onClick={(e) => {
        moveToTop();
        dispatch(setCurScroll(0));
      }}
    >
      <div className={`context-box ${isVisible ? "visible" : ""}`}>UP</div>
      <img alt="arrow" />
    </div>
  );
}
