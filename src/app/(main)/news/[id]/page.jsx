import { getNewsDetailsById } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";

const NewsDetailsPage = async ({ params }) => {
    const { id } = await params;
  const news = await getNewsDetailsById(id);

  return (
    <div className="max-w-4xl mx-auto my-8">
      <div className="card bg-base-100 shadow-sm">
        <div className="card-body">
          {/* author info */}
          <div className="flex items-center justify-between bg-slate-200 p-3 rounded-md">
            <div className="flex items-center gap-3 mb-4">
              <Image src={news.author.img} alt={news.author.name} width={40} height={40} className="rounded-full" />
              <div>
                <h2>{news.author.name}</h2>
                <p className="text-sm text-gray-500">{news.author.published_date}</p>
              </div>
            </div>
            <div className="flex items-center justify-between gap-4">
              <CiShare2 className="text-xl" />
              <CiBookmark className="text-xl" />
            </div>
          </div>
          <h2 className="card-title">{news.title}</h2>
        </div>
        <figure>
          <Image src={news.image_url} alt={news.title} width={400} height={300} className="w-full h-auto" />
        </figure>
        <p className="text-gray-600">{news.details}</p>

        <div className="flex items-center justify-between gap-2 mt-4 my-4">
          <div className="flex items-center gap-3">
            <h2 className="flex items-center gap-3">
              <IoIosStar className="text-lg text-yellow-500" /> {news.rating.number}
            </h2>
            <h2 className="flex items-center gap-3">
              <FaEye className="text-lg" />
              {news.total_view}
            </h2>
          </div>
          <Link href={`/category/${news.category_id}`}>
            <button className="btn btn-active">See other news for this category <BsArrowRight /></button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsPage;
