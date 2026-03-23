import React, { useEffect, useState } from "react";
import CardBest from "./CardBest";
import styles from "../styles/UsedMarket.module.css";

const BestProducts = () => {
  const [bestProducts, setBestProducts] = useState([]);
  useEffect(function () {
    const getBestProducts = async () => {
      try {
        const res = await fetch(
          `https://panda-market-api.vercel.app/products?&orderBy=favorite`,
        );
        const data = await res.json();

        setBestProducts(data.list);
      } catch (error) {
        console.error(error);
      }
    };

    getBestProducts();
  }, []);

  return (
    <section className={styles.productListContainer}>
      <h2 className="text-xl bold">베스트 상품</h2>
      <ul className={`${styles.productsList} best`}>
        <CardBest bestProducts={bestProducts} />
      </ul>
    </section>
  );
};

export default BestProducts;
