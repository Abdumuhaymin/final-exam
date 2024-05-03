import React from "react";
import Logo from "../../../public/icons/logo";
import FooterIcon1 from "../../../public/icons/footerIcon1";
import FooterIcon2 from "../../../public/icons/footerIcon2";
import Link from "next/link";
import MainIcon from "../../../public/icons/mainIcon";
import Category from "../../../public/icons/category";
import Icon2 from "../../../public/icons/icon2";
import Karzinka from "../../../public/icons/karzinka";
import UserIconmabil from "../../../public/icons/userIconmabil";

export const Footer = () => {
  return (
    <div>
      <div className="  md:flex container px-[85px] py-[35px]  justify-between">
        <div className="">
          <Logo />
          <h3 className="mt-8 text-font19">Mobilux © 2022</h3>
          <p className="mb-4 mt-2 text-font15">Barcha huquqlar kafolatlangan</p>
          <div className="flex gap-3">
            <FooterIcon1 />
            <FooterIcon2 />
          </div>
        </div>
        <div>
          <h3 className="text-font19">Foydali havolalar</h3>
          <ul className="mt-4">
            <li className="text-font13">
              <Link href={"/#"}>Bosh sahifa</Link>
            </li>
            <li className="text-font13">
              <Link href={"/#"}> Yordam kerakmi?</Link>
            </li>{" "}
            <li className="text-font13">
              <Link href={"/#"}> Foydalanish shartlari</Link>
            </li>{" "}
            <li className="text-font13">
              <Link href={"/#"}> Maxfiylik siyosati</Link>
            </li>
          </ul>
        </div>
        <div className=" w-[300px] lg:flex xl:w-[580px] ">
          <div>
            <h3 className="text-font19">Biz haqimizda</h3>
            <ul className="mt-4">
              <li className="text-font13">
                <Link href={"/#"}>
                  Manzil: #214, G-dong, Lotte castle, 347 Jongno, Jongno-gu,
                  Seoul, 03113, Crescent Trade ltd
                </Link>
              </li>
              <li className="text-font13">
                <Link href={"/#"}> Korxona nomi: Mobilux trade</Link>
              </li>{" "}
              <li className="text-font13">
                <Link href={"/#"}> Korxona rahbari: HASANBOY TURSUNOV</Link>
              </li>{" "}
              <li className="text-font13">
                <Link href={"/#"}> Registratsiya raqami: 433-62-00377</Link>
              </li>
              <li className="text-font13">
                <Link href={"/#"}>
                  {" "}
                  Telefon raqami: 93 000 66-44 97 000 66-44
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <ul className="flex justify-between px-3">
          <li>
            <Link className="flex flex-col items-center" href={"/#"}>
              {" "}
              <MainIcon /> <p>Asosiy</p>{" "}
            </Link>
          </li>
          <li>
            <Link className="flex flex-col items-center" href={"/#"}>
              {" "}
              <Category /> <p>Katalog</p>{" "}
            </Link>
          </li>
          <li>
            <Link className="flex flex-col items-center" href={"/#"}>
              {" "}
              <Icon2 />{" "}
              <p className="text-center">
                Maxsus <br /> buyurtma
              </p>{" "}
            </Link>
          </li>
          <li>
            <Link className="flex flex-col items-center" href={"/#"}>
              {" "}
              <Karzinka /> <p>Savat</p>{" "}
            </Link>
          </li>
          <li>
            <Link className="flex flex-col items-center" href={"/#"}>
              {" "}
              <UserIconmabil /> <p>Profil</p>{" "}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
