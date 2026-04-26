import LeftSidebar from "@/components/homepage/news/LeftSidebar";
import NewsCard from "@/components/homepage/news/NewsCard";
import RightSidebar from "@/components/homepage/news/RightSidebar";
import { getCategories, getNewsByCategoryId } from "@/lib/data";
import React from "react";



const NewsCategoryPage = async ({ params }) => {
  const { id } = await params;

  const categories = await getCategories();
  const news = await getNewsByCategoryId(id);

  return (
    <div className="container mx-auto grid grid-cols-12 gap-4 p-4 my-[50px]">
      <div className=" col-span-3">
        <LeftSidebar categories={categories} activeId={id} />
      </div>
      <div className=" col-span-6">
        <h2 className="text-lg font-bold mb-4">News by category</h2>
        <div className="space-y-4 mt-4">
          {news.length > 0 ? (
            news.map((n) => {
              return (
                <NewsCard key={n._id} news={n} />
              );
            })
          ) : (
            <p className="font-bold text-2xl text-center my-7">No news found.</p>
          )}
        </div>
      </div>
      <div className=" col-span-3">
        <RightSidebar />
      </div>
    </div>
  );
};

export default NewsCategoryPage;
