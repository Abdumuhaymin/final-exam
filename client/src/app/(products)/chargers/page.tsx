import { Card } from "@/app/_components/card";
import { SmartphonesType } from "@/types/Smartphones-type";
import { getChargers } from "@/service/data";
import React from "react";

const ChargerPage = async () => {
  const charger = await getChargers();

  return (
    <div className="container flex flex-col justify-center items-center sm:grid grid-cols-2 gap-2 md:grid-cols-3 xl:grid-cols-4">
      {charger.map((item: SmartphonesType) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ChargerPage;
