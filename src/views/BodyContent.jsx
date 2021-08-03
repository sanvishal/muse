import React from "react";
import Poster from "../components/Poster/Poster";
import styles from "./BodyContent.module.scss";

const BodyContent = () => {
  return (
    <div className={styles.bodyWrapper}>
      <div className={styles.bodyContent}>
        <Poster />
      </div>
    </div>
  );
};

export default BodyContent;
