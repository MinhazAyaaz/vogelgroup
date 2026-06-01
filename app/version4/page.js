"use client"; // This is a client component 👈🏽
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./styles.module.css";

export default function Version4() {
  const [bgScale, setBgScale] = useState(1);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    // Calculate scale factor - this can be adjusted
    const scaleFactor = 1 + scrollPosition / 1000;
    setBgScale(scaleFactor);
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const divStyle = {
    backgroundSize: `${bgScale * 10}%`,
    backgroundPosition: "center",
  };

  const divStyle1 = {
    transform: `translateZ(${(-bgScale + 1) * 3000}px)`,
  };

  const divStyle2 = {
    transform: `translateZ(${(-bgScale + 2) * 3000}px)`,
  };

  const divStyle3 = {
    transform: `translateZ(${(-bgScale + 2.5) * 3000}px)`,
  };

  const divStyle4 = {
    transform: `translateZ(${(-bgScale + 3) * 3000}px)`,
  };

  const divStyle5 = {
    transform: `translateZ(${(-bgScale + 3.3) * 3000}px)`,
  };

  return (
    <div className={styles.backgroundImage} style={divStyle}>
      <div className={styles.viewport}>
        <div className="will-change-transform absolute block" style={divStyle1}>
          <div className="relative">
            <Image src="/brb.webp" alt="brb" width={1000} height={1000} />
          </div>
        </div>
        <div
          className="will-change-transform absolute block left-0"
          style={divStyle2}
        >
          <div className="relative">
            <Image src="/brb.webp" alt="brb" width={1000} height={1000} />
          </div>
        </div>
        <div
          className="will-change-transform absolute block right-0"
          style={divStyle3}
        >
          <div className="relative">
            <Image src="/brb.webp" alt="brb" width={1000} height={1000} />
          </div>
        </div>
        <div
          className="will-change-transform absolute block left-0"
          style={divStyle4}
        >
          <div className="relative">
            <Image src="/brb.webp" alt="brb" width={1000} height={1000} />
          </div>
        </div>
        <div
          className="will-change-transform absolute block right-0"
          style={divStyle5}
        >
          <div className="relative">
            <Image src="/brb.webp" alt="brb" width={1000} height={1000} />
          </div>
        </div>
      </div>
    </div>
  );
}
