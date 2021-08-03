import React from "react";
import styles from "./ArtistCard.module.scss";
import classNames from "classnames";
import { FaHeadphones, FaHeart } from "react-icons/fa";

const ArtistCard = () => {
  return (
    <div className={styles.artistCardCont}>
      <div className={classNames(styles.artistCardContent, "flex", "ac")}>
        <div className={styles.left}>
          <img src="/albumCovers/1.jpg" alt="artist" />
        </div>
        <div className={classNames(styles.right, "flex")}>
          <div className={styles.name}>Taylor Swift</div>
          <div className={classNames(styles.playMinutes, "flex", "ac")}>
            <FaHeadphones />
            12 dfgk lfkg
          </div>
          <div className={classNames(styles.likedSongs, "flex", "ac")}>
            <FaHeart />
            12 dfgk lfkg
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistCard;
