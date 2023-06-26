import React from "react";

// import icons
import userIcon from "../assets/personals/icon-user.png";
import birthIcon from "../assets/personals/icon-birth.png";
import emailIcon from "../assets/personals/icon-email.png";
import locationIcon from "../assets/personals/icon-location.png";
import eduIcon from "../assets/personals/icon-edu.png";

import "../styles/css/MyInfoItem.css";

function MyInfoItem() {
  return (
    <div className="my-info-item">
      <div className="v-spacer-32" />
      <div className="my-info-div">
        <div className="my-image">
          <div className="image-filter"></div>
        </div>
        <div className="info-items">
          <div className="item-name">
            <div className="icon" style={{ background: `url(${userIcon})` }}></div>
            <div className="name-div">
              <p className="sunshine-bold">조원희</p>
              <p className="sunshine-regular">1-Hee</p>
            </div>
          </div>
          <div className="item-birth">
            <div className="icon" style={{ background: `url(${birthIcon})` }}></div>
            <p>1997.10.01.</p>
          </div>
          <div className="item-email">
            <div className="icon" style={{ background: `url(${emailIcon})` }}></div>
            <p>onehee9710@gmail.com</p>
          </div>
          <div className="item-location">
            <div className="icon" style={{ background: `url(${locationIcon})` }}></div>
            <p className="sunshine-bold">충청북도 음성군</p>
          </div>
          <div className="item-edu">
            <div className="icon" style={{ background: `url(${eduIcon})` }}></div>
            <div className="univ-info">
              <p className="sunshine-bold">충북대학교</p>
              <p className="sunshine-regular">식물자원학전공</p>
            </div>
          </div>
        </div>
      </div>
      <div className="v-spacer-32" />
    </div>
  );
}

export default MyInfoItem;
