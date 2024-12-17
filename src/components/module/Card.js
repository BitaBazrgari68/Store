
import Image from 'next/image'
import { addToCart, removeFromCart } from "../../redux/Store";
import { useDispatch, useSelector } from "react-redux";
import { FaCartShopping } from "react-icons/fa6";


export default function Card({ img, id, title, price }) {
    
    const dispatch = useDispatch();
    const selector = useSelector((state) => state.cart);
    const isItem = selector.cartItems?.filter((row) => row.id === id)[0]?.count
    return (
        <div className="product-item flex flex-col ">
            <span className="sale bg-[#6B4423] text-white pb-2 pt-3 px-4">%10</span>
            <Image src={img}
                alt={title}
                width={100}
                height={100}
                className="m-auto"
            />
            <div className="flex flex-col text-2xl ">
                <div className="flex flex-row justify-between items-center py-5 ">
                    <h3 className="text-center">{title}</h3>
                    <span>{price}</span>
                </div>

                <div className="flex flex-row items-center justify-center border ">
                    {
                        !isItem && <button className="btn btn-info  text-[#a27753]" onClick={() => dispatch(addToCart({ id: id, img: img, title: title, price: price  }))}>
                            AddToCart
                        </button>
                    }
                    {isItem > 0 && <div className="flex flex-row items-center text-red-700 ">
                        <FaCartShopping className='mr-8 text-lg' />
                        {isItem > 0 && <button className="btn w-8 h-8 flex items-center justify-center rounded-full bg-[#a27753] text-white" onClick={() => dispatch(addToCart({ id: id, img: img, title: title, price: price }))}>+</button>}
                        <span className="mx-3 ">
                            {isItem > 0 ? selector.cartItems?.filter((row) => row.id === id)[0]?.count : ''}
                        </span>
                        {isItem > 0 && <button className="btn w-8 h-8 flex items-center justify-center rounded-full bg-[#a27753] text-white" onClick={() => dispatch(removeFromCart({ id: id }))}>-</button>}
                    </div>
                    }
                </div>
            </div>
        </div>
    )
}
