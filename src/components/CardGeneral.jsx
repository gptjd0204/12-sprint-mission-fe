import React from "react";
import icFavorite from "../assets/ic_favorite.png";
// import icFavoriteActive from "../assets/ic_favorite_active.png";
import placeholderImg from "../assets/product_img_default_sm.png";
import styles from "../styles/UsedMarket.module.css";

const CardGeneral = ({ products }) => {
  const handelErrorImg = (e) => {
    e.target.src = placeholderImg;
  };

  return [...products].map(function (p) {
    return (
      <li className={styles.cardGeneral} key={p.id}>
        <img src={p.images} onError={handelErrorImg} alt={p.name} />
        <div className={styles.cardInfo}>
          <p className={`${styles.title} text-md medium`}>{p.name}</p>
          <p className={`${styles.price} text-lg bold`}>
            {p.price.toLocaleString()}원
          </p>
          <div className={styles.favorite}>
            <img src={icFavorite} />
            <p className="text-xs medium">{p.favoriteCount}</p>
          </div>
        </div>
      </li>
    );
  });
};

export default CardGeneral;
