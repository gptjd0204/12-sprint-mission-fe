import React from "react";
import styles from "../styles/UsedMarket.module.css";
import icSearch from "../assets/ic_search.png";

import CardGeneral from "./CardGeneral";
import Pagination from "./Pagination";

const SellingProducts = ({
  products,
  onSortToggle,
  page,
  setPage,
  keyword,
  setKeyword,
  totalPage,
  listRow,
  pages,
  onPageChange,
  pageGroup,
}) => {
  const noSearch = () => {
    return (
      <p className={`${styles.noSearch} text-3xl bold`}>
        검색된 목록이 없습니다..
      </p>
    );
  };
  return (
    <section className={styles.productListContainer}>
      <div className={styles.sellingHeader}>
        <h2 className="text-xl bold">판매 중인 상품</h2>
        <div>
          <input
            type="text"
            value={keyword}
            onChange={(e) => {
              setKeyword(e.target.value);
              onPageChange();
            }}
            placeholder="검색할 상품을 입력해주세요"
            className={`${styles.searchInput} text-lg regular`}
          />
          <img src={icSearch} alt="돋보기 아이콘" className={styles.icSearch} />
          <button className={`${styles.addProductBtn} text-lg semibold`}>
            상품 등록하기
          </button>
          <select className={styles.sortSelect} onClick={onSortToggle}>
            <option value="recent">최신순</option>
            <option value="favorite">좋아요순</option>
          </select>
        </div>
      </div>

      <div className={styles.productsListContainer}>
        {products.length === 0 ? (
          noSearch()
        ) : (
          <>
            <ul className={styles.productsList} style={{ minHeight: "317px" }}>
              {products.length === 0
                ? noSearch()
                : products.slice(0, listRow).map((item) => {
                    return <CardGeneral product={item} key={item.id} />;
                  })}
            </ul>
            <ul className={styles.productsList} style={{ minHeight: "317px" }}>
              {products.slice(listRow).map((item) => {
                return <CardGeneral product={item} key={item.id} />;
              })}
            </ul>
          </>
        )}
      </div>

      <Pagination
        page={page}
        setPage={setPage}
        totalPage={totalPage}
        pages={pages}
        pageGroup={pageGroup}
        onPageChange={onPageChange}
      />
    </section>
  );
};

export default SellingProducts;
