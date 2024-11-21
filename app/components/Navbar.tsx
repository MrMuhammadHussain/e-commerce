import Link from "next/link";
import { PiShoppingCartBold } from "react-icons/pi";

const Navbar = () => {
  return (
    <div className="w-full h-[80px] bg-white">
        <div className="container w-full h-full  flex items-center justify-between ">
            <Link href="/" className="font-urbanist font-black text-2xl ">Shoopp</Link>
            <button className="relative text-[22px] ">
              <PiShoppingCartBold />
              <span className="cart-item-qty ">0</span>
            </button>

        </div>
    </div>
  )
}

export default Navbar