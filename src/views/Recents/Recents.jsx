import classNames from "classnames";
import React from "react";
import styles from "./Recents.module.scss";
import SongCard from "../../components/SongCard/SongCard";

let recents = [
  { src: "1.jpg", name: "Say It.", author: "Yorushika" },
  { src: "2.png", name: "Blinding Lights", author: "The Weeknd" },
  { src: "3.png", name: "Gunjou", author: "Yoasobi" },
  { src: "4.jpg", name: "What's Up Danger", author: "Blackway & Black Caviar" },
  { src: "5.jpg", name: "Chandelier", author: "Sia" },
  { src: "6.jpg", name: "Believer", author: "Imagine Dragons" },
  { src: "7.png", name: "The Dark Side of the Moon", author: "Pink Floyd" },
  { src: "8.jpeg", name: "Lean On", author: "Major Lazer" },
];

const Recents = () => {
  return (
    <div className={styles.recentsCont}>
      <div className={classNames(styles.topBar, "flex ac")}>
        <div className={styles.title}>Recently Played</div>
        <div className={styles.option}>SEE ALL</div>
      </div>
      <div className={classNames(styles.songsCarousel, "flex", "ac")}>
        {recents.map((recentSong) => {
          return (
            <SongCard
              albumCoverSrc={
                window.location.origin + "/albumCovers/" + recentSong.src
              }
              author={recentSong.author}
              songName={recentSong.name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Recents;
