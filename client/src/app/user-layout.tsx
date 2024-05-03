import React from "react";
import { getCategory } from "@/service/data";
import { CategoryType } from "@/types/category";

export const UserLayout: React.FC<CategoryType> = async ({ title, id }) => {
  const category = await getCategory();
  return (
    <div>
      {category.map((item: any) => (
        <h1 className="text-3xl font-medium" key={item.id}>
          {item.title}
        </h1>
      ))}
    </div>
  );
};
