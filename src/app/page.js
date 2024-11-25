"use client";
import { useInView, motion, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { TextFade } from "./component/animation/text/fadeup";

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div
      className="flex items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-main w-full"
      style={{
        background: "url('/cover.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="flex flex-col justify-center items-center text-[#c39245]">
        {/* <div className="font-bold lg:text-[68px] text-[42px] flex">
          <AnimatePresence>
            {"Discover a Culinary Masterpiece, Soon".split("").map((char, i) => (
              <motion.p
                ref={ref}
                key={i}
                initial={{ opacity: 0, x: -18 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                exit="hidden"
                transition={{ duration: 0.05, delay: i * 0.05 }}
                className=""
              >
                {char === " " ? <span>&nbsp;</span> : char}
              </motion.p>
            ))}
          </AnimatePresence>
        </div> */}

        <div >
          <TextFade direction="down" className="font-bold lg:text-[48px] text-[24px] w-100 text-center lg:mb-6 mb-2">
            Discover a Culinary Masterpiece, Soon
          </TextFade>
        </div>
        <TextFade
          direction="up"
          className="font-semibold lg:text-[24px] lg:[mt-2] text-[16px] font-nunito"
        >
          Our website is under construction
        </TextFade>
      </div>
    </div>
  );
}
