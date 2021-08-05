import React from "react";
import styles from "./Artists.module.scss";
import classNames from "classnames";
import ArtistCard from "../../components/ArtistCard/ArtistCard";

function randomRange(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

const artists = [
  {
    name: "Taylor Swift",
    src: "tay.jpeg",
    minutes: randomRange(7000, 30000),
    liked: randomRange(30, 120),
  },
  {
    name: "Ed Sheeran",
    src: "ed.jpg",
    minutes: randomRange(7000, 30000),
    liked: randomRange(30, 120),
  },
  {
    name: "Billie Eilish",
    src: "bill.jpg",
    minutes: randomRange(7000, 30000),
    liked: randomRange(30, 120),
  },
  {
    name: "Eminem",
    src: "em.jpeg",
    minutes: randomRange(7000, 30000),
    liked: randomRange(30, 120),
  },
  {
    name: "Sid Sriram",
    src: "sid.jpg",
    minutes: randomRange(7000, 30000),
    liked: randomRange(30, 120),
  },
];

const Artists = () => {
  return (
    <div className={styles.artistsCont}>
      <div className={classNames(styles.topBar, "flex ac")}>
        <div className={styles.title}>Your Favorite Artists</div>
        <div className={styles.option}>SEE ALL</div>
      </div>
      <div className={classNames(styles.artistsCarousel, "flex ac")}>
        {artists.map((artist) => (
          <ArtistCard
            name={artist.name}
            src={artist.src}
            minutes={artist.minutes}
            liked={artist.liked}
          />
        ))}
      </div>
    </div>
  );
};

export default Artists;
