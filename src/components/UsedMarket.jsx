import React from "react";
import BestProducts from "./BestProducts";
import styles from "../styles/UsedMarket.module.css";
import SellingProducts from "./SellingProducts";
import { usePagination } from "../hooks/usePagination.js";
import { useProducts } from "../hooks/useProducts.js";

const UsedMarket = () => {
  const pageSize = 10;
  const listRow = pageSize / 2;

  // 페이지네이션 커스텀 hook
  const { page, getPageGroup, handlePageChange, handleCurrentPage } =
    usePagination(5);

  // 상품 커스텀 hook
  const { products, totalPage, keyword, setKeyword, handleSortToggle } =
    useProducts(page, pageSize);

  // 페이지 버튼 그룹 계산 (최대 5개 까지)
  const pageGroup = getPageGroup(totalPage);

  return (
    <main>
      <div className={styles.wrapper}>
        <BestProducts />
        <SellingProducts
          products={products}
          onSortToggle={handleSortToggle}
          page={page}
          keyword={keyword}
          setKeyword={setKeyword}
          totalPage={totalPage}
          listRow={listRow}
          onPageChange={handlePageChange}
          onCurrentPage={handleCurrentPage}
          pageGroup={pageGroup}
        />
      </div>
    </main>
  );
};

export default UsedMarket;
