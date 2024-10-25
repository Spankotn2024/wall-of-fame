"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import styles from "./USMap.module.css";
import Image from "next/image";
import PinSVG from "../PinSVG";

const pinsData = [
  { id: 1, xPercent: 43, yPercent: 45, city: "$43,926" },
  { id: 2, xPercent: 49, yPercent: 67, city: "$97,082" },
  { id: 3, xPercent: 79, yPercent: 34, city: "$78,669" },
  { id: 4, xPercent: 25, yPercent: 38, city: "$98,703" },
  { id: 5, xPercent: 51, yPercent: 59, city: "$74,354" },
  { id: 6, xPercent: 93, yPercent: 20, city: "$61,530" },
  { id: 7, xPercent: 23, yPercent: 44, city: "$46,243" },
  { id: 8, xPercent: 10, yPercent: 80, city: "$24,267" },
  { id: 9, xPercent: 85, yPercent: 42, city: "$67,866" },
  { id: 10, xPercent: 63, yPercent: 57, city: "$47,724" },
  { id: 11, xPercent: 21, yPercent: 53, city: "$4,871" },
  { id: 12, xPercent: 77, yPercent: 35, city: "$37,785" },
  { id: 13, xPercent: 39, yPercent: 41, city: "$41,438" },
];

const USMap = ({ initialAmount }) => {
  const controls = useAnimation();
  const [showPins, setShowPins] = useState(false);
  const ref = useRef(null)
  const inView = useInView(ref, { once: true });
  const [storySection, setStorySection] = useState(0);

  console.log(inView, storySection);


  useEffect(() => {
    if (!inView) return;
    const timer = setTimeout(() => {
      console.log("storySection inview", storySection);
      
      setStorySection((prevSection) => prevSection + 1);
    }, 4000);

    return () => clearTimeout(timer);
  }, [inView]);

  useEffect(() => {
    const runAnimations = async () => {
      console.log("storySection run", storySection);
      
      if (storySection === 0) {
        // Step 0: Initial zoom in on New York
        await controls.start({
          scale: 10,
          x: "-50%",
          y: "-50%",
          transition: { duration: 0 },
        });
      } else if (storySection === 1) {
        // Step 1: Hold zoomed-in state
        await controls.start({
          scale: 10,
          x: "-50%",
          y: "-50%",
          transition: { duration: 1 },
        });
      } else if (storySection === 2) {
        // Step 2: Zoom out to show the entire US
        await controls.start({
          scale: 1,
          x: "0%",
          y: "0%",
          transition: { duration: 2.5 },
        });
      } else if (storySection === 3) {
        // Step 3: Show pins
        setShowPins(true);
      }
    };

    runAnimations();
  }, [storySection, controls]);

  return (
    <div className={styles.mapContainer}>
      <motion.div ref={ref} className={styles.map} animate={controls}>
        <Image
          src="/images/USA_Counties_with_FIPS_and_names.svg"
          alt="US Map"
          layout="responsive"
          width={1000}
          height={600}
        />

        {/* Static Pin (blue) */}
        <div
          className={styles.pin}
          style={{
            left: "55%",
            top: "56%",
          }}
        >
          <span className={styles.label}>{initialAmount}</span>
        </div>

        {/* Show dynamic pins when appropriate */}
        {showPins &&
          pinsData.map((pin) => (
            <motion.div
              key={pin.id}
              className={styles.pin}
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: pin.id * 0.3 }}
              style={{
                left: `${pin.xPercent}%`,
                top: `${pin.yPercent}%`,
              }}
            >
              <PinSVG />
              <span className={styles.label}>{pin.city}</span>
            </motion.div>
          ))}
      </motion.div>
    </div>
  );
};

export { USMap };
