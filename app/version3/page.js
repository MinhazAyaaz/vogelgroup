"use client"; // This is a client component 👈🏽
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import Image from "next/image";
import styles from "./styles.module.css";

export default function Version3() {
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
  

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["0.05 1", "1 1"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page scroll: ", latest);
  });
  
  const firstScale = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const secondScale = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3], [0, 0, 1, 0]);
  const thirdScale = useTransform(scrollYProgress, [0, 0.3, 0.4, 0.5], [0, 0, 1, 0]);
  const fourthScale = useTransform(scrollYProgress, [0, 0.5, 0.6, 0.7], [0, 0, 1, 0]);
  const fifthScale = useTransform(scrollYProgress, [0, 0.7, 0.8, 0.9], [0, 0, 1, 0]);
  const sixScale = useTransform(scrollYProgress, [0,0.9,1],[0,0,1])

  return (
    <div
      ref={containerRef}
      className={styles.backgroundImage} 
      style={divStyle}
    >
      <div className="flex justify-center items-center w-screen h-screen">
        <motion.div
          className="h-[80%] w-[90%] fixed rounded-3xl flex justify-center items-center"
          style={{ scale: firstScale }}
        >
          <Image src="/logo.png" alt="logo" width={500} height={178}/>
        </motion.div>
        <motion.div
          className="h-[80%] w-[90%] fixed rounded-3xl flex"
          style={{ scale: secondScale }}
        >
          <div className="w-full h-full flex flex-col justify-center font-mono xl:w-1/2">
          <h1 className="text-white font-bold text-7xl">About Us</h1>
          <div className="h-[0.5%] w-[100%] bg-white my-4"></div>
          <p className="text-white text-2xl mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam
            sem et tortor consequat id porta nibh venenatis. Orci phasellus
            egestas tellus rutrum. Nisl condimentum id venenatis a. Diam
            sollicitudin tempor id eu nisl nunc. Pretium fusce id velit ut
            tortor pretium. Euismod nisi porta lorem mollis aliquam. Aliquet
            risus feugiat in ante. Tempor orci dapibus ultrices in iaculis.
            Ridiculus mus mauris vitae ultricies leo integer. Sagittis eu
            volutpat odio facilisis mauris sit amet massa vitae. Aliquet lectus
            proin nibh nisl condimentum id venenatis a.</p>
            </div>
            <div className="hidden xl:w-1/2 h-full xl:flex xl:justify-center xl:items-center">
              <Image src="/stormtropper.png" alt="stormtropper" width={500} height={500}/>
            </div>
        </motion.div>
        <motion.div
          className="h-[80%] w-[90%] fixed rounded-3xl flex justify-around items-center px-20"
          style={{ scale: thirdScale }}
        >
          <div className="w-[40%] h-[60%] bg-white rounded-2xl max-w-[300px] hover:scale-110 duration-500">
            <article>
              <figure>
                <Image className="rounded-t-2xl" src="/background.jpg" alt="background" width={500} height={500}/>
              </figure>
              <div className="p-7">
                <h1 className="font-serif">Travel</h1>
                <h3 className="font-bold text-xl py-3">Trip planning for beginnerings</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.</p>
              </div>
            </article>
          </div>
          <div className="w-[40%] h-[60%] bg-white rounded-2xl max-w-[300px] hover:scale-110 duration-500">
            <article>
              <figure>
                <Image className="rounded-t-2xl" src="/background.jpg" alt="background" width={500} height={500}/>
              </figure>
              <div className="p-7">
                <h1 className="font-serif">Travel</h1>
                <h3 className="font-bold text-xl py-3">Trip planning for beginnerings</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.</p>
              </div>
            </article>
          </div>
          <div className="w-[40%] h-[60%] bg-white rounded-2xl max-w-[300px] hover:scale-110 duration-500">
            <article>
              <figure>
                <Image className="rounded-t-2xl" src="/background.jpg" alt="background" width={500} height={500}/>
              </figure>
              <div className="p-7">
                <h1 className="font-serif">Travel</h1>
                <h3 className="font-bold text-xl py-3">Trip planning for beginnerings</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.</p>
              </div>
            </article>
          </div>
        </motion.div>
        <motion.div
          className="h-[80%] w-[90%] fixed rounded-3xl flex justify-center items-center"
          style={{ scale: fourthScale }}
        >
          <Image className="rounded-3xl" src="/pokemon.png" alt="pokemon" width={1000} height={1000}/>
        </motion.div>
        <motion.div
          className="h-[80%] w-[90%] fixed rounded-3xl flex justify-center items-center hover:scale-110"
          style={{ scale: fifthScale }}
        >
          <Image className="rounded-3xl" src="/pokemon.png" alt="pokemon" width={1000} height={1000}/>
        </motion.div>
        <motion.div
          className="h-[80%] w-[90%] fixed rounded-3xl flex justify-center items-center hover:scale-110"
          style={{ scale: sixScale }}
        >
          <Image className="rounded-3xl" src="/pokemon.png" alt="pokemon" width={1000} height={1000}/>
        </motion.div>
      </div>
      {new Array(10).fill(null).map((_, index) => (
        <div className="h-screen w-screen" key={index} />
      ))}
    </div>
  );
}
