import Link from "next/link";
import { LuShoppingBag } from "react-icons/lu";
import Cart from "./Cart";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";


const Navbar = () => {
  const { showCart, setShowCart }:any = useContext(CartContext);
  return (
    <>
      <div className="w-full h-[90px] drop-shadow-lg  sticky top-0 z-10 backdrop-blur-md bg-white bg-opacity-20 ">
        <div className="container w-full h-full flex items-center justify-between " >
          <Link href="/" className="font-urbanist font-black text-4xl ">Shoopp</Link>
          <button className="relative text-[26px] ">
            <LuShoppingBag />
            <span className="cart-item-qty ">0</span>
          </button>
        </div>
      </div>
      <Cart />
    </>
  )
}

export default Navbar