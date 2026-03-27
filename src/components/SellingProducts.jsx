import React from "react";
import styles from "../styles/UsedMarket.module.css";
import icSearch from "../assets/ic_search.png";
import mobileSortBtn from "../assets/btn_sort.png";

import CardGeneral from "./CardGeneral";
import Pagination from "./Pagination";

const SellingProducts = ({
  products,
  onSortToggle,
  page,
  keyword,
  setKeyword,
  totalPage,
  listRow,
  onPageChange,
  onCurrentPage,
  pageGroup,
  isMobile,
  isTablet,
}) => {
  const noSearch = () => {
    return (
      <p
        className={`${styles.noSearch} ${isMobile ? "text-2xl" : "text-3xl"} bold`}
      >
        검색된 목록이 없습니다..
      </p>
    );
  };

  // 모바일 (windowWidth < 768) 상태에서 폼 변환
  const mobileHeader = () => {
    return (
      <>
        <div className={styles.mobileHeaderContainer}>
          <h2 className="text-xl bold">판매 중인 상품</h2>
          <button className={`${styles.addProductBtn} text-lg semibold`}>
            상품 등록하기
          </button>
        </div>
        <div className={styles.searchContainer}>
          <input
            type="text"
            value={keyword}
            onChange={(e) => {
              setKeyword(e.target.value);
              onPageChange();
            }}
            placeholder="검색할 상품을 입력해주세요"
            className={`${styles.searchInput} text-md regular`}
          />
          <img src={icSearch} alt="돋보기 아이콘" className={styles.icSearch} />

          {isMobile ? (
            <img
              src={mobileSortBtn}
              alt="정렬 버튼"
              onClick={() => {
                alert("정렬 버튼입니다");
              }}
            />
          ) : (
            <select className={styles.sortSelect} onClick={onSortToggle}>
              <option value="recent">최신순</option>
              <option value="favorite">좋아요순</option>
            </select>
          )}
        </div>
      </>
    );
  };
  return (
    <section className={styles.sellListContainer}>
      <div className={styles.sellingHeader}>
        {isMobile ? (
          mobileHeader()
        ) : (
          <>
            <h2 className="text-xl bold">판매 중인 상품</h2>
            <div className={styles.searchContainer}>
              <input
                type="text"
                value={keyword}
                onChange={(e) => {
                  setKeyword(e.target.value);
                  onPageChange();
                }}
                placeholder="검색할 상품을 입력해주세요"
                className={`${styles.searchInput} ${isTablet ? "text-md" : "text-lg"} regular`}
              />
              <img
                src={icSearch}
                alt="돋보기 아이콘"
                className={styles.icSearch}
              />
              <button className={`${styles.addProductBtn} text-lg semibold`}>
                상품 등록하기
              </button>

              <select className={styles.sortSelect} onClick={onSortToggle}>
                <option value="recent">최신순</option>
                <option value="favorite">좋아요순</option>
              </select>
            </div>
          </>
        )}
      </div>

      <div className={styles.listContainer}>
        {products.length === 0 ? (
          noSearch()
        ) : (
          <>
            <ul className={styles.productsList}>
              {products.length === 0
                ? noSearch()
                : products.slice(0, listRow).map((item) => {
                    return <CardGeneral product={item} key={item.id} />;
                  })}
            </ul>
            <ul className={styles.productsList}>
              {products.slice(listRow).map((item) => {
                return <CardGeneral product={item} key={item.id} />;
              })}
            </ul>
          </>
        )}
      </div>

      <Pagination
        page={page}
        totalPage={totalPage}
        pageGroup={pageGroup}
        onPageChange={onPageChange}
        onCurrentPage={onCurrentPage}
      />
    </section>
  );
};

export default SellingProducts;
