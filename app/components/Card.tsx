import { urlFor } from "@/sanity/lib/image"
import Link from "next/link";
import Image from "next/image"

const Card = ({ product }: any) => {
    return (
        <Link href={`/product/${product.slug.current}`}>
            <div className="bg-white pt-10 drop-shadow-md rounded-lg overflow-hidden ">

                <Image
                    src={urlFor(product.image[0]).url()}
                    alt={product.slug}
                    width={150}
                    height={100}
                    className="object-contain h-28 mx-auto m-2 "
                />
                <div className="text-center py-4 drop-shadow-sm">
                    <h1 className="font-bold text-2xl text-gray-800">{product.name}</h1>
                    <h1 className="text-xl text-gray-700 font-bold">$ {product.price}</h1>

                </div>
            </div>
        </Link>


    )
}

export default Card