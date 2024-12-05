import React, { useContext, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, useInView } from "framer-motion";
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
const FADE_DOWN = {
  show: { opacity: 1, y: 0, transition: { ease: "anticipate", delay: 0.1 } },
  hidden: { opacity: 0, y: -2 },
};
export const HomeSlider = () => {
  const { screenWidth } = useContext(AppContext);
  const isDesktop = screenWidth > 1080 ? true : false;

  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
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
                        <span className="">BOOK A TABLE</span>
                      </Link>
                    </div>
                  </motion.div>
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
