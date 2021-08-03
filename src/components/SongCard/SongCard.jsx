import classNames from "classnames";
import React from "react";
import styles from "./SongCard.module.scss";
import { FaPlay } from "react-icons/fa";

const SongCard = ({ albumCoverSrc, songName, author }) => {
  console.log(albumCoverSrc);
  return (
    <div className={styles.songCardCont}>
      <div
        className={styles.songCardContent}
        style={{
          backgroundImage: `url('${albumCoverSrc}')`,
        }}
      >
        <div className={styles.detailsCont}>
          <div className={classNames(styles.blurBgSide)}></div>
          <div className={styles.blurBg}></div>
          <div className={classNames(styles.details, "flex ac")}>
            <div className={classNames(styles.left, "flex")}>
              <div className={styles.song}>{songName}</div>
              <div className={styles.author}>{author}</div>
            </div>
            <div className={classNames(styles.right, "flex")}>
              <FaPlay />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SongCard;
