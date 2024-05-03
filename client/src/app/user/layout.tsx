"use client";
import Link from "next/link";
import React, { useState } from "react";

const UserLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [clickedIndex, setClickedIndex] = useState(null);

  return (
    <div className="bg-bg h-[100%]">
      <div className="container flex pt-[47px] justify-between gap-6 pb-8 items-start ">
        <div className="flex flex-col w-[300px] gap-[33px] text-font14 bg-white py-[35px] px-[24px] rounded-lg">
          <Link href={"/user/account"}>
            <div className="relative">
              <div
                className={`absolute top-[-15px] left-[-30px] h-[50px] w-[5px] ${
                  clickedIndex === 0 ? "bg-green-500" : "bg-transparent"
                }`}
              ></div>
              <button
                onClick={() => setClickedIndex(0)}
                className={
                  clickedIndex === 0 ? "text-black text-font142" : "text-black "
                }
              >
                Akkaunt
              </button>
            </div>
          </Link>
          <Link href={"/user/order"}>
            <div className="relative">
              <div
                className={`absolute top-[-15px] left-[-30px] h-[50px] w-[5px] ${
                  clickedIndex === 1 ? "bg-green-500" : "bg-transparent"
                }`}
              ></div>
              <button
                onClick={() => setClickedIndex(1)}
                className={
                  clickedIndex === 1 ? "text-black text-font142" : "text-black "
                }
              >
                Sizning buyurtmalaringiz
              </button>
            </div>
          </Link>

          <div className="border-2 border-dashed border-b-gray-400 text-font142"></div>
          <Link href={"/user/exit"}>
            <div className="relative">
              <div
                className={`absolute top-[-15px] left-[-30px] h-[50px] w-[5px] ${
                  clickedIndex === 4 ? "bg-red-500" : "bg-transparent"
                }`}
              ></div>
              <button
                onClick={() => setClickedIndex(4)}
                className={
                  clickedIndex === 4
                    ? "text-red-500 text-font142"
                    : "text-red-500 text-font142"
                }
              >
                Chiqish
              </button>
            </div>
          </Link>
        </div>
        <div className="overflow-y-scroll h-screen">{children}</div>
      </div>
    </div>
  );
};

export default UserLayout;
