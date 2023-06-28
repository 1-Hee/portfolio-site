import React, { useState } from "react";
import PropTypes from "prop-types";

import "../styles/css/Header.css";

const scrollToPosition = (y: number) => {
  window.scrollTo({
    top: y,
    behavior: "smooth", // 부드럽게 스크롤 이동하도록 설정 (선택사항)
  });
};

export default function Header({ scrollY: number = 0 }) {
  const [posArr] = useState([324, 324 + 398, 324 + 398 + 1148, 324 + 400 + 1168 + 560]);

  return (
    // eslint-disable-next-line no-restricted-globals
    <div className={`header ${scrollY >= 72 ? "header-white" : ""}`}>
      <p
        className="header-title"
        onClick={(e) => {
          window.location.reload();
        }}
      >
        1-Hee
      </p>
      <div className="right-menu">
        <p
          onClick={(e) => {
            scrollToPosition(posArr[0]);
          }}
        >
          Introduce
        </p>
        <p
          onClick={(e) => {
            scrollToPosition(posArr[1]);
          }}
        >
          Skills
        </p>
        <p
          onClick={(e) => {
            scrollToPosition(posArr[2]);
          }}
        >
          Project
        </p>
        <p
          onClick={(e) => {
            scrollToPosition(posArr[3]);
          }}
        >
          Blog & GitHubs
        </p>
      </div>
    </div>
  );
}

Header.propTypes = {
  scrollY: PropTypes.number.isRequired,
};
