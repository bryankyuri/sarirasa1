import Link from "next/link";
import { LogoSHS, LogoSHSMobile } from "../icon/shs-icon";
import { useContext, useState } from "react";
import { AppContext } from "@/app/context/appContext";
import Image from "next/image";
import { MenuIcon } from "../icon/menu";
import { WineIcon } from "../icon/wineGlass";

export const Header = ({ isTransformHeader }) => {
  console.log(isTransformHeader);
  const { screenWidth } = useContext(AppContext);
  const isDesktop = screenWidth > 1080 ? true : false;
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      {isDesktop ? (
        <div
          className={`flex justify-between items-center w-[100%]  top-0 fixed p-[20px] z-[9999] transition-all ${
            isTransformHeader
              ? "bg-white shadow-[0px_4px_8px_0px_#0000000D] h-[120px]"
              : "h-[150px]"
          }`}
        >
          <div
            className={`${
              isTransformHeader ? "scale-75" : "svg-fill-white"
            } transition-all`}
          >
            <Link href="#home">
              <LogoSHS />
            </Link>
          </div>
          <div
            className={`flex text-[16px] ${
              isTransformHeader ? "text-black" : "text-white"
            } gap-[18px] items-center`}
          >
            <Link href="#our-story">OUR STORY</Link>
            <Link href="#menu">MENU</Link>
            <Link href="#contact-us">CONTACT US</Link>
            <Link
              href="https://connect.sarirasa.co.id/reservation-store/satehouse-canggu"
              target="_blank"
              className="bg-[#F15922] rounded-[50px] py-2 px-4 text-white button-primary-glow"
            >
              BOOK A TABLE
            </Link>
          </div>
        </div>
      ) : (
        <div className="w-[100%]  top-0 fixed  z-[1004] transition">
          <div className="flex flex-col relative">
            <div
              className={`w-100  ${
                isTransformHeader
                  ? "bg-white shadow-[0px_4px_8px_0px_#0000000D] h-[74px]"
                  : "h-[84px]"
              } p-[20px] flex justify-between items-center z-[1001] `}
            >
              <Link
                href="#home"
                className={`${
                  isTransformHeader ? "scale-[90%]" : "svg-fill-white"
                } transition-all`}
                onClick={() => setIsActive(false)}
              >
                <LogoSHSMobile />
              </Link>
              <button onClick={() => setIsActive(!isActive)}>
                <MenuIcon
                  isActive={isActive}
                  isTransformHeader={isTransformHeader}
                />
              </button>
            </div>

            <div
              className={`z-[1005] relative flex flex-col items-end gap-[18px] justify-center px-7 text-black w-100 bg-white shadow-[0px_4px_8px_0px_#0000000D] subMenu ${
                isActive ? " menuShow" : ""
              } overflow-hidden`}
            >
              <Link href="#our-story" onClick={() => setIsActive(false)}>
                OUR STORY
              </Link>
              <Link href="#menu" onClick={() => setIsActive(false)}>
                MENU
              </Link>
              <Link href="#contact-us" onClick={() => setIsActive(false)}>
                CONTACT US
              </Link>
              <Link
                href="https://connect.sarirasa.co.id/reservation-store/satehouse-canggu"
                target="_blank"
                className="bg-[#F15922] rounded-[30px] py-2 px-4 text-white flex items-center justify-center button-primary-glow"
              >
                <span className="">BOOK A TABLE</span>
              </Link>
            </div>
            {/* <button onClick={}
              className={`w-[100vw] h-[100vh] absolute top-0 left-0 z-[999]`}
            ></button> */}
          </div>
        </div>
      )}
    </>
  );
};
