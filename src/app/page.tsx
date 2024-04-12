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
    <div className="justify-center flex">
      {/* <div className="pt-10 flex justify-center items-center">
        <img
          src="/Imagens/imagemBanner1.png"
          className="h-auto w-[1280px]"
          alt="Imagem Overlay"
        />
      </div> */}

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-[1280px]"
      >
        <CarouselContent>
          <CarouselItem>
            <div className="pt-10 flex justify-center items-center">h1</div>
          </CarouselItem>
          <CarouselItem>
            <div className="pt-10 flex h-5/6 justify-center items-center">
              h2
            </div>
          </CarouselItem>

          {/* <CarouselItem>
            <div className="pt-10 flex justify-center items-center">
              <img
                src="/Imagens/imagemBanner1.png"
                alt="Imagem Banner 1"
                className="md:basis-1/3 lg:basis-1/4"
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="pt-10 flex justify-center items-center">
              <img
                src="/Imagens/imagemBanner1.png"
                alt="Imagem Banner 1"
                className="md:basis-1/3 lg:basis-1/4"
              />
            </div>
          </CarouselItem> */}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
