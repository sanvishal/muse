import React, { useState } from "react";
import styles from "./Sidenav.module.scss";
import { FaHome, FaSearch, FaHeart } from "react-icons/fa";
import { ReactComponent as LibraryIcon } from "../../assets/library.svg";
import { ReactComponent as CheckIcon } from "../../assets/checkIcon.svg";
import classNames from "classnames";

const Sidenav = () => {
  let [currentTab, setCurrentTab] = useState(0);

  const handleTabChange = (tab) => {
    setCurrentTab(tab);
  };

  const getCurrentTabPos = (tab) => {
    return (60 + 18 + 18 / 4) * tab;
  };

  return (
    <nav className={styles.navCont}>
      <div className={styles.navContent}>
        <div
          className={styles.navBg}
          style={{ top: `${getCurrentTabPos(currentTab)}px` }}
        />
        <div
          onClick={(e) => handleTabChange(0)}
          className={classNames(
            styles.navItem,
            "flex",
            "ac",
            currentTab === 0 && styles.isActive
          )}
        >
          <FaHome />
          Home
        </div>
        <div
          onClick={(e) => handleTabChange(1)}
          className={classNames(
            styles.navItem,
            "flex",
            "ac",
            currentTab === 1 && styles.isActive
          )}
        >
          <FaSearch />
          Search
        </div>
        <div
          onClick={(e) => handleTabChange(2)}
          className={classNames(
            styles.navItem,
            "flex",
            "ac",
            currentTab === 2 && styles.isActive
          )}
        >
          <LibraryIcon />
          Library
        </div>
        <div
          onClick={(e) => handleTabChange(3)}
          className={classNames(
            styles.navItem,
            "flex",
            "ac",
            currentTab === 3 && styles.isActive
          )}
        >
          <FaHeart />
          Favorites
        </div>
        <div className={styles.subscribe}>
          <div className={classNames(styles.content, "flex", "jc", "ac")}>
            <span>SUBSCRIPTION</span>
            <CheckIcon />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidenav;
