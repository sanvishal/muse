import React from "react";
import styles from "./Player.module.scss";
import classNames from "classnames";
import { FaHeart, FaSyncAlt } from "react-icons/fa";
import { TiArrowShuffle } from "react-icons/ti";
import { IoPlay, IoPlayBack, IoPlayForward } from "react-icons/io5";

const Player = () => {
  return (
    <div className={styles.playerCont}>
      <div className={classNames(styles.playerContent, "flex ac")}>
        <div className={classNames(styles.leftCont, "flex ac")}>
          <div className={classNames(styles.leftPic)}>
            <img src="/artists/tay.jpeg" alt="tay" />
          </div>
          <div className={classNames(styles.rightSong, "flex ac")}>
            <div className={classNames(styles.top, "flex ac")}>
              <div className={classNames(styles.songNameLeft, "flex ac")}>
                Enchanted
                <FaHeart />
              </div>
              <div className={classNames(styles.songOptionsRight, "flex ac")}>
                <TiArrowShuffle />
                <FaSyncAlt />
              </div>
            </div>
            <div className={classNames(styles.bottom, "flex ac")}>
              <div className={styles.duration}>2:20</div>
              <div className={styles.musicSeeker}>
                <input
                  type="range"
                  className={styles.slider}
                  min={0}
                  max={100}
                  step={1}
                  defaultValue={40}
                />
              </div>
              <div className={styles.duration}>5:52</div>
            </div>
          </div>
        </div>
        <div
          className={classNames(styles.rightCont)}
          style={{ width: "270px" }}
        >
          <div className={styles.bg}>
            <div className={styles.clipPath}></div>
            <div className={styles.clipPath}></div>
            <div className={styles.clipPath}></div>
          </div>
        </div>
        <div className={styles.controlsCont}>
          <div className={classNames(styles.controlsContent, "flex ac")}>
            <IoPlayBack />
            <IoPlay />
            <IoPlayForward />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
