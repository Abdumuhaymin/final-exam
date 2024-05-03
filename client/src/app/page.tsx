import { UserLayout } from "./user-layout";
import { getCategory, getProducts } from "@/service/data";
import bin from "/public/icons/bin.svg";
import product from "/public/icons/product.svg";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getBanners } from "@/service/data";
import { ProductCard } from "./_components/product-card";
import Link from "next/link";
import LinkIcon from "../../public/icons/linkIcon";
import CategoryIcon from "../../public/icons/categoryIcon";

export default async function Home() {
  const category = await getCategory();
  const banners = await getBanners();
  const products = await getProducts();

  return (
    <div className="  md:flex bg-bg ">
      <div className=" mt-5 mb-5 flex flex-col gap-9 px-[45px] pt-[30px] bg-white">
        <Button
          className=" md:flex gap-3  hover:bg-green-400"
          variant="default"
        >
          <img src={bin.src} alt="icon" />{" "}
          <p className="text-font14"> Maxsus buyurtma</p>
        </Button>
        <div className=" pb-4  overflow-scroll flex gap-2 md:flex-col">
          {category.map((item: any) => (
            <div
              className=" flex  w-[200px] justify-between items-center "
              key={item.id}
            >
              <Link href={`${item.path}`}>
                <div className="flex flex-col items-center">
                  <div className="md:hidden">
                    <CategoryIcon />
                  </div>
                  <h2 className=" md:text-[16px]  font-normal hover:cursor-pointer hover:text-primary">
                    {item.title}
                  </h2>
                </div>
              </Link>
              <div className="hidden md:flex">
                <LinkIcon />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-bg w-full  p-5 overflow-y-scroll h-screen">
        <div className="w-full bg-white mb-8">
          <Carousel className="">
            <CarouselContent className="">
              {banners.map((item: any) => (
                <img className="object-contain " src={item.img} alt="img" />
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div>
          <div className="flex gap-4 ml-3 mb-5">
            <img src={product.src} alt="icon" />
            <h2 className="font-bold text-2xl">Barcha mahsulotlar</h2>
          </div>
          <div className=" flex justify-center flex-col items-center  sm:grid sm:grid-cols-2 sm:gap-3 md:grid md:grid-cols-2 md:gap-3 lg:grid lg:grid-cols-3 lg:gap-3 xl:grid xl:grid-cols-4 xl:gap-3  ">
            {products.map((item: any) => (
              <ProductCard {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
