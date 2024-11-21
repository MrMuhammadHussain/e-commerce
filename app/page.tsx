import Image from "next/image";
import {groq} from "next-sanity"
import { client } from "@/sanity/lib/client";

export default async function Home() {

  const produts = await client.fetch (groq `*[_type=="product"]`)
  console.log (produts)

  return (
    <>
    <h1 className="underline flex justify-center">Hello World !</h1>
    
    </>
  );
}
