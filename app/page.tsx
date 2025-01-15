import Image from "next/image";
import Header from "@/Components/Header";
import {Footer} from "@/Components/Footer";
import { Carausal } from "@/Components/Carausal";
import Testimonial from "@/Components/Testimonial";
import { Suspense } from "react";
import Loading from "@/Components/Loading";
import { DynamicGallery } from "@/Components/Dynamicgallery";
export default function Home() {
  return (
    <div className=" items-center ">
     <Header/>
     <Carausal/>
     <Suspense fallback={<Loading />}>

     <DynamicGallery/>
     </Suspense>

     <Testimonial/>
     <Footer/>
    </div>
  );
}
