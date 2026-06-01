"use client"; // This is a client component 👈🏽
import { useEffect, useState, useRef } from "react";
import "../styles.css";
import ThirdSection from "./thirdSection";

export default function Version2() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [bgScale, setBgScale] = useState(1);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setScrollPosition(scrollPosition);
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
    backgroundSize: `${bgScale * 5}%`,
    backgroundPosition: "center",
  };

  const pages = [0,1,2,3,4]

  return (
    <>
    <div style={divStyle} className="backgroundImage2">
      {pages.map((index, key) => {
        return(
          <ThirdSection key={5} />
        )
      })}
    </div>
    </>
  );
}
