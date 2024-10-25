import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export interface WordsProps {
  words: string;
}

export const Words = ({ words }: WordsProps) => {
  const chars = words.split("");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div className="flex text-7xl text-white font-bold overflow-hidden">
      <div ref={ref} />
      {inView &&
        chars.map((char, index) => (
          <motion.span
            key={index}
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            {char}
          </motion.span>
        ))}
    </div>
  );
};
