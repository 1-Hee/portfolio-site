import React, { useEffect, useState } from "react";
// import redux and reducers
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { setCurScroll } from "../redux/headerPosition";

import "../styles/css/FloatBtn.css";

const moveToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // 부드럽게 스크롤 이동하도록 설정 (선택사항)
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
      <div className={`context-box ${isVisible ? "visible" : ""}`}>CLICK</div>
      <img alt="arrow" />
    </div>
  );
}
