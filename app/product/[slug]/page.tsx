"use client"
import { client } from "@/sanity/lib/client"
import { Navbar, ProductDetails } from "../../components"
import { useParams } from "next/navigation"
import { groq } from "next-sanity"

// const page = async ({ params }: {
//   params: Promise<{ slug: string }>
// }) => {
//   const slug = (await (params)).slug
//   console.log(slug, "This is Params")
//   return (
//     <>
//       <Navbar />
//       <ProductDetails slug={slug} />
//     </>
//   )
// }

// export default page


const page = async () => {
  const {slug}:any = useParams();
  const products = await client.fetch (groq `*[_type=="product"]`)
  const product = products.find((product:any)=>product.slug.current == slug)
  console.log(product, "This is product")
  return (
    <>
    <Navbar />
    <ProductDetails />
    </>
  )
}

export default page