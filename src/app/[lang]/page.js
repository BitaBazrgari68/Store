import Link from "next/link";
import { GB, IR } from 'country-flag-icons/react/3x2'
import { getDictionary } from "./dictionaries";
import Header from "@/layout/Header";
import Slider from "../../components/module/Slider"
import Discounts from "@/layout/Discounts";
import Menu from "@/layout/Menu";
import Footer from "@/layout/Footer";

export default async function Home({ params }) {
  const { lang } = params;
  const t = await getDictionary(lang);

  return (
    <main >
      <div className="bg-black py-1  text-white flex justify-center" >
        <div className="flex items-center">
          <GB className="w-4 h-4" />
        </div>
        <div className="px-1 pt-2">
          <Link href="/en" >English</Link>
          <span className="px-2">|</span>
          <Link href="/fa">persian</Link>
        </div>
        <div className="flex items-center">
          <IR className="w-4 h-4"  />
        </div>
      </div>
      <Header {...t} />
      <Slider />
      <Discounts {...t}/>
      <Menu {...t}/>
      <Footer {...t}/>
    </main>
  );
}
