import React from "react";
import BestProducts from "./BestProducts";
import styles from "../styles/UsedMarket.module.css";
import SellingProducts from "./SellingProducts";

const UsedMarket = () => {
  return (
    <main>
      <div className={styles.wrapper}>
        <BestProducts />
        <SellingProducts />
      </div>
    </main>
  );
};

export default UsedMarket;
