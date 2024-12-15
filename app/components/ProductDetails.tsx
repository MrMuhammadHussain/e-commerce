"use client"

import { urlFor } from "@/sanity/lib/image"
import Image from "next/image"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import { useState } from "react"

const ProductDetails = ({ product }: any) => {
  const [index, setIndex] = useState(0)
  return (
    <div className="w-full md:py-16">
      <div className="gap-8 md:max-w-[1024px] m-auto max-w-[600px] px-4 md:px-0 grid md:grid-cols-2 grid-cols-1 ">

        {/* left */}
        <div>
          {/* Top */}
          <div className="h-[450px] flex items-center mb-[25px]">
            <Image
              loader={() => urlFor(product.image[index]).url()}
              src={urlFor(product.image[index]).url()}
              height={300}
              width={300}
              alt={product.name}
              className="object-cover mx-auto" />
          </div>
          {/* Bottom */}
          <div className="flex gap-2 justify-center">
            {
              product.image?.map((item: any, i: number,) => (
                <Image
                  loader={() => urlFor(product.image[i]).url()}
                  src={urlFor(product.image[i]).url()}
                  height={180}
                  width={120}
                  alt={product.name}
                  className="object-contain mx-auto h-32 w-1/4 border rounded-xl hover:cursor-pointer p-2" key={i}
                  onClick={() => setIndex(i)}
                />
              ))
            }

          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-8 md:pt-32 pt-0">
          <div className="flex flex-col gap-4">
            <div className="text-3xl font-bold ">{product.name}</div>
            <div className=" text-xl font-medium">$ {product.price}</div>
          </div>
          <div className="flex gap-2 items-center ">
            <h3>Quantity</h3>
            <p className="flex items-center p-[6px] gap-8 border border-black ">
              <span className="text-red-700 cursor-pointer"><AiOutlineMinus /></span>
              <span className="text-[20px]">1</span>
              <span className="text-green-700 cursor-pointer "><AiOutlinePlus /></span>
            </p>

          </div>
          <button className="text-black md:w-1/2 p-5 text-xl font-bold w-full border-4 border-black hover:bg-black  hover:text-white">
            Add To Cart
          </button>

        </div>
      </div>
    </div>
  )
}

export default ProductDetails