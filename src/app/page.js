"use client";
import { useState, useEffect, useContext } from "react";
import { Header } from "./component/header";
import { HomeSlider } from "./component/slider/home";
import { FoodIcon } from "./component/icon/food";
import { DrinkIcon } from "./component/icon/drink";
import { GoogleMapsEmbed } from "@next/third-parties/google";
import { TextFade } from "./component/animation/text/fadeup";
import Link from "next/link";
import { FeedbackIcon } from "./component/icon/feedback";
import { WaIcon } from "./component/icon/wa";
import { GiftIcon } from "./component/icon/gift";
import Image from "next/image";
import { WaGreenIcon } from "./component/icon/wa_green";
import { IgIcon } from "./component/icon/ig";
import { GmapsIcon } from "./component/icon/gmaps";
import { TripAdvisorIcon } from "./component/icon/tripadvisor";
import { WaBlackIcon } from "./component/icon/waBlack";
import { AppContext } from "./context/appContext";
import { AnimatePresence, motion } from "framer-motion";
import { BackIcon } from "./component/icon/back";
import HTMLFlipBook from "react-pageflip";
import { Tooltip } from "react-tooltip";

const varFadeInOutFullMobile = {
  hidden: { opacity: 0, transition: { duration: 0.2 } },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 1, transition: { duration: 0.2 } },
};

