import React, { useState } from "react";
import Slider from "react-slick";
import { Box } from "@chakra-ui/react";
import Image from "next/image";

// Importando os estilos CSS do Slick Carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../styles/ImageCarousel.module.css"; // Importando o módulo CSS

const images: string[] = [
  "/QFGImg/primeiroCarousel3.png",
  "/QFGImg/primeiroCarousel2.png",
  "/QFGImg/primeiroCarousel1.png",
  "/QFGImg/primeiroCarousel3.png",
  "/QFGImg/primeiroCarousel2.png",
  "/QFGImg/primeiroCarousel1.png",
  // Adicione mais imagens conforme necessário
];

const ImageCarouselSecond: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Padrão para desktop grande
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    beforeChange: (oldIndex: number, newIndex: number) =>
      setCurrentSlide(newIndex),
    responsive: [
      {
        breakpoint: 1920, // Tela de largura até 1920px
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024, // Tela de largura até 1024px
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600, // Tela de largura até 600px
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <Box width="full" overflow="hidden" p={5}>
      <Slider {...settings} className={styles.slider}>
        {images.map((src, index) => (
          <Box
            key={index}
            p={1}
            height="500px"
            position="relative"
            className={`${styles.slide} ${
              currentSlide === index ? styles.zoom : ""
            }`}
          >
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              layout="fill"
              objectFit="cover"
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ImageCarouselSecond;
