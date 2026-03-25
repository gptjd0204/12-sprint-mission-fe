import React, { useEffect, useState } from "react";
import styles from "../styles/UsedMarket.module.css";

import CardGeneral from "./CardGeneral";
import Pagination from "./Pagination";

const SellingProducts = () => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [sortState, setSortState] = useState("recent");
  const [totalPage, setTotalPage] = useState(0);

  useEffect(
    function () {
      const getProducts = async () => {
        try {
          const res = await fetch(
            `https://panda-market-api.vercel.app/products?page=${page}&pageSize=10&orderBy=${sortState}`,
          );
          const data = await res.json();

          // 최대 페이지 계산
          setTotalPage(Math.ceil(data.totalCount / 10));
          setProducts(data.list);
        } catch (error) {
          console.error(error);
        }
      };

      getProducts();
    },
    [page, sortState],
  );

  const handleSort = (e) => {
    setSortState(e.target.value);
  };

  return (
    <section className={styles.productListContainer}>
      <div className={styles.sellingHeader}>
        <h2 className="text-xl bold">판매 중인 상품</h2>
        <div>
          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            className={`text-lg regular`}
          />
          <button className={`${styles.addProductBtn} text-lg semibold`}>
            상품 등록하기
          </button>
          <select className={styles.sortSelect} onClick={handleSort}>
            <option value="recent">최신순</option>
            <option value="favorite">좋아요순</option>
          </select>
        </div>
      </div>
      <ul className={styles.productsList}>
        {products.map((item) => {
          return <CardGeneral product={item} key={item.id} />;
        })}
      </ul>
      <Pagination page={page} setPage={setPage} totalPage={totalPage} />
    </section>
  );
};

export default SellingProducts;
