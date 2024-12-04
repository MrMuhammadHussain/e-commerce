import { client } from "@/sanity/lib/client"
import { Navbar, ProductDetails } from "../../components"
import { groq } from "next-sanity"


const page =  async (context:any) => {
  const {slug} = context.params;
  const products = await client.fetch (groq `*[_type=="product"]`)
  const product = products.find((product:any)=>product.slug.current == slug)  
  
  return (
    <>
    <Navbar />
    <ProductDetails  product={product} />
    </>
  )
}

export default page