import React from "react";
import icFavorite from "../assets/ic_favorite.png";
// import icFavoriteActive from "../assets/ic_favorite_active.png";
import placeholderImg from "../assets/product_img_default_md.png";
import styles from "../styles/UsedMarket.module.css";

const CardBest = ({ bestProducts }) => {
  const handelErrorImg = (e) => {
    e.target.src = placeholderImg;
  };

  return [...bestProducts].slice(0, 4).map(function (p) {
    return (
      <div className={styles.cardBest}>
        <img src={p.images} onError={handelErrorImg} alt={p.name} key={p.id} />
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
      </div>
    );
  });
};

export default CardBest;
