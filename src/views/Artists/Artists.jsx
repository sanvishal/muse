import React from "react";
import styles from "./Artists.module.scss";
import classNames from "classnames";
import ArtistCard from "../../components/ArtistCard/ArtistCard";

const Artists = () => {
  return (
    <div className={styles.artistsCont}>
      <div className={classNames(styles.topBar, "flex ac")}>
        <div className={styles.title}>Your Favorite Artists</div>
        <div className={styles.option}>SEE ALL</div>
      </div>
      <div className={classNames(styles.artistsCarousel, "flex", "ac")}>
        <ArtistCard />
      </div>
    </div>
  );
};

export default Artists;
