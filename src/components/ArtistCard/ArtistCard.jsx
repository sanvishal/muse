import React from "react";
import styles from "./ArtistCard.module.scss";
import classNames from "classnames";
import { FaHeadphones, FaHeart } from "react-icons/fa";

const ArtistCard = ({ name, src, minutes, liked }) => {
  return (
    <div className={styles.artistCardCont}>
      <div className={classNames(styles.artistCardContent, "flex", "ac")}>
        <div className={styles.left}>
          <div style={{ backgroundImage: `url(/artists/${src})` }} />
        </div>
        <div className={classNames(styles.right, "flex")}>
          <div className={styles.name}>{name}</div>
          <div className={classNames(styles.playMinutes, "flex", "ac")}>
            <FaHeadphones />
            {minutes.toLocaleString()} play minutes
          </div>
          <div className={classNames(styles.likedSongs, "flex", "ac")}>
            <FaHeart />
            {liked.toLocaleString()} liked songs
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistCard;
