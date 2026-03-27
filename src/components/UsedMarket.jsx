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
  const listRow = pageSize / 2;

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
          setTotalPage(Math.ceil(data.totalCount / 10));
          setProducts(data.list);
        } catch (error) {
          console.error(error);
        }
      };

      getProducts();
    },
    [page, pageSize, orderBy, keyword],
  );

  const handleSortToggle = (e) => {
    setOrderBy(e.target.value);
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
        />
      </div>
    </main>
  );
};

export default UsedMarket;
