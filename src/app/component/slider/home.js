import React, { useContext, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { AnimatePresence, motion, useInView } from "framer-motion";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { DiamondIcon } from "../icon/diamond";
import { AppContext } from "@/app/context/appContext";
import { WineIcon } from "../icon/wineGlass";
import Link from "next/link";
const FADE_DOWN0 = {
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", duration: 0.8, delay: 0.5 },
  },
  hidden: { opacity: 0, y: 2 },
};
const FADE_DOWN = {
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", duration: 0.8, delay: 1.8 },
  },
  hidden: { opacity: 0, y: 0 },
};
const FADE_DOWN2 = {
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", duration: 0.5, delay: 2.6 },
  },
  hidden: { opacity: 0, y: 0 },
};
export const HomeSlider = () => {
  const { windowWidth } = useContext(AppContext);
  const isDesktop = windowWidth > 1080 ? true : false;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        pagination={{
          clickable: true,
        }}
        // autoplay={{
        //   delay: 4500,
        //   disableOnInteraction: false,
        // }}
        modules={[EffectFade, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          {({ isActive }) => (
            <>
              {isActive && (
                <motion.div
                  initial="hidden"
                  animate={isActive ? "show" : ""}
                  variants={{
                    hidden: {},
                    show: {
                      transition: {
                        staggerChildren: 0.1,
                      },
                    },
                  }}
                >
                  <div className="w-full h-[100vh] flex flex-col lg:justify-center items-center text-white text-center lg:mt-0 mt-[194px]">
                    <motion.div variants={FADE_DOWN0}>
                      <DiamondIcon />
                    </motion.div>

                    {isDesktop ? (
                      <div className="flex text-[32px] lg:w-100 lg:text-[40px] mt-[20px]">
                        <AnimatePresence>
                          {"Food |that |Speaks |a Thousand |Stories"
                            .split("|")
                            .map((char, i) => (
                              <motion.p
                                ref={ref}
                                key={i}
                                initial={{ opacity: 0, y: 18 }}
                                animate={isActive ? { opacity: 1, y: 0 } : {}}
                                exit="hidden"
                                transition={{
                                  duration: 0.23,
                                  delay: i === 0 ? 1 : i * 0.2 + 1,
                                  type: "tween",
                                }}
                                className=""
                              >
                                {char === " " ? <span>&nbsp;</span> : char}
                                &nbsp;
                              </motion.p>
                            ))}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <div className="flex flex-col w-100 justify-center">
                        <div className="flex text-[32px] w-100 lg:text-[40px] mt-[20px] text-center mx-auto">
                          <AnimatePresence>
                            {"Food |that |Speaks".split("|").map((char, i) => (
                              <motion.p
                                ref={ref}
                                key={i}
                                initial={{ opacity: 0, y: 9 }}
                                animate={isActive ? { opacity: 1, y: 0 } : {}}
                                exit="hidden"
                                transition={{
                                  duration: 0.23,
                                  delay: i === 0 ? 1 : i * 0.2 + 1,
                                  type: "tween",
                                }}
                                className=""
                              >
                                {char === " " ? <span>&nbsp;</span> : char}&nbsp;
                              </motion.p>
                            ))}
                          </AnimatePresence>
                        </div>
                        <div className="flex text-[32px] w-100 lg:text-[40px]] text-center mx-auto">
                          <AnimatePresence>
                            {"a Thousand |Stories".split("|").map((char, i) => (
                              <motion.p
                                ref={ref}
                                key={i}
                                initial={{ opacity: 0, y: 9 }}
                                animate={isActive ? { opacity: 1, y: 0 } : {}}
                                exit="hidden"
                                transition={{
                                  duration: 0.23,
                                  delay: i === 0 ? 1.6 : i * 0.2 + 1.6,
                                  type: "tween",
                                }}
                                className=""
                              >
                                {char === " " ? <span>&nbsp;</span> : char}&nbsp;
                              </motion.p>
                            ))}
                          </AnimatePresence>
                        </div>
                      </div>
                    )}

                    {/* <div className="text-[32px] lg:w-100 lg:text-[40px] mt-[20px]">
                        Food that Speaks {isDesktop ? "" : <br />} a Thousand
                        Stories
                      </div> */}

                    <motion.div
                      variants={FADE_DOWN}
                      className="lg:text-[20px] text-[16px] mt-[28px] mb-[20px] text-center font-nunito lg:w-100 w-[75%]"
                    >
                      Explore a new world of flavors, with us <br />
                      as your trusted guide
                    </motion.div>

                    <motion.div
                      variants={FADE_DOWN2}
                      className="px-4 py-[10px] bg-[#F15922] rounded-[50px] flex items-center button-primary-glow"
                    >
                      <Link
                        href="https://connect.sarirasa.co.id/reservation-store/satehouse-canggu"
                        target="_blank"
                      >
                        <span className="">BOOK A TABLE</span>
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => (
            <>
              {isActive && (
                <motion.div
                  initial="hidden"
                  animate={isActive ? "show" : ""}
                  variants={{
                    hidden: {},
                    show: {
                      transition: {
                        staggerChildren: 0.1,
                      },
                    },
                  }}
                >
                  <motion.div variants={FADE_DOWN}>
                    <div className="w-full h-[100vh] flex flex-col lg:justify-center items-center text-white text-center lg:mt-0 mt-[194px]">
                      <DiamondIcon />
                      <div className="text-[32px] lg:w-100 lg:text-[40px] mt-[20px]">
                        Food that Speaks {isDesktop ? "" : <br />} a Thousand
                        Stories
                      </div>
                      <div className="lg:text-[20px] text-[16px] mt-[28px] mb-[20px] text-center font-nunito lg:w-100 w-[75%]">
                        Explore a new world of flavors, with us <br />
                        as your trusted guide
                      </div>
                      <Link
                        href="https://connect.sarirasa.co.id/reservation-store/satehouse-canggu"
                        target="_blank"
                        className="px-4 py-[10px] bg-[#F15922] rounded-[50px] flex items-center button-primary-glow"
                      >
                        <span className="ml-2">BOOK A TABLE</span>
                      </Link>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </>
          )}
        </SwiperSlide>
      </Swiper>
    </>
  );
};
