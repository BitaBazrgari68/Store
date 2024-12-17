"use client"
import Card from '@/module/Card'
import product1 from '../../../public/images/product1.png'
import product2 from '../../../public/images/product2.png'
import product3 from '../../../public/images/product3.png'
import product4 from '../../../public/images/product4.png'
// import { useState,useEffect } from 'react'

export default function Discounts(props) {
  // const [data, setData] = useState();

  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((data) =>{ 
  //       setData(data)

  //   });
  // }, []);

  const t = props;
  const arr = [
    { id: 1, title: "title1", img: product1, price: 109.5 },
    { id: 2, title: "title2", img: product2, price: 109.5 },
    { id: 3, title: "title3", img: product3, price: 109.5 },
    { id: 4, title: "title4", img: product4, price: 109.5 },
    { id: 5, title: "title5", img: product1, price: 109.5 },
    { id: 6, title: "title6", img: product2, price: 109.5 },
    { id: 7, title: "title7", img: product3, price: 109.5 },
    { id: 8, title: "title8", img: product4, price: 109.5 }
  ]

  return (
    <div>
      <div className="heading bg-white">
        <div className="items-center justify-center  flex-row lg:flex    ">
          <div>---------</div>
          <span>{t.heading.DiscountedProducts}</span>
          <div>---------</div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-3">
        {
          // img.map((src, index) => (
          //   <Card images={src} />
          // ))
          arr?.map((e, index) => (
            <Card
              key={index}
              id={e.id}
              title={e.title}
              img={e.img}
              price={e.price}
            />
          ))
        }
      </div>
    </div>
  )
}
