"use client";
import React from "react";
import logo from "/public/icons/logo.svg";
import search from "/public/icons/search.svg";
import notify from "/public/icons/notify.svg";
import profile from "/public/icons/profile.svg";
import { Button } from "../ui/button";
import UzbIcon from "../../../public/icons/UzbIcon";
import FilterIcon from "../../../public/icons/FilterIcon";
import { useForm } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "../ui/input";
import UserIcon from "../../../public/icons/userIcon";
import SearchIcon from "../../../public/icons/searchIcon";
import Logo from "../../../public/icons/logo";
import RingIcon from "../../../public/icons/ringIcon";
import Link from "next/link";
import ProfileIcon from "../../../public/icons/profile-icon";
export const Header = () => {
  const { register, getValues } = useForm();
  const search = () => {
    console.log("search");
  };
  return (
    <header className=" container flex justify-between items-center pt-[21px] pb-6 bg-white">
      <Link href="/">
        <Logo />
      </Link>
      <div className="flex items-center border-[2px] rounded-[6px]  border-primary bg-input">
        <label htmlFor="search " className="px-4 cursor-pointer">
          <SearchIcon />
        </label>
        <input
          {...register("search")}
          type="text"
          id="search"
          placeholder="Qiriruv"
          className="w-[700px] outline-none bg-inherit"
        />
        <div className="">
          <Button>Qidirish</Button>
        </div>
      </div>
      <div className=" ml-[50px] sm:ml-[200px] md:ml-0 flex  justify-between gap-6 md:gap-10 items-center">
        <Select>
          <SelectTrigger className="h-[38px] w-[120px]">
            <SelectValue placeholder="Lenguage" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="uzb">
                {" "}
                <div className="flex items-center gap-2">
                  <img
                    width={38}
                    className="rounded-[5px]"
                    src="https://sokin.moy.su/_ph/170/76810354.gif"
                    alt=""
                  />{" "}
                  <span> Uzb</span>
                </div>
              </SelectItem>
              <SelectItem value="Рус">
                {" "}
                <div className="flex items-center gap-2">
                  <img
                    width={38}
                    className="rounded-[5px]"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Russia.png/220px-Flag_of_Russia.png"
                    alt=""
                  />{" "}
                  <span>Рус</span>
                </div>{" "}
              </SelectItem>
              <SelectItem value="English">
                {" "}
                <div className="flex items-center gap-2">
                  <img
                    width={38}
                    className="rounded-[5px]"
                    src="https://images.satu.kz/187452926_w640_h640_flag-britanii-1h2m.jpg"
                    alt=""
                  />{" "}
                  <span>English</span>
                </div>{" "}
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <div className="flex">
          <RingIcon />
        </div>
        <div className="flex gap-3  items-center">
          <Link className=" text-font16 flex" href={"/register"}>
            Kirish
          </Link>
          <Link href={"/user"} className="cursor-pointer">
            <UserIcon />
          </Link>
        </div>
        <div className="md:hidden ">
          <SearchIcon />
        </div>
      </div>
    </header>
  );
};
