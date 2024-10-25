"use client";

import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { initialAmount } from "~/constants/data";

const AnimatedCounter2 = () => {
  const [value, setValue] = useState(initialAmount);
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setValue(initialAmount - latest * initialAmount);
  });

  return (
    <p className="fixed top-3 right-3 text-2xl p-2 bg-neutral-400 rounded-md z-20">
      $ {value.toFixed(2)}
    </p>
  );
};

export default AnimatedCounter2;
