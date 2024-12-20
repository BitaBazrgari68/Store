'use client';
import Card2 from "@/module/Card2";
import { useSelector } from "react-redux";
import Link from 'next/link';

export default function ShopingCart() {

    const selector = useSelector((state) => state.cart);
    const sumCount = selector.cartItems.reduce((prev, current) => {
        return prev + current.count
    }, 0)


    return (
        <>
            <div className="text-right mx-10  pt-10 px-10 border-bottom">
                <span className="border-bottom border-b-2 rounded-sm" >سبد خرید</span>
                <span className="rounded-sm text-white mr-2 px-3 pt-1 bg-[#a27753]">{sumCount}</span>
            </div>

            <div className="px-10 mt-2 flex">
                <div className="flex-col w-1/3 h-fit p-5 border mr-2">
                    <div className=" flex flex-col md:flex-row justify-between">
                        <div>قیمت کالاها </div>
                        <div>
                            {selector.sumPrice}
                        </div>
                    </div>
                    <div className=" flex flex-col md:flex-row justify-between mt-3">
                        <div>جمع سبد خرید</div>
                        <div>
                            {selector.sumPrice}
                        </div>
                    </div>
                    <div className="flex  justify-between">
                        <Link href={"/"}
                            className="py-3 px-4 mt-5 mx-auto inline-flex items-center gap-x-2 text-sm rounded-lg border border-transparent bg-[#6B4423]  text-white hover:bg-[#a27753] disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            data-hs-overlay="#hs-basic-modal">
                            تایید و تکمیل سفارش
                        </Link>
                    </div>
                </div>
                {
                    selector.sumPrice ? <div className=" grid grid-cols-1 gap-4 w-2/3 ">
                        {selector.cartItems?.map((i, index) =>
                            i.count > 0 && <Card2
                                key={index}
                                id={i.id}
                                title={i.title}
                                img={i.img}
                                price={i.price}
                            />
                        )}
                    </div> : <div className="w-2/3">
                        <h2 className="flex flex-col items-center justify-center gap-3 md:flex-row text-center text-white bg-[#a27753] py-10 rounded-lg text-xl">
                            <span>---------</span>
                            <Link href={'/'} className="hover:text-[#6B4423] hover:text-2xl transition-all duration-300 ease-linear">  بازگشت به صفحه ی اصلی  </Link>
                            <span>---------</span>
                        </h2>
                    </div>
                }
            </div>
        </>
    )
}
