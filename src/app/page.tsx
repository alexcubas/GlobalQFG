"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [teste, setteste] = useState("teste");

  return (
    <div className="justify-center flex max-w-full h-screen items-center overflow-hidden">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full md:w-[1280px] h-[90vh] relative rounded-3xl"
        style={{
          backgroundImage: "url('/Imagens/imagemBanner1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <CarouselContent className="flex flex-nowrap ">
          <CarouselItem className="w-full flex justify-center items-center text-white h-full">
            <div className="p-10 text-center justify-center align-bottom">
              <h2>Título do Slide 1</h2>
              <p>Descrição do que pode ser o slide 1.</p>
            </div>
          </CarouselItem>
          <CarouselItem className="w-full flex justify-center items-center text-white">
            <div className="p-10 text-center">
              {/* <h2>Título do Slide 2</h2>
              <p>Descrição do que pode ser o slide 2.</p> */}
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="absolute left-2 z-20 cursor-pointer" />
        <CarouselNext className="absolute right-2 z-20 cursor-pointer" />
      </Carousel>
    </div>
  );
}
