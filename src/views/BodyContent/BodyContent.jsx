import React from "react";
import Player from "../../components/Player/Player";
import Poster from "../../components/Poster/Poster";
import Artists from "../Artists/Artists";
import Recents from "../Recents/Recents";
import styles from "./BodyContent.module.scss";

const BodyContent = () => {
  return (
    <div className={styles.bodyWrapper}>
      <div className={styles.bodyContent}>
        <Poster />
        <Recents />
        <Artists />
        <Player />
      </div>
    </div>
  );
};

export default BodyContent;
