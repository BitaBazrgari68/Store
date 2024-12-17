import Link from "next/link";
import { BiSolidOffer } from "react-icons/bi";
import { AiFillProduct } from "react-icons/ai";
import { FaShopify } from "react-icons/fa6";
export default function Menu(props) {
    const t=props;
    return (
        <div className="bg-gradient-to-l dark:text-white transition-all from-white dark:from-cnDarkBlue-20 to-white/30 bg-[#a27753] flex-row sm:flex justify-center items-center text-center py-16 mt-2">
            <div className="flex items-center relative py-6 px-9 borderRadius bg-[#3C2317] text-white mx-auto text-lg w-fit
             hover:bg-white hover:text-[#3C2317] transition-all duration-500 ease-linear ">
                <FaShopify className="text-5xl absolute -left-4 -top-4" />
                <Link href="/">{ t.navbar.selling} </Link>
            </div>
            <div className="flex items-center relative my-5 md:my-0 py-6 px-9 borderRadius bg-[#3C2317] text-white mx-auto text-lg w-fit
             hover:bg-white hover:text-[#3C2317] transition-all duration-500 ease-linear">
                <AiFillProduct className=" text-5xl absolute -left-4 -top-4"  />
                <Link href="/">{t.navbar.products}</Link>
            </div>
            <div className="flex items-center relative py-6 px-9 borderRadius bg-[#3C2317] text-white mx-auto text-lg w-fit
            hover:bg-white hover:text-[#3C2317] transition-all duration-500 ease-linear">
                <BiSolidOffer className=" text-5xl absolute -left-4 -top-4" />
                <Link href="/">{t.menu.offer}</Link>
            </div>
        </div>
    )
}
