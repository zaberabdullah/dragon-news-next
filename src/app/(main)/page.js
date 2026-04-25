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
        <h2 className="text-lg font-bold mb-4">All categories</h2>
        <ul className="flex flex-col gap-1 mt-6">
          {categories.news_category.map((category) => {
            return (
              <li
                key={category.category_id}
                className="bg-slate-200 hover:bg-slate-300 p-2 rounded-md text-md text-center font-bold"
              >
                {category.category_name}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="text-3xl font-bold bg-purple-100 col-span-6">All news</div>
      <div className="text-3xl font-bold bg-yellow-100 col-span-3">Social icons</div>
    </div>
  );
}
