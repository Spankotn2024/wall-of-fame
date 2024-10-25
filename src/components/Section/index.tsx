import { motion, MotionValue, useTransform } from "framer-motion";
import { ComponentPropsWithoutRef } from "react";
import { cn } from "~/utils/cn";

export interface SectionProps extends ComponentPropsWithoutRef<"section"> {
  scrollYProgress: MotionValue<number>;
  position: number;
}

export const Section = ({
  children,
  className,
  scrollYProgress,
  position,
}: SectionProps) => {
  const scales = getScale(position);
  const scale = useTransform(scrollYProgress, scales[0], scales[1]);
  const rotate = useTransform(scrollYProgress, scales[0], scales[2]);
  const opacity = useTransform(scrollYProgress, scales[0], scales[3]);

  return (
    <motion.section
      style={{ scale, rotate, opacity }}
      className={cn(
        "p-16 flex flex-col gap-12 h-screen sticky top-0 overflow-hidden items-center justify-center",
        className
      )}
    >
      {children}
    </motion.section>
  );
};

const totalSections = 5;

export const getScale = (index: number) => {
  switch (index) {
    case 1:
      return [
        [0, 1 / totalSections],
        [1, 0.8],
        [0, -5],
        [1, 0],
      ];
    case 2:
      return [
        [0, 1 / totalSections, 2 / totalSections],
        [0.8, 1, 0.8],
        [-5, 0, 5],
        [1, 1, 0],
      ];
    case 3:
      return [
        [1 / totalSections, 2 / totalSections, 3 / totalSections],
        [0.8, 1, 0.8],
        [5, 0, -5],
        [1, 1, 0],
      ];
    case 4:
      return [
        [2 / totalSections, 3 / totalSections, 4 / totalSections],
        [0.8, 1, 0.8],
        [-5, 0, 5],
        [1, 1, 0],
      ];
    case 5:
      return [
        [3 / totalSections, 4 / totalSections, 5 / totalSections],
        [0.8, 1, 0.8],
        [5, 0, -5],
        [1, 1, 0],
      ];
    case 6:
      return [
        [4 / totalSections, 5 / totalSections],
        [0.8, 1],
        [-5, 0],
        [1, 1],
      ];

    default:
      return [
        [0, 1 / totalSections],
        [1, 0.8],
        [0, -5],
        [0, 1],
      ];
  }
};
