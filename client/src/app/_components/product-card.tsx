import React from "react";
import { CardType } from "@/types/card-type";
import { Button } from "@/components/ui/button";
import bin from "/public/icons/bin.svg";
import rating from "/public/icons/rating.svg";
import Link from "next/link";

export const ProductCard: React.FC<CardType> = ({ img, title, price, id }) => {
  return (
    <div className="bg-white w-[290px] h-[443px] justify-between p-3 flex flex-col rounded-lg">
      <img className="object-contain h-[262px]" src={img} alt="img" />
      <h1 className="hover:text-primary text-md font-medium text-center">
        {title}
      </h1>
      <div className="flex justify-between items-center">
        <img className="h-4" src={rating.src} alt="icon" />
      </div>
      <h4 className=" text-font18">{price} so'm</h4>
      <Button className=" hover:bg-green-400 flex gap-2">
        <img src={bin.src} alt="img" />
        Savatchaga
      </Button>
    </div>
  );
};
