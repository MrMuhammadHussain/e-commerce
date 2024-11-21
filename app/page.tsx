import Image from "next/image";
import {groq} from "next-sanity"
import { client } from "@/sanity/lib/client";
import { Navbar , Hero } from "./components";

export default async function Home() {

  const produts = await client.fetch (groq `*[_type=="product"]`)
  console.log (produts)

  return (
    <>
    <Navbar />
    <Hero  />
    
    </>
  );
}
