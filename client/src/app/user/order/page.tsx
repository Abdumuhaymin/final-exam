"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/order";
import CartCard from "@/app/_components/cart-card";

const OrderPage = () => {
  const order = useSelector((state: RootState) => state.order);
  console.log(order);

  return (
    <div className="flex gap-6">
      <div className="rounded-xl pt-8 pl-6 w-[410px] pb-[140px] bg-white ">
        <h1 className="text-font22 mb-[22px]">Sizning buyurtmalaringiz</h1>
      </div>
      <div className="rounded-xl pt-8 pl-6 w-[565px] pb-[140px] flex flex-col gap-5 bg-white  border ">
        <h1 className="text-font22 mb-[22px]">Buyurtma tafsilotlari</h1>
        <div>
          {order.product.map((item: any) => (
            <CartCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
