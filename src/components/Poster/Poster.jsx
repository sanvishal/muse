import React from "react";
import styles from "./Poster.module.scss";
import PosterImage from "../../assets/poster.jpeg";
import classNames from "classnames";

const Poster = () => {
  return (
    <div className={styles.posterCont}>
      <div className={classNames(styles.posterContent, "flex ac")}>
        <div className={classNames(styles.left, "flex", "ac")}>
          Best of the Decade
          <br /> For You!
        </div>
        <div className={classNames(styles.right, "flex")}>
          <div>Muse</div>
          <div>Spotlight</div>
        </div>
      </div>
    </div>
  );
};

export default Poster;
