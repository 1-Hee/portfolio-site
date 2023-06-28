import React, { useEffect, useRef, useState } from "react";

import "../styles/css/FloatBtn.css";

const moveToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // 부드럽게 스크롤 이동하도록 설정 (선택사항)
  });
};

export default function FloatBtn() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {}, [isVisible]);
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
      }}
    >
      <div className={`context-box ${isVisible ? "visible" : ""}`}>CLICK</div>
      <img alt="arrow" />
    </div>
  );
}
