"use client";
import { useState, useEffect, useContext, useRef } from "react";
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
import { BackIcon, CloseIcon } from "./component/icon/back";
import { HiMagnifyingGlassPlus } from "react-icons/hi2";
import HTMLFlipBook from "react-pageflip";
import { Tooltip } from "react-tooltip";
import {
  ZoomIcon,
  ZoomInIcon,
  ZoomOutIcon,
  ZoomResetIcon,
} from "./component/icon/zoom";
import { NextIcon, PrevIcon } from "./component/icon/nextprev";
import {
  TransformWrapper,
  TransformComponent,
  useControls,
} from "react-zoom-pan-pinch";

const varFadeInOutFullMobile = {
  hidden: { opacity: 0, transition: { duration: 0.2 } },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 1, transition: { duration: 0.2 } },
};

export default function Home() {
  const menuFoodBook = useRef();
  const menuDrinkBook = useRef();
  const [isTransformHeader, setIsTransformHeader] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { screenWidth, windowWidth } = useContext(AppContext);
  const isDesktop = screenWidth > 1080 ? true : false;
  const MenuPageFoodWidth = isDesktop ? screenWidth * 0.32 : screenWidth - 40;
  const MenuPageFoodRatio = MenuPageFoodWidth / 1270;
  const MenuPageFoodHeight = 1536 * MenuPageFoodRatio;
  const MenuPageDrinkWidth = isDesktop ? screenWidth * 0.3 : screenWidth - 40;
  const MenuPageDrinkRatio = MenuPageDrinkWidth / 945;
  const MenuPageDrinkHeight = 1772 * MenuPageDrinkRatio;
  const [menuFood, setMenuFood] = useState("");
  const [menuDrink, setMenuDrink] = useState("");
  const [showZoomMenu, setZoomMenu] = useState("");

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showModal]);
  const listenToScroll = () => {
    let winScroll = document.documentElement.scrollTop;
    let tempIsTransformHeader = isTransformHeader;
    const shrinkPoint = 100;
    if (winScroll > shrinkPoint) {
      if (!tempIsTransformHeader) {
        tempIsTransformHeader = true;
      }
    } else if (winScroll <= shrinkPoint) {
      if (tempIsTransformHeader) {
        tempIsTransformHeader = false;
      }
    }
    const scrollPosition = window.scrollY;
    if (!isDesktop) {
      const background = document.querySelector(".backgroundMobile");
      const background2 = document.querySelector(".backgroundMobile2");
      const containerBg3 = document.querySelector(
        ".containerBackgroundMobile3"
      );
      const positionBg3 = containerBg3.getBoundingClientRect();
      const background3 = document.querySelector(".backgroundMobile3");
      const content = document.querySelector(".mySwiper");
      if (background && content) {
        const contentTop = content.offsetTop;

        if (scrollPosition >= contentTop) {
          background.style.position = "fixed";
          background.style.top = "0";
          background2.style.position = "fixed";
          background2.style.top = "0";
        } else {
          background.style.position = "absolute";
          background.style.top = "0";
          background2.style.position = "absolute";
          background2.style.top = "0";
        }
      }
      if (background3 && positionBg3) {
        if (positionBg3.top < 0) {
          background3.style.position = "fixed";
          background3.style.top = positionBg3 + "px";
        } else {
          background3.style.position = "absolute";
          background3.style.top = "0px";
        }
      }
    } else {
      const backgroundFood = document.querySelector(
        ".backgroundDesktopParalax"
      );
      const positionBgFood = document
        .querySelector("#menu")
        .getBoundingClientRect();
      if (positionBgFood.top < 0) {
        backgroundFood.style.backgroundSize = "50% auto";
        backgroundFood.style.backgroundAttachment = "fixed";
      } else {
        backgroundFood.style.backgroundSize = "100% auto";
        backgroundFood.style.backgroundAttachment = "";
      }
    }
    setIsTransformHeader(tempIsTransformHeader);
  };

  useEffect(() => {
    document.addEventListener("scroll", listenToScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.removeEventListener("scroll", listenToScroll);
    return document.addEventListener("scroll", listenToScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showZoomMenu]);

  useEffect(() => {
    const renderMenuFood = [];
    const renderMenuDrink = [];
    for (let index = 1; index < 19; index++) {
      renderMenuFood.push(
        <div
          className="demoPage shadow-xl"
          key={`foodmenu/Page${index + 1}`}
          id={`foodMenuPage${index + 1}`}
        >
          <div
            className={`menuPage`}
            style={{
              width: MenuPageFoodWidth + "px",
              height: MenuPageFoodHeight + "px",
              backgroundImage: `url(/foodmenu/Page${index + 1}.jpg)`,
              backgroundSize: "cover",
            }}
            id={`FoodMenuPage${index + 1}`}
          />
        </div>
      );
    }
    for (let index = 0; index < 8; index++) {
      renderMenuDrink.push(
        <div
          className="demoPage shadow-xl"
          key={`drinkmenuzoom/Page${index + 1}`}
          id={`drinkMenuPage${index + 1}`}
        >
          <div
            className={`menuPage`}
            style={{
              width: MenuPageDrinkWidth + "px",
              height: MenuPageDrinkHeight + "px",
              backgroundImage: `url(/drinkmenuzoom/Page${index + 1}.jpg)`,
              backgroundSize: "cover",
            }}
            id={`DrinkMenuPage${index + 1}`}
          />
        </div>
      );
    }
    setMenuFood([...renderMenuFood]);
    setMenuDrink([...renderMenuDrink]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [windowWidth]);

  const nextPage = (book) => {
    if (book === "food") {
      menuFoodBook.current.pageFlip().flipNext();
    } else {
      menuDrinkBook.current.pageFlip().flipNext();
    }
  };
  const prevPage = (book) => {
    if (book === "food") {
      menuFoodBook.current.pageFlip().flipPrev();
    } else {
      menuDrinkBook.current.pageFlip().flipPrev();
    }
  };

  const zoomLeftPage = (book) => {
    let pageIndex;
    let srcImageZoom;
    if (book === "food") {
      pageIndex = menuFoodBook.current.pageFlip().getCurrentPageIndex();
      srcImageZoom = `foodmenu/Page${pageIndex + 2}.jpg`;
    } else {
      pageIndex = menuDrinkBook.current.pageFlip().getCurrentPageIndex();
      srcImageZoom = `drinkmenuzoom/Page${pageIndex + 1}.jpg`;
    }
    setZoomMenu({ img: srcImageZoom, type: book });
  };

  const zoomRightPage = (book) => {
    let pageIndex;
    let srcImageZoom;
    if (book === "food") {
      pageIndex = menuFoodBook.current.pageFlip().getCurrentPageIndex();
      srcImageZoom = `foodmenu/Page${pageIndex + 3}.jpg`;
    } else {
      pageIndex = menuDrinkBook.current.pageFlip().getCurrentPageIndex();
      srcImageZoom = `drinkmenuzoom/Page${pageIndex + 2}.jpg`;
    }
    setZoomMenu({ img: srcImageZoom, type: book });
  };

  const zoomMobile = (book) => {
    let pageIndex;
    let srcImageZoom;
    if (book === "food") {
      pageIndex = menuFoodBook.current.pageFlip().getCurrentPageIndex();
      srcImageZoom = `foodmenu/Page${pageIndex + 2}.jpg`;
    } else {
      pageIndex = menuDrinkBook.current.pageFlip().getCurrentPageIndex();
      srcImageZoom = `drinkmenuzoom/Page${pageIndex + 1}.jpg`;
    }
    setZoomMenu({ img: srcImageZoom, type: book });
  };

  const Controls = () => {
    const { zoomIn, zoomOut, setTransform } = useControls();

    return (
      <div className="tools flex w-100 justify-center mb-4 text-black mt-4">
        <button className="mr-4 " onClick={() => zoomIn()}>
          <ZoomInIcon />
        </button>
        <button className="mr-4 " onClick={() => zoomOut()}>
          <ZoomOutIcon />
        </button>
        <button className="" onClick={() => setTransform(0, 0, 1)}>
          <ZoomResetIcon />
        </button>
      </div>
    );
  };

  return (
    <>
      <main
        className={`w-100 flex flex-col relative bg-white ${
          (showZoomMenu || showModal) && !isDesktop ? "opacity-0" : ""
        }`}
      >
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
                      Sate House Senayan brings you on a wondrous
                      flavour-fuelled odyssey through the largest archipelago in
                      the world. On a single table, discover the multitude of
                      rich traditions, memories and regional influences that
                      make Indonesian cuisine so deliciously complex and
                      diverse.
                      <br />
                      <br />
                      As fiercely protective guardians of the authenticity of
                      our Indonesian culture, every meal with us is like
                      stepping into our library of stories, with every dish
                      filled with rich history. Enjoy a social experience with
                      no one style of eating, just a liberating dining adventure
                      where the usual rules no longer apply.
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
                className="w-1/2 backgroundDesktopParalax "
                style={{
                  backgroundImage: "url('image_sate.jpg')",
                  backgroundSize: "50% auto",
                  backgroundPosition: "bottom right",
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
                  height={400}
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
                      href="https://api.whatsapp.com/send/?phone=6281514163510 &text=Hi%2C%20I%27m%20%5Bname%5D.%20I%27d%20like%20to%20book%20a%20table%20for%20%5Bnumber%5D%20people%20at%20%5Btime%5D.%20Do%20you%20have%20any%C2%A0availability%3F&type=phone_number&app_absent=0"
                      target="_blank"
                      className="flex bg-[#F15A22] font-bulldog text-white items-center justify-center py-2 rounded-[8px] pl-2 pr-3 button-primary-glow"
                    >
                      <WaIcon />
                      <div className="ml-2">0815-1416-3510</div>
                    </Link>
                  </div>
                  <Link
                    href="https://connect.sarirasa.co.id/login"
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
                  <Link href="https://sarirasa.co.id/" target="_blank">
                    <Image
                      width={142}
                      height={66}
                      src="/sarirasa_logo_new2.png"
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
              className="w-full h-[812px] flex justify-center align-center relative overflow-hidden"
              id="home"
            >
              <HomeSlider />
              <div
                className="w-[100vw] h-[812px] absolute bg-[#000000A6] left-0 top-0 backgroundMobile"
                style={{
                  backgroundImage: "url('bgHero.jpg')",
                  backgroundSize: "auto 100%",
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <div className="w-[100vw] h-[812px] absolute bg-[#000000A6] left-0 top-0 z-1 backgroundMobile2"></div>
            </div>
            <div className="bg-white relative z-1">
              <div className="w-full flex flex-col justify-center align-center relative mx-auto py-[70px] px-4 bg-white">
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
                        Sate House Senayan brings you on a wondrous
                        flavour-fuelled odyssey through the largest archipelago
                        in the world. On a single table, discover the multitude
                        of rich traditions, memories and regional influences
                        that make Indonesian cuisine so deliciously complex and
                        diverse.
                        <br />
                        <br />
                        As fiercely protective guardians of the authenticity of
                        our Indonesian culture, every meal with us is like
                        stepping into our library of stories, with every dish
                        filled with rich history. Enjoy a social experience with
                        no one style of eating, just a liberating dining
                        adventure where the usual rules no longer apply.
                      </div>
                    </TextFade>
                  </div>
                </div>
                <div
                  className="w-full "
                  style={{
                    width: "100%",
                    height: windowWidth - 32 + "px",
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
                className="w-full flex flex-col justify-center align-start mx-auto"
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
                    className="flex flex-col justify-center items-center w-[100%] h-100 z-[2] pl-4"
                  >
                    <div className="text-white text-[32px] mb-[40px] text-center">
                      Discover the Flavors
                      <br /> of the Archipelago
                    </div>
                    <div className="flex gap-[16px] justify-start">
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
                  className="containerBackgroundMobile3 w-100 relative z-1"
                  style={{
                    height: windowWidth,
                  }}
                >
                  <div
                    className="w-100 relative z-[1] backgroundMobile3"
                    style={{
                      backgroundImage: "url('image_sate.jpg')",
                      backgroundSize: "100% auto",
                      backgroundPosition: "bottom center",
                      backgroundRepeat: "no-repeat",
                      height: windowWidth,
                      width: "100%",
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                  </div>
                </div>
              </div>
              <div
                className="w-full flex flex-col justify-center align-center relative mx-auto w-100 py-[70px] bg-white z-[2]"
                id="contact-us"
              >
                <div
                  style={{ height: "100%", width: "100%" }}
                  className="overflow-hidden"
                >
                  <GoogleMapsEmbed
                    apiKey="AIzaSyBL1dmkCrTcHvrJhpeWCOoDzIByQu5480o"
                    height={400}
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
                    <div className="text-[32px] mb-[20px] text-[#F15A22]">
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
                        href="https://api.whatsapp.com/send/?phone=6281514163510 &text=Hi%2C%20I%27m%20%5Bname%5D.%20I%27d%20like%20to%20book%20a%20table%20for%20%5Bnumber%5D%20people%20at%20%5Btime%5D.%20Do%20you%20have%20any%C2%A0availability%3F&type=phone_number&app_absent=0"
                        target="_blank"
                        className="flex bg-[#F15A22] font-bulldog text-white items-center justify-center py-2 rounded-[8px] pl-2 pr-3"
                      >
                        <WaIcon />
                        <div className="ml-2">0815-1416-3510</div>
                      </Link>
                    </div>
                    <Link
                      href="https://connect.sarirasa.co.id/login"
                      target="_blank"
                      className="flex bg-black font-bulldog text-white items-center justify-start py-2 rounded-[8px] pl-2 pr-3 mt-[12px]"
                    >
                      <GiftIcon />
                      <div className="ml-2">Sign Up for Rewards</div>
                    </Link>
                  </TextFade>
                </div>
              </div>
              <div className="flex w-100  bg-[#F4F4F4] text-black justify-between items-center">
                <div className="flex w-[100%] justify-between items-center h-[86px] mx-auto px-4 [text-12px]">
                  <div className="flex flex-col items-center">
                    {/* <div className="text-[14px] ">Member of</div> */}
                    <Link href="https://sarirasa.co.id/" target="_blank">
                      <Image
                        width={142}
                        height={66}
                        src="/sarirasa_logo_new2.png"
                        alt="Sarirasa"
                      />
                    </Link>
                  </div>
                  <div className="text-[14px] text-right font-bulldog w-100">
                    Copyright <br />© 2024 - Sate House Senayan
                  </div>
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
            href="https://api.whatsapp.com/send/?phone=6281514163510 &text=Hi%2C%20I%27m%20%5Bname%5D.%20I%27d%20like%20to%20book%20a%20table%20for%20%5Bnumber%5D%20people%20at%20%5Btime%5D.%20Do%20you%20have%20any%C2%A0availability%3F&type=phone_number&app_absent=0"
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

        {/* {isDesktop && (
        <>
          <Tooltip anchorSelect="#instagram" content="Instagram" />
          <Tooltip anchorSelect="#gmaps" content="Google Maps" />
          <Tooltip anchorSelect="#tripadvisor" content="Trip Advisor" />
          <Tooltip anchorSelect="#whatsapp" content="Whatsapp" />
        </>
      )} */}
      </main>
      <AnimatePresence>
        {showModal === "food" && (
          <motion.div
            variants={varFadeInOutFullMobile}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center  z-[1005] "
            key="food"
          >
            <div className="w-screen flex flex-col shadow-lg pb-8 bg-[#fff] h-[100vh] items-center overflow-x-hidden overflow-y-auto">
              <div className="flex justify-between w-[100%] mb-3 pt-6 shadow-md px-6 pb-4 sticky z-[1000] top-0 left-0 bg-white">
                <button
                  className="bg-[#F4F4F4] flex rounded-[8px] p-2 justify-center items-center"
                  onClick={() => {
                    setShowModal("");
                  }}
                >
                  <BackIcon />
                </button>
                <div className="flex text-black text-[14px] h-[40px]">
                  <div className="rounded-[8px] p-2 justify-between items-center flex">
                    <button
                      className={`mr-4 flex justify-center items-center`}
                      onClick={() => prevPage("food")}
                    >
                      <PrevIcon />
                    </button>
                    <button
                      className="ml-4 flex justify-center items-center"
                      onClick={() => nextPage("food")}
                    >
                      <NextIcon />
                    </button>
                  </div>
                </div>
                <div>
                  {" "}
                  {!isDesktop ? (
                    <button
                      className="ml-4 flex bg-[#F4F4F4] rounded-[8px] p-2 justify-center items-center"
                      onClick={() => zoomMobile("food")}
                    >
                      <ZoomIcon />
                    </button>
                  ) : (
                    <div className="w-[40px]"></div>
                  )}
                </div>
              </div>

              <div className="w-100 justify-between gap-[24px] flex items-center text-black">
                {isDesktop && (
                  <button
                    className="flex bg-[#F4F4F4] rounded-[8px] p-2 justify-center items-center"
                    onClick={() => zoomLeftPage("food")}
                  >
                    <ZoomIcon />
                  </button>
                )}
                <div
                  style={{
                    width: isDesktop
                      ? MenuPageFoodWidth * 2 + "px"
                      : MenuPageFoodWidth + "px",
                  }}
                >
                  <HTMLFlipBook
                    ref={menuFoodBook}
                    onFlip={(e) => console.log(e)}
                    onChangeState={(e) => console.log(e)}
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
                    {menuFood}
                  </HTMLFlipBook>
                </div>
                {isDesktop && (
                  <button
                    className="flex bg-[#F4F4F4] rounded-[8px] p-2 justify-center items-center"
                    onClick={() => zoomRightPage("food")}
                  >
                    <ZoomIcon />
                  </button>
                )}
              </div>
              <div className=""></div>
            </div>
          </motion.div>
        )}

        {showModal === "drink" && (
          <motion.div
            variants={varFadeInOutFullMobile}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center  z-[1005] "
            key="drink"
          >
            <div className="w-screen flex flex-col shadow-lg pb-8 bg-[#fff] h-[100vh] items-center overflow-x-hidden overflow-y-auto">
              <div className="flex justify-between w-[100%] mb-3 pt-6 shadow-md px-6 pb-4 sticky z-[1000] top-0 left-0 bg-white">
                <button
                  className="bg-[#F4F4F4] flex rounded-[8px] p-2 justify-center items-center"
                  onClick={() => {
                    setShowModal("");
                  }}
                >
                  <BackIcon />
                </button>
                <div className="flex text-black text-[14px] h-[40px]">
                  <div className="rounded-[8px] p-2 justify-between items-center flex">
                    <button
                      className="mr-4 flex justify-center items-center"
                      onClick={() => prevPage("drink")}
                    >
                      <PrevIcon />
                    </button>
                    <button
                      className="ml-4 flex justify-center items-center"
                      onClick={() => nextPage("drink")}
                    >
                      <NextIcon />
                    </button>
                  </div>
                </div>
                <div>
                  {" "}
                  {!isDesktop ? (
                    <button
                      className="ml-4 flex bg-[#F4F4F4] rounded-[8px] p-2 justify-center items-center"
                      onClick={() => zoomMobile("drink")}
                    >
                      <ZoomIcon />
                    </button>
                  ) : (
                    <div className="w-[40px]"></div>
                  )}
                </div>
              </div>

              <div className="w-100 justify-between gap-[24px] flex items-center text-black">
                {isDesktop && (
                  <button
                    className="flex bg-[#F4F4F4] rounded-[8px] p-2 justify-center items-center"
                    onClick={() => zoomLeftPage("drink")}
                  >
                    <ZoomIcon />
                  </button>
                )}
                <div
                  style={{
                    width: isDesktop
                      ? MenuPageDrinkWidth * 2 + "px"
                      : MenuPageDrinkWidth + "px",
                  }}
                >
                  <HTMLFlipBook
                    ref={menuDrinkBook}
                    onFlip={(e) => console.log(e)}
                    onChangeState={(e) => console.log(e)}
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
                    {menuDrink}
                  </HTMLFlipBook>
                </div>
                {isDesktop && (
                  <button
                    className="flex bg-[#F4F4F4] rounded-[8px] p-2 justify-center items-center"
                    onClick={() => zoomRightPage("drink")}
                  >
                    <ZoomIcon />
                  </button>
                )}
              </div>
              <div></div>
            </div>
          </motion.div>
        )}

        {showZoomMenu && (
          <motion.div
            variants={varFadeInOutFullMobile}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full h-screen fixed top-0 left-0 flex justify-center items-center  z-[1007]"
            key="zoom"
          >
            <div className="w-full flex flex-col shadow-lg lg:px-6 lg:py-8 h-[100vh] lg:pt-[24px] lg:overflow-y-auto lg:overflow-x-hidden items-center relative bg-white">
              {/* <button
                className="w-full  bg-[rgba(0,0,0,0.47)] h-[100vh] fixed z-[1008] top-0 left-0"
                onClick={() => {
                  setZoomMenu("");
                }}
              ></button> */}

              {isDesktop ? (
                <>
                  <div className="fixed lg:top-[24px] top-[24px] left-[24px] z-[1010]">
                    <button
                      className="bg-[#F4F4F4] flex rounded-[8px] p-2 justify-center items-center mr-4 lg:mb-0 mb-4 "
                      onClick={() => {
                        setZoomMenu("");
                      }}
                    >
                      <BackIcon />
                    </button>
                  </div>
                  {/* <div
                    className="w-100% h-screen fixed top-0 left-0 z-1000 bg-[#dcdcdc0e]"
                    onClick={() => {
                      setZoomMenu("");
                    }}
                  /> */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    width={"80%"}
                    height="auto"
                    src={showZoomMenu.img}
                    alt="menu"
                    className="mx-auto z-[1009] relative shadow-xl [z-1011]"
                    style={{ maxWidth: "80%" }}
                  />
                </>
              ) : (
                <>
                  <div className="w-full shadow-[0px_4px_8px_0px_#0000000D] flex p-4 items-center justify-end">
                    <button
                      className="bg-[#F4F4F4] flex rounded-[8px] p-2 "
                      onClick={() => {
                        setZoomMenu("");
                      }}
                    >
                      <CloseIcon />
                    </button>
                  </div>
                  <div className="p-4  ">
                    <div className="flex flex-col w-100 h-[73vh] border border-[#F1471D] rounded-[8px] p-2 mt-2">
                      <TransformWrapper
                        initialScale={2}
                        wrapperClass
                        className="w-100 h-screen"
                      >
                        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                          <>
                            <TransformComponent
                              contentStyle={{
                                width: MenuPageDrinkWidth + "px",
                                height: "100%",
                              }}
                              wrapperStyle={{
                                width: "auto",
                                height: "100%",
                              }}
                            >
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src={"/" + showZoomMenu.img}
                                alt="image menu"
                                height={
                                  showZoomMenu.type === "food"
                                    ? MenuPageFoodHeight * 3
                                    : MenuPageDrinkHeight * 3
                                }
                                width={
                                  showZoomMenu.type === "food"
                                    ? MenuPageFoodWidth * 3
                                    : MenuPageDrinkWidth * 3
                                }
                                style={{
                                  maxHeight:
                                    showZoomMenu.type === "food"
                                      ? MenuPageFoodHeight
                                      : MenuPageDrinkHeight * 0.85 + "px",
                                  maxWidth:
                                    showZoomMenu.type === "food"
                                      ? MenuPageFoodWidth
                                      : MenuPageDrinkWidth * 0.85 + "px",
                                }}
                              />
                            </TransformComponent>
                            <Controls />
                          </>
                        )}
                      </TransformWrapper>
                    </div>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
