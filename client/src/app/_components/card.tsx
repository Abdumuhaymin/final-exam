"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import bin from "/public/icons/bin.svg";
import rating from "/public/icons/rating.svg";
import Link from "next/link";
import { SmartphonesType } from "@/types/Smartphones-type";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, deletProduct } from "@/redux/slice/order-item";

export const Card: React.FC<SmartphonesType> = ({
  img,
  title,
  color,
  brand,
  price,
  id,
  description,
  discount,
  type,
}) => {
  const dispatch = useDispatch();
  const add = async () => {
    try {
      const res = await fetch(`http://localhost:7777/all/${id}`);
      const data = await res.json();
      dispatch(addProduct(data));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-white w-[290px] h-[443px] justify-between p-6 flex flex-col rounded-lg relative shadow-md mt-[50px] mb-[50px]">
      <img className="object-contain h-[262px]" src={img} alt="img" />
      {discount == "0" ? null : (
        <div className="p-1 flex justify-center items-center bg-red-500 w-[45px] rounded-md absolute left-[7px]">
          {discount}
        </div>
      )}
      <Link
        href={`/detail/${id}`}
        className="hover:text-primary text-md font-medium text-center"
      >
        {title.length > 25 ? title.slice(0, 25) + "..." : title}
      </Link>
      <div className="flex justify-between items-center">
        <img className="h-4" src={rating.src} alt="icon" />
      </div>
      <h4 className=" text-font18">{price} so'm</h4>
      <Button className=" hover:bg-green-400 flex gap-2" onClick={add}>
        <img src={bin.src} alt="img" />
        Savatchaga
      </Button>
    </div>
  );
};
