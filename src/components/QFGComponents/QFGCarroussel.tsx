// components/ImageCarousel.tsx
import { useEffect, useState } from "react";
import { Box, IconButton } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

const images = [
  "/QFGImg/primeiroCarousel3.png",
  "/QFGImg/primeiroCarousel2.png",
  "/QFGImg/primeiroCarousel1.png",
  // adicione mais imagens conforme necessário
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CustomButtonGroup: React.FC<any> = ({ next, previous }) => {
  return (
    <Box
      position="absolute"
      width="100%"
      top="50%"
      transform="translateY(-50%)"
      display="flex"
      justifyContent="space-between"
      px={4}
    >
      <IconButton
        icon={<ChevronLeftIcon />}
        onClick={previous}
        aria-label="Previous"
        zIndex="1"
      />
      <IconButton
        icon={<ChevronRightIcon />}
        onClick={next}
        aria-label="Next"
        zIndex="1"
      />
    </Box>
  );
};

const ImageCarousel: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <Box position="relative" maxW="100%" height="500px">
      <Carousel
        responsive={responsive}
        infinite={true}
        arrows={false}
        renderButtonGroupOutside={true}
        customButtonGroup={<CustomButtonGroup />}
      >
        {images.map((src, index) => (
          <Box key={index} p={1}>
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              style={{ borderRadius: "md", boxShadow: "md" }}
            />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default ImageCarousel;
