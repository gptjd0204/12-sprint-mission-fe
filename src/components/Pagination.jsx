import React, { useState } from "react";
import arrowLeftActive from "../assets/arrow_left_active.png";
import arrowRightActive from "../assets/arrow_right_active.png";
// import arrowLeftInactive from "../assets/arrow_left_inactive.png";
// import arrowRightInactive from "../assets/arrow_right_inactive.png";
import styles from "../styles/UsedMarket.module.css";

const Pagination = ({ page, setPage, totalPage }) => {
  const [pageChange, setPageChange] = useState([1, 2, 3, 4, 5]);
  const [pageList, setPageList] = useState(1);

  const lastPage = Math.ceil(totalPage / 5);

  const handlePrevPage = () => {
    const prevPage = pageChange.map((p) => p - 5);
    setPageChange(prevPage);
    setPage(prevPage[0]);
    setPageList(function (prev) {
      return prev <= 1 ? prev : prev - 1;
    });
  };

  const handleNextPage = () => {
    const nextPage = pageChange.map((p) => p + 5);
    setPageChange(nextPage);
    setPage(nextPage[0]);
    setPageList(function (prev) {
      return prev >= lastPage ? prev : prev + 1;
    });
  };

  const handleCurrentPage = (cur) => {
    setPage(cur);
  };

  return (
    <div className={styles.pageBtnContainer}>
      <button
        className={`${styles.pageBtn} text-lg semibold`}
        disabled={pageChange[0] === 1}
        onClick={handlePrevPage}
      >
        <img src={arrowLeftActive} />
      </button>
      {pageChange.map((p) => {
        return (
          <button
            value={p}
            className={`${styles.pageBtn} text-lg semibold ${page === p ? styles.active : ""}`}
            onClick={function () {
              handleCurrentPage(p);
            }}
          >
            {p}
          </button>
        );
      })}
      <button
        className={`${styles.pageBtn} text-lg semibold`}
        onClick={handleNextPage}
        disabled={pageList >= lastPage}
      >
        <img src={arrowRightActive} />
      </button>
    </div>
  );
};

export default Pagination;
