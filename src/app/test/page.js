"use client";

import { useContext } from "react";
import { AppContext } from "../context/appContext";

export default function Test() {
  const { screenWidth, screenHeight } = useContext(AppContext);

  return (
    <div className="text-black">
      <div>screen width : {screenWidth}</div>
      <div>screen height : {screenHeight}</div>
    </div>
  );
}
