import Image from "next/image";

export default function Home() {
  return (
    <div
      className="flex items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-main w-full"
      style={{
        background: "url('/bg-underconstruction.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col justify-center items-center text-white text">
        <div className="font-bold lg:text-[72px] text-[32px]">Coming Soon</div>
        <div className="font-semibold lg:text-[24px] text-[16px] font-nunito">
          Our website is under construction
        </div>
      </div>
    </div>
  );
}
