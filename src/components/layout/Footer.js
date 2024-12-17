import Link from 'next/link'
import logo from '../../../public/images/logo.png'
import Image from 'next/image'
import { AiOutlineInstagram } from "react-icons/ai";
import { RiTelegramLine } from "react-icons/ri";
import { SiWhatsapp } from "react-icons/si";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
export default function Footer(props) {
  const t = props;
  return (
    <div className="background-footer pt-10 px-10">
      <div className="py-5 px-8 border-double border-4 border-[rgba(255,255,255,0.3)] grid grid-cols-1 md:grid-cols-3  gap-4 text-white leading-6">
        <div className='flex flex-col gap-5 '>
          <div className={`flex flex-shrink-0 items-center border-bottom ${t.navbar.home === "خانه" ? 'flex-row-reverse' : 'flex-row'} `}>
            <Image src={logo}
              alt="logo"
              width={50}
              height={10}
            />
            <h3 className="ps-2 font-bold text-2xl drop-shadow-[2px_2px_3px_rgba(0,0,0,0.3)] text-[#a27753]">
              aroma</h3>
          </div>
          <p className={`${t.navbar.home === "خانه" ? 'text-right' : 'text-left'}`}>
            {t.footer.about}
          </p>
          <div className={`flex gap-3 ${t.navbar.home === "خانه" ? 'flex-row-reverse' : 'flex-row'}`}>
            <Link href="/" className='social hover:bg-[#a27753] hover:text-white'>
              <AiOutlineInstagram />
            </Link>
            <Link href="/" className='social hover:bg-[#a27753] hover:text-white'>
              <RiTelegramLine />
            </Link>
            <Link href="/" className='social hover:bg-[#a27753] hover:text-white'>
              <SiWhatsapp />
            </Link>
          </div>
        </div>
        <div className='flex flex-col gap-5'>
          <h2 className={`py-2 text-2xl font-bold border-bottom  text-[#a27753] ${t.navbar.home === "خانه" ? 'text-right font-normal' : 'text-left'}`}>{t.footer.quickLinks}</h2>
          <div className={`flex gap-2 ${t.navbar.home === "خانه" ? 'flex-row-reverse' : 'flex-row'} `}>
            {t.navbar.home === "خانه" ? <FaAngleLeft className='text-[#a27753]' /> : <FaAngleRight className='text-[#a27753]' />}
            <Link className='hover:pr-1 transition-all ease-linear duration-300 ' href="/"> {t.navbar.home}</Link>
          </div>
          <div className={`flex gap-2 ${t.navbar.home === "خانه" ? 'flex-row-reverse' : 'flex-row'} `}>
            {t.navbar.home === "خانه" ? <FaAngleLeft className='text-[#a27753]' /> : <FaAngleRight className='text-[#a27753]' />}
            <Link className='hover:pr-1 transition-all ease-linear duration-300 ' href="/"> {t.footer.aboutUs}</Link>
          </div>
          <div className={`flex gap-2 ${t.navbar.home === "خانه" ? 'flex-row-reverse' : 'flex-row'} `}>
            {t.navbar.home === "خانه" ? <FaAngleLeft className='text-[#a27753]' /> : <FaAngleRight className='text-[#a27753]' />}
            <Link className='hover:pr-1 transition-all ease-linear duration-300 ' href="/">{t.navbar.Discounts} </Link>
          </div>
          <div className={`flex gap-2 ${t.navbar.home === "خانه" ? 'flex-row-reverse' : 'flex-row'} `}>
            {t.navbar.home === "خانه" ? <FaAngleLeft className='text-[#a27753]' /> : <FaAngleRight className='text-[#a27753]' />}
            <Link className='hover:pr-1 transition-all ease-linear duration-300 ' href="/"> {t.navbar.products}</Link>
          </div>
        </div>
        <div className='flex flex-col gap-5'>
          <h2 className={`text-2xl py-2 font-bold border-bottom  text-[#a27753] ${t.navbar.home === "خانه" ? 'text-right font-normal' : 'text-left'}`}>{t.footer.contactInfo}</h2>
          <div className={`flex gap-2 text-lg ${t.navbar.home === "خانه" ? 'flex-row-reverse' : 'flex-row'}`}>
            <BsTelephoneFill className ='text-[#a27753]' />
            <span>+111-222-333</span>
          </div>
          <div className={`flex gap-2 text-lg ${t.navbar.home === "خانه" ? 'flex-row-reverse' : 'flex-row'}`}>
            <MdEmail className='text-[#a27753]' />
            <span>abc@gmail.com</span>
          </div>
          <div className='flex flex-col gap-5'>
            <h2 className={`pt-2 text-2xl font-bold  text-[#a27753] ${t.navbar.home === "خانه" ? 'text-right font-normal' : 'text-left'}`}>{t.footer.businessHours}</h2>
            <span className={`${t.navbar.home === "خانه" ? 'text-right font-normal' : 'text-left'}`}>mon - fri: 8 AM - 6 PM</span>
            <span className={`${t.navbar.home === "خانه" ? 'text-right font-normal' : 'text-left'}`}> sat - sun: 10 AM - 4 PM</span>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center text-white py-3 tracking-widest text-lg '>
        designed by
        <span className='text-[#a27753] px-1'>Bita</span>
      </div>
    </div>
  )
}
