import React, { useEffect, useState } from "react";
import BestProducts from "./BestProducts";
import styles from "../styles/UsedMarket.module.css";
import SellingProducts from "./SellingProducts";

const UsedMarket = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [orderBy, setOrderBy] = useState("recent");
  const [keyword, setKeyword] = useState("");
  const [totalPage, setTotalPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [pages, setPages] = useState([]);
  const listRow = pageSize / 2;

  const [index, setIndex] = useState(0);
  const pageGroup = pages.slice(index, index + 5);

  useEffect(
    function () {
      const getProducts = async () => {
        try {
          // 판매 중인 상품 데이터
          const res = await fetch(
            `https://panda-market-api.vercel.app/products?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`,
          );
          const data = await res.json();

          // 최대 페이지 수
          const total = Math.ceil(data.totalCount / 10);
          setTotalPage(total);

          // 페이지네이션에 필요한 페이지 설정
          const pagesData = [];
          if (total <= 0) {
            pagesData.push(1);
          } else {
            for (let i = 1; i <= total; i++) {
              pagesData.push(i);
            }
          }

          setPages(pagesData);
          setProducts(data.list);
        } catch (error) {
          console.error(error);
        }
      };
      getProducts();
    },
    [page, pageSize, orderBy, keyword, index],
  );

  const handleSortToggle = (e) => {
    setOrderBy(e.target.value);
  };

  const handlePageChange = (action) => {
    if (action === "prev") {
      if (index <= 0) return;
      const newIndex = index - 5;
      setIndex(newIndex);
      setPage(newIndex + 1);
    } else if (action === "next") {
      if (index > totalPage) return;
      const newIndex = index + 5;
      setIndex(newIndex);
      setPage(newIndex + 1);
    } else {
      setIndex(0);
      setPage(1);
    }
  };

  return (
    <main>
      <div className={styles.wrapper}>
        <BestProducts />
        <SellingProducts
          products={products}
          onSortToggle={handleSortToggle}
          page={page}
          setPage={setPage}
          keyword={keyword}
          setKeyword={setKeyword}
          totalPage={totalPage}
          listRow={listRow}
          pages={pages}
          onPageChange={handlePageChange}
          pageGroup={pageGroup}
        />
      </div>
    </main>
  );
};

export default UsedMarket;
