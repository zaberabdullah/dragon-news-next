import LeftSidebar from "@/components/homepage/news/LeftSidebar";
import RightSidebar from "@/components/homepage/news/RightSidebar";
import Image from "next/image";

async function getCategories() {
  const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
  const data = await res.json();
  return data.data;
}

export default async function Home() {
  const categories = await getCategories();
  return (
    <div className="container mx-auto grid grid-cols-12 gap-4 p-4 my-[50px]">
      <div className=" col-span-3">
       <LeftSidebar categories={categories} activeId={"null"} />
      </div>
      <div className="text-3xl font-bold bg-purple-100 col-span-6">All news</div>
      <div className=" col-span-3">
        <RightSidebar />
      </div>
    </div>
  );
}
