import { Button } from "./ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";

export default function CarouselHeader() {
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
        <CarouselContent className="flex flex-nowrap h-[90vh]">
          <CarouselItem className="w-full flex justify-center items-center text-white">
            <div className="p-10 text-center">
              <h1 className="mb-4">CONHEÇA A QFG</h1>
              <Button>SAIBA MAIS</Button>
            </div>
          </CarouselItem>
          <CarouselItem className="w-full flex justify-center items-center text-white">
            <div className="p-10 text-center">
              <h1 className="mb-4">PROGRAMAÇÃO DA SEMANA</h1>
              <h2>QFG - Boqueirão</h2>
              <h3>Domigo</h3>
              <p>1° Domingo Santa Ceia 19H</p>
              <p>Culto da Família 19H</p>
              <h3>Quarta-Feira</h3>
              <p>Jejum 09H</p>
              <p>Culto Jeová Jireh 20H</p>
              <h3>Sábado</h3>
              <p>Rede Jovem Inconformados 20H</p>
            </div>
          </CarouselItem>
          <CarouselItem className="w-full flex justify-center items-center text-white">
            <div className="p-10 text-center">
              <h1 className="mb-4">PROGRAMAÇÃO DA SEMANA</h1>
              <h2>QFG - Jardim União</h2>
              <h3>Domigo</h3>
              <p>1° Domingo Santa Ceia 17H</p>
              <p>Culto da Família 17H</p>
              <h3>Quinta-Feira</h3>
              <p>Culto Jeová Jireh 20H</p>
            </div>
          </CarouselItem>
        </CarouselContent>

        <CarouselPrevious className="absolute left-2 z-20 cursor-pointer" />
        <CarouselNext className="absolute right-2 z-20 cursor-pointer" />
      </Carousel>
    </div>
  );
}
