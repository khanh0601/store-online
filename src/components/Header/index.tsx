"use client";
import style from './header.module.scss';
import { useGsap } from "../../util/GsapProvider";
import { useEffect } from 'react';
const Header = () => {
  const gsap = useGsap();
  useEffect(() => {
    gsap.to(`.${style.header}`, { yPercent: -100, duration: 0.5, delay: 0.5, ease: 'power3.out' });
    console.log(style.header);
  }
  , []);
  return (
    <>
      <header className={style.header}>
        
      </header>
    </>
  );
};

export default Header;
