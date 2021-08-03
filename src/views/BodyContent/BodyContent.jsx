import React from "react";
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
      </div>
    </div>
  );
};

export default BodyContent;
