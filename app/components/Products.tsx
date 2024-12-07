import { groq } from "next-sanity"
import { client } from "@/sanity/lib/client";
import Card from "./Card";

const Products = async () => {
  try {
    const products = await client.fetch(groq`*[_type=="product"]`)

    function getRandomItems(arr: any[], count: number): any[] {
      const result = [];
      for (let i = 0; i < count; i++) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        result.push(arr.splice(randomIndex, 1)[0]);
      }
      return result;
    }
    const randomProdust = getRandomItems(products, 4)
    return (

      <div className=" bg-[#f8f8f8] w-full py-12 mt-[125px] ">
        <div className="container">

          <div className="py-4">{/* className="font-urbanist font-black text-2xl" */}
            <h1 className="text-3xl font-bold">Best Selling Products.</h1>
            <h1>Enjoy 50% off</h1>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 mt-6 overflow-hidden p-10">
            {(randomProdust || []).map((product: any, index: number) => (
              <Card product={product} key={index} />
              ))
              }
          </div>
        </div>
      </div>
    )
  } catch (error) {
    return (
      <div className="bg-[#f8f8f8] w-full py-12 mt-[125px]">
        <div className="container flex justify-center items-center flex-col ">
          <h1 className="text-3xl font-bold">Error fetching products.</h1>
          <h2 className="text-2xl font-light p-6">We Resolving Error Please Try Again latter.</h2>
        </div>
      </div>
    );
  }
}

export default Products
