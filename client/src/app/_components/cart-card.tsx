"use client";
import React from "react";
import { useDispatch } from "react-redux";
import { deletProduct } from "@/redux/slice/order-item";
interface CartCardType {
  img: string;
  title: string;
  price: number;
  count: number;
  id: number;
}
const CartCard: React.FC<CartCardType> = ({ img, title, price, count, id }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-4 w-[542px] shadow-sm shadow-slate-600">
      <div className="w-[84px]  h-[84px]">
        <img src={img} alt="product" className="object-cover" />
      </div>
      <div>
        <h2>{title}</h2>
        <p>{price} so'm</p>
        <span>{count} dona</span>
      </div>
      <div>
        <button onClick={() => dispatch(deletProduct(id))}>X</button>
        <button>+</button>
        <button>-</button>
      </div>
    </div>
  );
};

export default CartCard;
