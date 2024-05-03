import { Card } from "@/app/_components/card";
import { getSmartphones } from "@/service/data";
import { SmartphonesType } from "@/types/Smartphones-type";
import Link from "next/link";
import React from "react";

const SmartphonesPage = async () => {
  const Smartphones = await getSmartphones();

  return (
    <div className="container flex flex-col justify-center items-center sm:grid grid-cols-2 gap-2 md:grid-cols-3 xl:grid-cols-4">
      {Smartphones.map((item: SmartphonesType) => (
        <Link href={`/detail/${item.id}`}>
          <Card key={item.id} {...item} />
        </Link>
      ))}
    </div>
  );
};

export default SmartphonesPage;
