"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Section } from "~/components/Section";
import { ReactLenis } from "lenis/react";
import { USMap } from "~/components/USMap";
import { Words } from "~/components/Words";
import { initialAmount } from "~/constants/data";
import AnimatedCounter from "~/components/AnimatedCounter";
// import { AnimatedBall } from "~/components/AnimatedBall";
import Image from "next/image";
import { dollar } from "~/utils/dollar";

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const xp = useTransform(scrollYProgress, [0, 1 / 5, 2 / 5], [-1000, 0, 1000]);
  const xn = useTransform(scrollYProgress, [0, 1 / 5, 2 / 5], [1000, 0, -1000]);
  const sp = useTransform(scrollYProgress, [2 / 5, 3 / 5, 4 / 5], [0, 1, 0.8]);
  const rotate = useTransform(
    scrollYProgress,
    [2 / 5, 3 / 5, 4 / 5],
    ["-180deg", "0deg", "180deg"]
  );
  const opacity = useTransform(
    scrollYProgress,
    [2 / 5, 3 / 5, 4 / 5],
    [0, 1, 1]
  );

  return (
    <ReactLenis root>
      <main className="relative h-[600vh] text-white text-5xl" ref={ref}>
        {/* <AnimatedCounter2 /> */}
        <Image
          src="/fdr-logo.svg"
          alt="logo"
          width={100}
          height={100}
          className="fixed top-3 left-5 z-20"
        />
        <Section
          position={1}
          scrollYProgress={scrollYProgress}
          className="bg-[#5347F6] flex-row gap-x-12"
        >
          <Words words="Hey" />
          <Words words="Dany!" />
          {/* <motion.div
            className="absolute top-14 left-14"
            initial={{ opacity: 1, y: "100vh" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <AnimatedBall />
          </motion.div> */}
        </Section>

        <Section
          position={2}
          scrollYProgress={scrollYProgress}
          className="bg-green-600"
        >
          <motion.p
            className="text-center"
            // whileInView={{ opacity: 1 }}
            // initial={{ opacity: 0 }}
            // transition={{ duration: 1, delay: 0.5 }}
            style={{ x: xp }}
          >
            On August 1, 2019, you faced {dollar.format(initialAmount)} head
            on.
          </motion.p>
          <motion.p
            className="text-center"
            // whileInView={{ opacity: 1 }}
            // initial={{ opacity: 0 }}
            // transition={{ duration: 1, delay: 0.5 }}
            style={{ x: xn }}
          >
            You decided it was time to dump that toxic relationship with debt
            and start a new journey with Freedom Debt Relief.
          </motion.p>
        </Section>

        <Section
          position={3}
          scrollYProgress={scrollYProgress}
          className="bg-rose-600 text-[120px]"
        >
          <AnimatedCounter from={initialAmount} to={0} />
        </Section>

        <Section
          position={4}
          scrollYProgress={scrollYProgress}
          className="bg-orange-600"
        >
          <motion.p
            className="text-center"
            // whileInView={{ opacity: 1, x: 0 }}
            // initial={{ opacity: 0, x: "-100%" }}
            // transition={{ duration: 1, delay: 0.5 }}
            style={{ opacity, rotate, scale: sp }}
          >
            From the busy streets of [New York City] to the heart of [Dallas]
          </motion.p>
          <motion.p
            className="text-center"
            // whileInView={{ opacity: 1, x: 0 }}
            // initial={{ opacity: 0, x: "100%" }}
            // transition={{ duration: 1, delay: 0.5 }}
            style={{ opacity, rotate, scale: sp }}
          >
            others just like you said “enough” to debt.
          </motion.p>
        </Section>

        <Section
          position={5}
          scrollYProgress={scrollYProgress}
          className="bg-slate-600 p-0"
        >
          <USMap initialAmount={initialAmount} />
        </Section>

        <Section
          position={6}
          scrollYProgress={scrollYProgress}
          className="bg-emerald-600"
        >
          <Words words="You-did-it!" />
          <motion.button
            initial={{ scale: 0 }}
            className="px-4 py-2 bg-[#5347F6] opacity-100 rounded-lg text-2xl"
            animate={{
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          >
            Share
          </motion.button>
        </Section>
      </main>
    </ReactLenis>
  );
}
