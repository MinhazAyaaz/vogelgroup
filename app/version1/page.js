"use client"; // This is a client component 👈🏽
import { useEffect, useState, useRef } from "react";
import "../styles.css";
import FirstSection from "./firstSection";

export default function Version1() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [bgScale, setBgScale] = useState(1);
  const [divHeight, setDivHeight] = useState(920);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setScrollPosition(scrollPosition);
    // Calculate scale factor - this can be adjusted
    const scaleFactor = 1 + scrollPosition / 1000;
    setBgScale(scaleFactor);
    
  };

  useEffect(() => {
    const updateDivHeight = () => setDivHeight(window.innerHeight + 120);
    updateDivHeight();
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updateDivHeight);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateDivHeight);
    };
  }, []);

  const divStyle = {
    backgroundSize: `${bgScale * 5}%`,
    backgroundPosition: "center",
  };

  const computeScale = (index) => {
    const relativeScroll = scrollPosition - divHeight * index;

    if (relativeScroll <= 0) return 1;
    if (relativeScroll >= divHeight) return 0;

    return 1 - (relativeScroll / divHeight) * 2;
  };

  const pages = [0,1,2,3,4]

  return (
    <>
    <div style={divStyle} className="backgroundImage1">
      {pages.map((index, key) => {
        return(
          <FirstSection key={5} styling={computeScale(index)}/>
        )
      })}
    </div>
    </>
  );
}
