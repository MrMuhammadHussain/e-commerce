import Link from "next/link";
import { PiShoppingCartBold } from "react-icons/pi";

const Navbar = () => {
  return (
    <div className="w-full h-[90px] drop-shadow-md sticky top-0 z-10 backdrop-blur-md bg-white bg-opacity-20">
      <div className="container w-full h-full flex items-center justify-between " >
        <Link href="/" className="font-urbanist font-black text-4xl ">Shoopp</Link>
        <button className="relative text-[36px] ">
          <PiShoppingCartBold />
          <span className="cart-item-qty ">0</span>
        </button>

      </div>
    </div>
  )
}

export default Navbar