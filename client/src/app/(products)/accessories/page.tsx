import { Card } from "@/app/_components/card";
import { getAccessuars } from "@/service/data";
import { SmartphonesType } from "@/types/Smartphones-type";
import React from "react";

const AccessoriesPage = async () => {
  const accessories = await getAccessuars();

  return (
    <div className="container flex flex-col justify-center items-center sm:grid grid-cols-2 gap-2 md:grid-cols-3 xl:grid-cols-4">
      {accessories.map((item: SmartphonesType) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
};

export default AccessoriesPage;