export default function Home() {
  const [isTransformHeader, setIsTransformHeader] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { screenWidth } = useContext(AppContext);
  const isDesktop = screenWidth > 1080 ? true : false;
  const MenuPageFoodWidth = isDesktop ? screenWidth * 0.32 : screenWidth - 40;
  const MenuPageFoodRatio = MenuPageFoodWidth / 1270;
  const MenuPageFoodHeight = 1536 * MenuPageFoodRatio;
  const MenuPageDrinkWidth = isDesktop ? screenWidth * 0.35 : screenWidth - 40;
  const MenuPageDrinkRatio = MenuPageDrinkWidth / 1175;
  const MenuPageDrinkHeight = 1600 * MenuPageDrinkRatio;
  console.log(MenuPageFoodRatio);
  console.log(MenuPageFoodWidth);
  console.log(MenuPageFoodHeight);
  const [menuFood, setMenuFood] = useState("");

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showModal]);
  useEffect(() => {
    const listenToScroll = () => {
      let winScroll = document.documentElement.scrollTop;
      let tempIsTransformHeader = isTransformHeader;
      const shrinkPoint = 100;
      console.log(shrinkPoint);
      if (winScroll > shrinkPoint) {
        if (!tempIsTransformHeader) {
          tempIsTransformHeader = true;
        }
      } else if (winScroll <= shrinkPoint) {
        if (tempIsTransformHeader) {
          tempIsTransformHeader = false;
        }
      }
      setIsTransformHeader(tempIsTransformHeader);
    };

    document.addEventListener("scroll", listenToScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const renderMenuFood = [];
    for (let index = 0; index < 20; index++) {
      renderMenuFood.push(`/foodmenu/Page${index + 1}.jpg`);
    }
    setMenuFood([...renderMenuFood]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screenWidth]);

  // const RenderMenuFood = () => {
  //   return (
  //     <>
  //       {menuFood?.length > 0 &&
  //         menuFood.map((item, index) => {
  //           return (
  //             <div
  //               className={`demoPage shadow-xl flex justify-center items-center w-[${MenuPageWidth}px] h-[${MenuPageHeight}px] border`}
  //               key={"menu food page" + (index + 1)}
  //             >
  //               <div
  //                 className="demoPage shadow-xl"
  //                 key={"menu food page" + (index + 1)}
  //               >
  //                 <div
  //                   style={{
  //                     width: "100%",
  //                     height: MenuPageHeight + "px",
  //                     backgroundImage: `url(${item})`,
  //                     backgroundSize: "cover",
  //                   }}
  //                 ></div>
  //               </div>
  //             </div>
  //           );
  //         })}
  //     </>
  //   );
  // };

  return (
    <main className="w-100 flex flex-col relative">
      <Header isTransformHeader={isTransformHeader} />
      {isDesktop ? (
        <>
          <div
            className="w-full h-[100vh] flex justify-center align-center relative overflow-hidden"
            id="home"
            style={{
              backgroundImage: "url('bgHero.jpg')",
              backgroundSize: "100% auto",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundAttachment: "fixed",
            }}
          >
            <HomeSlider />
            <div className="w-[100vw] h-[100vh] absolute bg-[#000000A6] left-0 top-0"></div>
          </div>
          <div className="w-full max-w-[1300px] flex justify-center align-center relative mx-auto my-[70px]">
            <div
              className="w-1/2"
              style={{
                backgroundImage: "url('bgContent1_new.jpg')",
                backgroundSize: "auto 100%",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div
              className="w-1/2 flex justify-center items-center text-black border-[#AE8D9380] border border-left-0"
              id="our-story"
            >
              <div className="w-[420px] h-[690px] text-left flex flex-col justify-center items-center">
                <TextFade
                  direction="down"
                  className="flex flex-col justify-center items-center w-100 h-100"
                >
                  <div className="text-[32px] text-[#F15A22] mb-[20px]">
                    A Flavorful Adventure Awaits
                  </div>
                  <div className="font-bulldog text-[20px]">
                    Sate House Senayan brings you on a wondrous flavour-fuelled
                    odyssey through the largest archipelago in the world. On a
                    single table, discover the multitude of rich traditions,
                    memories and regional influences that make Indonesian
                    cuisine so deliciously complex and diverse.
                    <br />
                    <br />
                    As fiercely protective guardians of the authenticity of our
                    Indonesian culture, every meal with us is like stepping into
                    our library of stories, with every dish filled with rich
                    history. Enjoy a social experience with no one style of
                    eating, just a liberating dining adventure where the usual
                    rules no longer apply.
                  </div>
                </TextFade>
              </div>
            </div>
          </div>
          <div
            className="w-full flex justify-center align-start mx-auto mt-[70px]"
            id="menu"
          >
            <div
              className="w-1/2 flex flex-col justify-center items-center relative"
              style={{
                backgroundImage: "url('bgContent2Left.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                height: "100vh",
              }}
            >
              <div className="w-[100%] h-[100vh] absolute bg-[#0000004D] left-0 top-0"></div>
              <TextFade
                direction="down"
                className="flex flex-col justify-center items-center w-100 h-100 z-[2]"
              >
                <div className="text-white text-[32px] mb-[130px]">
                  Discover the Flavors
                  <br /> of the Archipelago
                </div>
                <div className="flex gap-[100px]">
                  <div className="flex flex-col items-center">
                    <FoodIcon />
                    <button
                      className="py-2 px-6 bg-[#F15922] text-[24px] rounded-[8px] leading-[30px] ml-6 mt-[50px] button-primary-glow"
                      onClick={() => setShowModal("food")}
                    >
                      Food
                      <br />
                      Menu
                    </button>
                  </div>
                  <div className="flex flex-col items-center">
                    <DrinkIcon />
                    <button
                      className="py-2 px-6 bg-[#F15922] text-[24px] rounded-[8px] leading-[30px] ml-6 mt-[50px] button-primary-glow"
                      onClick={() => setShowModal("drink")}
                    >
                      Drink
                      <br />
                      Menu
                    </button>
                  </div>
                </div>
              </TextFade>
            </div>
            <div
              className="w-1/2 "
              style={{
                backgroundImage: "url('bgContent2Right.jpg')",
                backgroundSize: "50% auto",
                backgroundPosition: "top right",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
              }}
            >
              {/* <img src="bgContent2Right.jpg" width="100%" height="100vh" /> */}
            </div>
          </div>
          <div
            className="w-full flex justify-center align-center relative mx-auto my-[70px] max-w-[1400px] h-[404px]"
            id="contact-us"
          >
            <div
              style={{ height: "100%", width: "870px" }}
              className="rounded-lg overflow-hidden"
            >
              <GoogleMapsEmbed
                apiKey="AIzaSyBL1dmkCrTcHvrJhpeWCOoDzIByQu5480o"
                height={440}
                width="100%"
                mode="place"
                q="Sate House Senayan, Canggu"
              />
            </div>
            <div className="flex flex-col text-black ml-[20px] w-[410px] justify-between">
              <TextFade direction="down">
                <div>
                  <div className="text-[32px] mb-[20px]">Visit Us</div>
                  <div className="text-[20px] font-bulldog">
                    Jl. Pantai Batu Bolong No.39, Canggu,
                    <br />
                    Kec. Kuta Utara, Kabupaten Badung,
                    <br /> Bali 80351
                    <br />
                    <br />
                    Open daily 11am - 11pm
                  </div>
                </div>
              </TextFade>
              <TextFade direction="down" className="w-[270px]">
                <div className="text-[32px] mb-[20px]">Get in Touch</div>
                <div className="flex items-center gap-[12px]">
                  <Link
                    href="#"
                    className="flex bg-[#F15A22] font-bulldog text-white items-center justify-center py-2 rounded-[8px] pl-2 pr-3 button-primary-glow"
                  >
                    <FeedbackIcon />
                    <div className="ml-2">Feedback</div>
                  </Link>
                  <Link
                    href="https://api.whatsapp.com/send/?phone=6281514163510 &text=custom%20text%20message&type=phone_number&app_absent=0"
                    target="_blank"
                    className="flex bg-[#F15A22] font-bulldog text-white items-center justify-center py-2 rounded-[8px] pl-2 pr-3 button-primary-glow"
                  >
                    <WaIcon />
                    <div className="ml-2">0815-1416-3510</div>
                  </Link>
                </div>
                <Link
                  href="https://connect.sarirasa.co.id/clogin"
                  target="_blank"
                  className="flex bg-black font-bulldog text-white items-center justify-start py-2 rounded-[8px] pl-2 pr-3 mt-[12px] button-primary-glow"
                >
                  <GiftIcon />
                  <div className="ml-2">Sign Up for Rewards</div>
                </Link>
              </TextFade>
            </div>
          </div>
          <div className="flex w-100  bg-[#F4F4F4] text-black justify-between items-center">
            <div className="flex w-[75%] justify-between items-center max-w-[1300px] h-[86px] mx-auto">
              <div className="text-[14px] font-bulldog w-100">
                Copyright © 2024 - Sate House Senayan
              </div>
              <div className="flex items-center">
                <div className="text-[14px] ">Member of</div>
                <Link href="https://sarirasa.co.id/">
                  <Image
                    width={142}
                    height={66}
                    src="/sarirasa_logo_new.png"
                    alt="Sarirasa"
                  />
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div
            className="w-full h-[100vh] flex justify-center align-center relative overflow-hidden"
            id="home"
            style={{
              backgroundImage: "url('bgHero.jpg')",
              backgroundSize: "auto 100%",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundAttachment: "fixed",
            }}
          >
            <HomeSlider />
            <div className="w-[100vw] h-[100vh] absolute bg-[#000000A6] left-0 top-0"></div>
          </div>
          <div className="w-full flex flex-col justify-center align-center relative mx-auto mt-[70px] px-4">
            <div
              className="w-100 flex justify-center items-center text-black border-[#AE8D9380] border border-bottom-0 py-6"
              id="our-story"
            >
              <div className="w-100 px-6 text-left flex flex-col justify-center items-center">
                <TextFade
                  direction="down"
                  className="flex flex-col justify-center items-center w-100 h-100"
                >
                  <div className="text-[24px] text-[#F15A22] mb-[20px]">
                    A Flavorful Adventure Awaits
                  </div>
                  <div className="font-bulldog text-[16px]">
                    Sate House Senayan brings you on a wondrous flavour-fuelled
                    odyssey through the largest archipelago in the world. On a
                    single table, discover the multitude of rich traditions,
                    memories and regional influences that make Indonesian
                    cuisine so deliciously complex and diverse.
                    <br />
                    <br />
                    As fiercely protective guardians of the authenticity of our
                    Indonesian culture, every meal with us is like stepping into
                    our library of stories, with every dish filled with rich
                    history. Enjoy a social experience with no one style of
                    eating, just a liberating dining adventure where the usual
                    rules no longer apply.
                  </div>
                </TextFade>
              </div>
            </div>
            <div
              className="w-full "
              style={{
                width: "100%",
                height: screenWidth - 32 + "px",
                backgroundImage: "url('bgContent1_new.jpg')",
                backgroundSize: "auto 100%",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              {/* <img src="/bgContent1_new.jpg" alt="Content_Story" /> */}
            </div>
          </div>
          <div
            className="w-full flex flex-col justify-center align-start mx-auto mt-[70px]"
            id="menu"
          >
            <div
              className="w-100 flex flex-col justify-center items-center relative h-[543px]"
              style={{
                backgroundImage: "url('bgContent2Left.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="w-[100%] h-[543px] absolute bg-[#0000004D] left-0 top-0"></div>
              <TextFade
                direction="down"
                //kiri
                className="flex flex-col justify-start items-start w-[100%] h-100 z-[2] pl-4"
              >
                <div className="text-white text-[32px] mb-[40px]">
                  Discover the Flavors
                  <br /> of the Archipelago
                </div>
                <div className="flex gap-[24px] justify-start">
                  <div className="flex flex-col items-center">
                    <div className="scale-[70%]">
                      <FoodIcon />
                    </div>
                    <button
                      className="py-2 px-6 bg-[#F15922] text-[18px] rounded-[8px] leading-[22px] ml-3 mt-[12px] button-primary-glow"
                      onClick={() => setShowModal("food")}
                    >
                      Food
                      <br />
                      Menu
                    </button>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="scale-[70%]">
                      <DrinkIcon />
                    </div>

                    <button
                      className="py-2 px-6 bg-[#F15922] text-[18px] rounded-[8px] leading-[22px] ml-3 mt-[12px] button-primary-glow"
                      onClick={() => setShowModal("drink")}
                    >
                      Drink
                      <br />
                      Menu
                    </button>
                  </div>
                </div>
              </TextFade>
            </div>
            <div
              className="w-100"
              style={{
                backgroundImage: "url('bgContent2Right.jpg')",
                backgroundSize: "100% auto",
                backgroundPosition: "bottom center",
                backgroundRepeat: "no-repeat",
                height: screenWidth,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
            </div>
          </div>
          <div
            className="w-full flex flex-col justify-center align-center relative mx-auto w-100 my-[70px]"
            id="contact-us"
          >
            <div
              style={{ height: "100%", width: "100%" }}
              className="overflow-hidden"
            >
              <GoogleMapsEmbed
                apiKey="AIzaSyBL1dmkCrTcHvrJhpeWCOoDzIByQu5480o"
                height={440}
                width="100%"
                mode="place"
                q="Sate House Senayan, Canggu"
              />
            </div>
            <div className="flex flex-col text-black ml-[20px] w-100 justify-between mt-4">
              <TextFade direction="down">
                <div>
                  <div className="text-[32px] my-[20px] text-[#F15A22]">
                    Visit Us
                  </div>
                  <div className="text-[18px] font-bulldog mb-8">
                    Jl. Pantai Batu Bolong No.39, Canggu,
                    <br />
                    Kec. Kuta Utara, Kabupaten Badung, <br />
                    Bali &nbsp;80351
                    <br />
                    <br />
                    Open daily 11am - 11pm
                  </div>
                </div>
              </TextFade>
              <TextFade direction="down" className="w-[270px]">
                <div className="text-[32px] mb-[20px] text-[#F15A22] button-primary-glow">
                  Get in Touch
                </div>
                <div className="flex items-center gap-[12px]">
                  <Link
                    href="#"
                    className="flex bg-[#F15A22] font-bulldog text-white items-center justify-center py-2 rounded-[8px] pl-2 pr-3"
                  >
                    <FeedbackIcon />
                    <div className="ml-2">Feedback</div>
                  </Link>
                  <Link
                    href="https://api.whatsapp.com/send/?phone=6281514163510 &text=custom%20text%20message&type=phone_number&app_absent=0"
                    target="_blank"
                    className="flex bg-[#F15A22] font-bulldog text-white items-center justify-center py-2 rounded-[8px] pl-2 pr-3"
                  >
                    <WaIcon />
                    <div className="ml-2">0815-1416-3510</div>
                  </Link>
                </div>
                <Link
                  href="https://connect.sarirasa.co.id/clogin"
                  target="_blank"
                  className="flex bg-black font-bulldog text-white items-center justify-start py-2 rounded-[8px] pl-2 pr-3 mt-[12px]"
                >
                  <GiftIcon />
                  <div className="ml-2">Sign Up for Rewards</div>
                </Link>
              </TextFade>
            </div>
          </div>
          <div className="flex w-100  bg-[#F4F4F4] text-black justify-between items-center pb-8">
            <div className="flex w-[100%] justify-between items-center h-[86px] mx-auto px-4 [text-12px]">
              <div className="flex flex-col items-center">
                {/* <div className="text-[14px] ">Member of</div> */}
                <Link href="https://sarirasa.co.id/">
                  <Image
                    width={142}
                    height={66}
                    src="/sarirasa_logo_new.png"
                    alt="Sarirasa"
                  />
                </Link>
              </div>
              <div className="text-[14px] text-right font-bulldog w-100">
                Copyright <br />© 2024 - Sate House Senayan
              </div>
            </div>
          </div>
        </>
      )}
      <div
        className="fixed right-[8px] lg:right-[20px] z-[999] w-[40px] flex flex-col justify-center items-center gap-[16px] py-4 bg-white rounded-lg border-[#AE8D9380] border shadow-md"
        style={{ top: "calc(50% - 76px)" }}
      >
        <Link
          href="https://www.instagram.com/satehousesenayan"
          target="_blank"
          className={`${isDesktop ? "svg-fill-primary" : ""}`}
          id="instagram"
        >
          <IgIcon />
        </Link>
        <Link
          href="https://maps.app.goo.gl/P9yqdetkB84ob9Ye6"
          target="_blank"
          className={`${isDesktop ? "svg-fill-primary" : ""}`}
          id="gmaps"
        >
          <GmapsIcon />
        </Link>
        <Link
          href="https://www.tripadvisor.in/Restaurant_Review-g311298-d25574926-Reviews-Sate_Khas_Senayan_Canggu-Canggu_North_Kuta_Bali.html"
          target="_blank"
          className={`${isDesktop ? "svg-fill-primary" : ""}`}
          id="tripadvisor"
        >
          <TripAdvisorIcon />
        </Link>
        <Link
          target="_blank"
          href="https://api.whatsapp.com/send/?phone=6281514163510 &text=custom%20text%20message&type=phone_number&app_absent=0"
          className={`${isDesktop ? "svg-fill-primary" : ""}`}
          id="whatsapp"
        >
          <WaBlackIcon />
        </Link>
      </div>
      {/* <div className="fixed bottom-0 right-[20px] z-[999]">
        <div
          className="py-2 px-4 bg-black  rounded-[8px_8px_0_0] flex"
          style={{ border: "2px solid white", borderBottom: "0px" }}
        >
          <WaGreenIcon />
          <div className="text-[16px] tetx-white ml-2">Contact Us</div>
        </div>
      </div> */}
      <AnimatePresence>
        {showModal === "food" && (
          <motion.div
            variants={varFadeInOutFullMobile}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full h-screen fixed top-0 left-0 flex justify-center items-center  z-[999]"
          >
            <div className="w-full flex lg:flex-row flex-col shadow-lg px-6 py-8 bg-[#fff] h-[100vh] lg:pt-[136px] pt-[96px] lg:justify-between">
              <button
                className="bg-[#F15A22] flex rounded-[8px] w-[80px] h-[40px] justify-center items-center mr-4 lg:mb-0 mb-4"
                onClick={() => {
                  setShowModal("");
                }}
              >
                <BackIcon />
                <div className="text-[14px] ml-2">Back</div>
              </button>
              <div
                style={{
                  width: isDesktop
                    ? MenuPageFoodWidth * 2 + "px"
                    : MenuPageFoodWidth + "px",
                }}
              >
                <HTMLFlipBook
                  width={
                    isDesktop
                      ? Math.round(MenuPageFoodWidth)
                      : Math.round(MenuPageFoodWidth)
                  }
                  height={
                    isDesktop
                      ? Math.round(MenuPageFoodHeight)
                      : Math.round(MenuPageFoodHeight)
                  }
                  minWidth={
                    isDesktop
                      ? Math.round(MenuPageFoodWidth)
                      : Math.round(MenuPageFoodWidth)
                  }
                  maxWidth={
                    isDesktop
                      ? Math.round(MenuPageFoodWidth) * 2
                      : Math.round(MenuPageFoodWidth)
                  }
                  minHeight={
                    isDesktop
                      ? Math.round(MenuPageFoodHeight)
                      : Math.round(MenuPageFoodHeight)
                  }
                  maxHeight={
                    isDesktop
                      ? Math.round(MenuPageFoodHeight) * 2
                      : Math.round(MenuPageFoodHeight)
                  }
                  drawShadow={true}
                  maxShadowOpacity={0.3}
                  showCover={false}
                  className="demo-book text-black w-max rounded-lg"
                >
                  {/* <RenderMenuFood /> */}

                  {/* <div className="demoPage shadow-xl">
                <div
                  style={{
                    width: MenuPageFoodWidth + "px",
                    height: MenuPageFoodHeight + "px",
                    backgroundImage: "url(/foodmenu/Page1.jpg)",
                    backgroundSize: "cover",
                  }}
                ></div>
              </div> */}
                  <div className="demoPage shadow-xl">
                    <div
                      style={{
                        width: MenuPageFoodWidth + "px",
                        height: MenuPageFoodHeight + "px",
                        backgroundImage: "url(/foodmenu/Page2.jpg)",
                        backgroundSize: "cover",
                      }}
                    ></div>
                  </div>
                  <div className="demoPage shadow-xl">
                    <div
                      style={{
                        width: MenuPageFoodWidth + "px",
                        height: MenuPageFoodHeight + "px",
                        backgroundImage: "url(/foodmenu/Page3.jpg)",
                        backgroundSize: "cover",
                      }}
                    ></div>
                  </div>
                  <div className="demoPage shadow-xl">
                    <div
                      style={{
                        width: MenuPageFoodWidth + "px",
                        height: MenuPageFoodHeight + "px",
                        backgroundImage: "url(/foodmenu/Page4.jpg)",
                        backgroundSize: "cover",
                      }}
                    ></div>
                  </div>
                  <div className="demoPage shadow-xl">
                    <div
                      style={{
                        width: MenuPageFoodWidth + "px",
                        height: MenuPageFoodHeight + "px",
                        backgroundImage: "url(/foodmenu/Page5.jpg)",
                        backgroundSize: "cover",
                      }}
                    ></div>
                  </div>
                  <div className="demoPage shadow-xl">
                    <div
                      style={{
                        width: MenuPageFoodWidth + "px",
                        height: MenuPageFoodHeight + "px",
                        backgroundImage: "url(/foodmenu/Page6.jpg)",
                        backgroundSize: "cover",
                      }}
                    ></div>
                  </div>
                  <div className="demoPage shadow-xl">
                    <div
                      style={{
                        width: MenuPageFoodWidth + "px",
                        height: MenuPageFoodHeight + "px",
                        backgroundImage: "url(/foodmenu/Page7.jpg)",
                        backgroundSize: "cover",
                      }}
                    ></div>
                  </div>
                  <div className="demoPage shadow-xl">
                    <div
                      style={{
                        width: MenuPageFoodWidth + "px",
                        height: MenuPageFoodHeight + "px",
                        backgroundImage: "url(/foodmenu/Page8.jpg)",
                        backgroundSize: "cover",
                      }}
                    ></div>
                  </div>
                  <div className="demoPage shadow-xl">
                    <div
                      style={{
                        width: MenuPageFoodWidth + "px",
                        height: MenuPageFoodHeight + "px",
                        backgroundImage: "url(/foodmenu/Page9.jpg)",
                        backgroundSize: "cover",
                      }}
                    ></div>
                  </div>
                  <div className="demoPage shadow-xl">
                    <div
                      style={{
                        width: MenuPageFoodWidth + "px",
                        height: MenuPageFoodHeight + "px",
                        backgroundImage: "url(/foodmenu/Page10.jpg)",
                        backgroundSize: "cover",
                      }}
                    ></div>
                  </div>
                  <div className="demoPage shadow-xl">
                    <div
                      style={{
                        width: MenuPageFoodWidth + "px",
                        height: MenuPageFoodHeight + "px",
                        backgroundImage: "url(/foodmenu/Page11.jpg)",
                        backgroundSize: "cover",
                      }}
                    ></div>
                  </div>
                  <div className="demoPage shadow-xl">
                    <div
                      style={{
                        width: MenuPageFoodWidth + "px",
                        height: MenuPageFoodHeight + "px",
                        backgroundImage: "url(/foodmenu/Page12.jpg)",
                        backgroundSize: "cover",
                      }}
                    ></div>
                  </div>
                  <div className="demoPage shadow-xl">
                    <div
                      style={{
                        width: MenuPageFoodWidth + "px",
                        height: MenuPageFoodHeight + "px",
                        backgroundImage: "url(/foodmenu/Page13.jpg)",
                        backgroundSize: "cover",
                      }}
                    ></div>
                  </div>
                  <div className="demoPage shadow-xl">
                    <div
                      style={{
                        width: MenuPageFoodWidth + "px",
                        height: MenuPageFoodHeight + "px",
                        backgroundImage: "url(/foodmenu/Page14.jpg)",
                        backgroundSize: "cover",
                      }}
                    ></div>
                  </div>
                  <div className="demoPage shadow-xl">
                    <div
                      style={{
                        width: MenuPageFoodWidth + "px",
                        height: MenuPageFoodHeight + "px",
                        backgroundImage: "url(/foodmenu/Page15.jpg)",
                        backgroundSize: "cover",
                      }}
                    ></div>
                  </div>
                  <div className="demoPage shadow-xl">
                    <div
                      style={{
                        width: MenuPageFoodWidth + "px",
                        height: MenuPageFoodHeight + "px",
                        backgroundImage: "url(/foodmenu/Page16.jpg)",
                        backgroundSize: "cover",
                      }}
                    ></div>
                  </div>
                  <div className="demoPage shadow-xl">
                    <div
                      style={{
                        width: MenuPageFoodWidth + "px",
                        height: MenuPageFoodHeight + "px",
                        backgroundImage: "url(/foodmenu/Page17.jpg)",
                        backgroundSize: "cover",
                      }}
                    ></div>
                  </div>
                  <div className="demoPage shadow-xl">
                    <div
                      style={{
                        width: MenuPageFoodWidth + "px",
                        height: MenuPageFoodHeight + "px",
                        backgroundImage: "url(/foodmenu/Page18.jpg)",
                        backgroundSize: "cover",
                      }}
                    ></div>
                  </div>
                  <div className="demoPage shadow-xl">
                    <div
                      style={{
                        width: MenuPageFoodWidth + "px",
                        height: MenuPageFoodHeight + "px",
                        backgroundImage: "url(/foodmenu/Page19.jpg)",
                        backgroundSize: "cover",
                      }}
                    ></div>
                  </div>
                  {/* <div className="demoPage shadow-xl">
                <div
                  style={{
                    width: MenuPageFoodWidth + "px",
                    height: MenuPageFoodHeight + "px",
                    backgroundImage: "url(/foodmenu/Page20.jpg)",
                    backgroundSize: "cover",
                  }}
                ></div>
              </div> */}
                </HTMLFlipBook>
              </div>
              <div></div>
            </div>
          </motion.div>
        )}

        {showModal === "drink" && (
          <motion.div
            variants={varFadeInOutFullMobile}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full h-screen fixed top-0 left-0 flex justify-center items-center  z-[999]"
          >
            <div className="w-full flex lg:flex-row flex-col shadow-lg px-6 py-8 bg-[#fff] h-[100vh] lg:pt-[136px] pt-[96px] lg:justify-between">
              <button
                className="bg-[#F15A22] flex rounded-[8px] w-[80px] h-[40px] justify-center items-center mr-4 lg:mb-0 mb-4"
                onClick={() => {
                  setShowModal("");
                }}
              >
                <BackIcon />
                <div className="text-[14px] ml-2">Back</div>
              </button>
              <div
                style={{
                  width: isDesktop
                    ? MenuPageDrinkWidth * 2 + "px"
                    : MenuPageDrinkWidth,
                }}
              >
                <HTMLFlipBook
                  width={
                    isDesktop
                      ? Math.round(MenuPageDrinkWidth)
                      : Math.round(MenuPageDrinkWidth)
                  }
                  height={
                    isDesktop
                      ? Math.round(MenuPageDrinkHeight)
                      : Math.round(MenuPageDrinkHeight)
                  }
                  minWidth={
                    isDesktop
                      ? Math.round(MenuPageDrinkWidth)
                      : Math.round(MenuPageDrinkWidth)
                  }
                  maxWidth={
                    isDesktop
                      ? Math.round(MenuPageDrinkWidth) * 2
                      : Math.round(MenuPageDrinkWidth)
                  }
                  minHeight={
                    isDesktop
                      ? Math.round(MenuPageDrinkHeight)
                      : Math.round(MenuPageDrinkHeight)
                  }
                  maxHeight={
                    isDesktop
                      ? Math.round(MenuPageDrinkHeight) * 2
                      : Math.round(MenuPageDrinkHeight)
                  }
                  drawShadow={true}
                  maxShadowOpacity={0.3}
                  showCover={false}
                  className="demo-book text-black w-max rounded-lg"
                >
                  {/* <RenderMenuFood /> */}

                  <div className="demoPage shadow-xl">
                    <div
                      style={{
                        width: MenuPageDrinkWidth + "px",
                        height: MenuPageDrinkHeight + "px",
                        backgroundImage: "url(/drinkmenu/Page1.jpg)",
                        backgroundSize: "cover",
                      }}
                    ></div>
                  </div>
                  <div className="demoPage shadow-xl">
                    <div
                      style={{
                        width: MenuPageDrinkWidth + "px",
                        height: MenuPageDrinkHeight + "px",
                        backgroundImage: "url(/drinkmenu/Page2.jpg)",
                        backgroundSize: "cover",
                      }}
                    ></div>
                  </div>
                  <div className="demoPage shadow-xl">
                    <div
                      style={{
                        width: MenuPageDrinkWidth + "px",
                        height: MenuPageDrinkHeight + "px",
                        backgroundImage: "url(/drinkmenu/Page3.jpg)",
                        backgroundSize: "cover",
                      }}
                    ></div>
                  </div>
                  <div className="demoPage shadow-xl">
                    <div
                      style={{
                        width: MenuPageDrinkWidth + "px",
                        height: MenuPageDrinkHeight + "px",
                        backgroundImage: "url(/drinkmenu/Page4.jpg)",
                        backgroundSize: "cover",
                      }}
                    ></div>
                  </div>
                  <div className="demoPage shadow-xl">
                    <div
                      style={{
                        width: MenuPageDrinkWidth + "px",
                        height: MenuPageDrinkHeight + "px",
                        backgroundImage: "url(/drinkmenu/Page5.jpg)",
                        backgroundSize: "cover",
                      }}
                    ></div>
                  </div>
                  <div className="demoPage shadow-xl">
                    <div
                      style={{
                        width: MenuPageDrinkWidth + "px",
                        height: MenuPageDrinkHeight + "px",
                        backgroundImage: "url(/drinkmenu/Page6.jpg)",
                        backgroundSize: "cover",
                      }}
                    ></div>
                  </div>
                  <div className="demoPage shadow-xl">
                    <div
                      style={{
                        width: MenuPageDrinkWidth + "px",
                        height: MenuPageDrinkHeight + "px",
                        backgroundImage: "url(/drinkmenu/Page7.jpg)",
                        backgroundSize: "cover",
                      }}
                    ></div>
                  </div>
                  <div className="demoPage shadow-xl">
                    <div
                      style={{
                        width: MenuPageDrinkWidth + "px",
                        height: MenuPageDrinkHeight + "px",
                        backgroundImage: "url(/drinkmenu/Page8.jpg)",
                        backgroundSize: "cover",
                      }}
                    ></div>
                  </div>
                  <div className="demoPage shadow-xl">
                    <div
                      style={{
                        width: MenuPageDrinkWidth + "px",
                        height: MenuPageDrinkHeight + "px",
                        backgroundImage: "url(/drinkmenu/Page9.jpg)",
                        backgroundSize: "cover",
                      }}
                    ></div>
                  </div>
                  <div className="demoPage shadow-xl">
                    <div
                      style={{
                        width: MenuPageDrinkWidth + "px",
                        height: MenuPageDrinkHeight + "px",
                        backgroundImage: "url(/drinkmenu/Page10.jpg)",
                        backgroundSize: "cover",
                      }}
                    ></div>
                  </div>
                </HTMLFlipBook>
              </div>
              <div></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {isDesktop && (
        <>
          <Tooltip anchorSelect="#instagram" content="Instagram" />
          <Tooltip anchorSelect="#gmaps" content="Google Maps" />
          <Tooltip anchorSelect="#tripadvisor" content="Trip Advisor" />
          <Tooltip anchorSelect="#whatsapp" content="Whatsapp" />
        </>
      )}
    </main>
  );
}
