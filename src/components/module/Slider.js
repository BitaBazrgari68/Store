"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import Home1 from '@/public/images/Slider1.jpg';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Link from 'next/link';

export default function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper  h-screen mt-1"
      >

        <SwiperSlide>
          <div className='background-slider h-screen'>
            <div className="hidden md:flex  mx-auto relative">
              <div className="card-wrapper absolute top-20 left-36 w-1/3 p-5 justify-start flex-col leading-normal text-right text-blue-950">
                <h1 className="font-bold mb-5 text-2xl text-[#6B4423]">
                  قهوه‌ای تازه، طعمی ناب
                </h1>
                <h2 className="leading-loose about text-justify text-[20px]">
                  با قهوه‌ای از بهترین مزارع جهان، روز خود را آغاز کنید. هر فنجان از ما، لذت و آرامش بی‌نظیری را به شما هدیه می‌دهد. تجربه‌ای که در هر قهوه نهفته است، شما را به دنیایی از طعم و عطر می‌برد!"

                </h2>
                <Link href={"/"}
                  className="py-3 px-4 mt-5 inline-flex items-center gap-x-2 text-sm rounded-lg border border-transparent bg-[#6B4423]  text-white hover:bg-[#a27753] disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  data-hs-overlay="#hs-basic-modal">
                  سفارش محصول
                </Link>
              </div>
            </div>
          </div>
          {/* <Image src={Home1} className="w-full h-full" /> */}
        </SwiperSlide>


      </Swiper>
    </>
  );
}
