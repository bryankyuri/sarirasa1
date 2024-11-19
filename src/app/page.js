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
        <div className="font-bold lg:text-[72px] text-[42px] flex">
          <AnimatePresence>
            {"Coming Soon".split("").map((char, i) => (
              <motion.p
                ref={ref}
                key={i}
                initial={{ opacity: 0, x: -18 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                exit="hidden"
                transition={{ duration: 0.2, delay: i * 0.1 }}
                className=""
              >
                {char === " " ? <span>&nbsp;</span> : char}
              </motion.p>
            ))}
          </AnimatePresence>
        </div>
        {/* <div className="font-bold lg:text-[72px] text-[42px]"></div> */}
        <TextFade
          direction="up"
          className="font-semibold lg:text-[24px] lg:[mt-2] text-[18px] font-nunito"
        >
          Our website is under construction
        </TextFade>
      </div>
    </div>
  );
}
