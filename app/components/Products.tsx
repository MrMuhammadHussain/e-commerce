import Image from "next/image"
import {groq} from "next-sanity"
import { client } from "@/sanity/lib/client";
// import { urlForImage } from "@/sanity/lib/image";
import { urlFor } from "@/sanity/lib/image"

const Products  = async () => {
    const products = await client.fetch (groq `*[_type=="product"]`)


  return (

    <div className=" bg-[#f8f8f8] w-full py-12 mt-[125px] ">
        <div className="container">

            <div className=" py-4">{/* className="font-urbanist font-black text-2xl" */}
                <h1 className="text-3xl font-bold">Best Selling Products.</h1>
                <h1>Enjoy 50% off</h1>
            </div>


            <div className="border border-black mt-6">
                {products.map((product:any,index:number) =>(
                    
                    <div className="bg-white pt-10 drop-shadow-md rounded-lg overflow-hidden" key={index}>
                        
                    <Image
                        src={urlFor(product.image[0]).url()}
                        alt={product.slug}
                        width={160}
                        height={120}
                        className="object-cover mx-auto h-40"
                        />
                </div>

                    
                ))
                }
                

            </div>

        </div>
        


    </div>
  )
}

export default Products
