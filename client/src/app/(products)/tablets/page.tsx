import { Card } from "@/app/_components/card";
import { getTablets } from "@/service/data";
import { SmartphonesType } from "@/types/Smartphones-type";
import React from "react";

const TabletsPage = async () => {
  const Smartphones = await getTablets();

  return (
    <div className="container flex flex-col justify-center items-center sm:grid grid-cols-2 gap-2 md:grid-cols-3 xl:grid-cols-4">
      {Smartphones.map((item: SmartphonesType) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
};

export default TabletsPage;
