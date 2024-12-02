import Link from "next/link";
// import { PiShoppingCartBold } from "react-icons/pi";
import { LuShoppingBag } from "react-icons/lu";


const Navbar = () => {
  return (
    <div className="w-full h-[90px] drop-shadow-lg  sticky top-0 z-10 backdrop-blur-md bg-white bg-opacity-20 ">
      <div className="container w-full h-full flex items-center justify-between " >
        <Link href="/" className="font-urbanist font-black text-4xl ">Shoopp</Link>
        <button className="relative text-[26px] ">
          {/* <PiShoppingCartBold /> */}
          <LuShoppingBag />
          <span className="cart-item-qty ">0</span>
        </button>

      </div>
    </div>
  )
}

export default Navbar