import React, {useEffect, useState} from "react";
import styles from "./Header.module.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import classNames from "classnames";
import { BsFillVolumeUpFill, BsFillVolumeDownFill, BsFillVolumeMuteFill } from "react-icons/bs";
import { IoCaretDownOutline } from "react-icons/io5";
import ProfilePic from '../../assets/profile.jpg';

const Header = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [volumeLevel, Slider] = useSlider(
    0,
    100,
    40,
    classNames(styles.rocker)
  );

  const renderVolumeIcon = () => {
    if(isMuted) {
      return <BsFillVolumeMuteFill onClick={(e => setIsMuted(!isMuted))}/>
    } else {
      if(volumeLevel <= 40 && volumeLevel > 0) {
        return <BsFillVolumeDownFill onClick={(e => setIsMuted(!isMuted))}/>
      } else if(volumeLevel >= 40 && volumeLevel <= 100) {
        return <BsFillVolumeUpFill onClick={(e => setIsMuted(!isMuted))}/>
      } else {
        return <BsFillVolumeMuteFill onClick={(e => setIsMuted(!isMuted))}/>
      }
    }
  }

  return (
    <header className={styles.headerCont}>
      <div className={classNames(styles.headerContent, "flex", 'ac')}>
        <div className={classNames(styles.left, 'flex')}>
          <div className={styles.logo}>
            <Logo />
          </div>
          Muse
        </div>
        <div className = {classNames(styles.right, 'flex')}>
          <div className = {classNames(styles.volumeRocker, 'flex', 'ac', 'jc')}>
            {renderVolumeIcon()}
            <Slider isMuted={isMuted}/>
          </div>
          <div className = {classNames(styles.profile, 'flex ac')}>
            <div className = {classNames(styles.profLeft, 'flex ac jc')}>
              <img src = {ProfilePic} className = {styles.profilePic}/>
              Vishal TK
            </div>
            <div className = {classNames(styles.profRight, 'flex ac jc')}>
              <IoCaretDownOutline />
            </div>
        </div>
        </div>
      </div>
    </header>
  );
};

const useSlider = (min, max, defaultState, className) => {
  const [state, setSlide] = useState(defaultState);
  const handleChange = e => {
    setSlide(e.target.value);
  };

  const Slider = ({isMuted}) => {
    return (<input
      type="range"
      className={className}
      min={min}
      max={max}
      step={1}
      defaultValue={state}
      onMouseUp={handleChange}
      disabled={isMuted}
    />)
  };
  return [state, Slider, setSlide];
};

export default Header;
