import Image from "next/image"
import {groq} from "next-sanity"
import { client } from "@/sanity/lib/client";
// import { urlForImage } from "@/sanity/lib/image";
import { urlFor } from "@/sanity/lib/image"
import Link from "next/link";
import Card from "./Card";

const Products  = async () => {
    const products = await client.fetch (groq `*[_type=="product"]`)


  return (

    <div className=" bg-[#f8f8f8] w-full py-12 mt-[125px] ">
        <div className="container">

            <div className="py-4">{/* className="font-urbanist font-black text-2xl" */}
                <h1 className="text-3xl font-bold">Best Selling Products.</h1>
                <h1>Enjoy 50% off</h1>
            </div>


            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 mt-6 overflow-hidden p-10">
                {(products|| []).slice(0,4).map((product:any,index:number) =>(
                <Card  product={product} key={index} />

                    
                ))
                }
                

            </div>

        </div>
        


    </div>
  )
}

export default Products
