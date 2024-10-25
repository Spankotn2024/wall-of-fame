import { motion } from "framer-motion";

export const AnimatedBall = () => (
  <motion.div
    className="w-10 h-10 bg-white rounded-full"
    animate={{
      scale: [1, 1.5, 1.5, 1, 1],
      rotate: [0, 0, 180, 180, 0],
      // borderRadius: "50%",
    }}
    transition={{
      duration: 2,
      ease: "easeInOut",
      times: [0, 0.2, 0.5, 0.8, 1],
      repeat: Infinity,
      repeatDelay: 1,
    }}
  />
);
