import React from "react";
import { getCategory } from "@/service/data";
import { CategoryType } from "@/types/category";
import Link from "next/link";

const UserLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const category = await getCategory();
  return (
    <div className="flex">
      <div>
        {category.map((item: any) => (
          <Link href={`${item.path}`}>
            <h2
              className="text-[16px]  font-normal hover:cursor-pointer hover:text-primary"
              key={item.id}
            >
              {item.title}
            </h2>
          </Link>
        ))}
      </div>
      <div>{children}</div>
    </div>
  );
};
export default UserLayout;
