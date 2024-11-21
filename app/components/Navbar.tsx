import { PiShoppingCartBold } from "react-icons/pi";

const Navbar = () => {
  return (
    <div className="w-full h-[80px] bg-white border-b">
        <div className="max-w-[1024px] m-auto w-full h-full border flex items-center justify-between ">
            <h1>Shoopp</h1>
            <div>
              <span>
              <PiShoppingCartBold />
              </span>
            </div>

        </div>
    </div>
  )
}

export default Navbar