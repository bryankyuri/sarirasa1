"use client";

import { useContext } from "react";
import { AppContext } from "../context/appContext";

export default function Test() {
  const { screenWidth, screenHeight, windowWidth, windowHeight } = useContext(AppContext);

  return (
    <div className="text-black">
      <div>screen width : {screenWidth}</div>
      <div>screen height : {screenHeight}</div>
      <div>window width : {windowWidth}</div>
      <div>window height : {windowHeight}</div>
    </div>
  );
}
