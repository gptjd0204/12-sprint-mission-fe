import React from "react";
import pandaMarketLogo from "../assets/pandamarket.png";
import styles from "../styles/GNB.module.css";
import "../App.css";

const GNB = () => {
  return (
    <nav>
      <div className={styles.gnbContainer}>
        <div>
          <img
            src={pandaMarketLogo}
            className={styles.logo}
            alt="Pandamarket Logo"
          />
          <div className={`${styles.navList} text-2lg bold`}>
            {/* Link로 코드 수정 예정 */}
            <span>자유게시판</span>
            <span>중고마켓</span>
          </div>
        </div>
        <button className={`${styles.btn} text-lg semibold`}>로그인</button>
      </div>
    </nav>
  );
};

export default GNB;
