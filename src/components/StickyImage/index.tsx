import { useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";

export interface StickyImageProps {
  alt: string;
  imageURL: string;
}

export const StickyImage = ({ alt, imageURL }: StickyImageProps) => {
  // const targetRef = useRef<HTMLImageElement>(null);
  // const { scrollYProgress } = useScroll({
  //   target: targetRef,
  //   offset: ["end end", "end start"],
  // });
  // const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  return (
    <div
      // ref={targetRef}
      // style={{ scale }}
    >
      <Image
        alt={alt}
        src={imageURL}
        width={400}
        height={400}
        className="w-full h-[400px] object-cover rounded-2xl"
      />
    </div>
  );
};
