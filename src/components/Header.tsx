import LogoIcon from "./ui/LogoIcon";

export default function Header() {
  return (
    <div className="flex justify-center items-center w-full fixed z-10 h-[25vh]">
      <div className="flex justify-evenly items-end  pb-2 fixed w-[1280px] border-b border-white">
        <div>
          <LogoIcon nomeArquivo="GlobalLogo.png" className="w-auto h-auto" />
        </div>
        <div className="flex justify-center items-center text-white gap-3 ">
          <h1>Sobre nós</h1>
          <h1>Eventos</h1>
          <h1>Palavra</h1>
          <h1>Contribua</h1>
          <h1>Contato</h1>
        </div>

        <div className="flex justify-center items-center gap-2">
          <LogoIcon nomeArquivo="instagramLogo.png" />
          <LogoIcon nomeArquivo="faceLogo.png" />
          <LogoIcon nomeArquivo="youtubeLogo.png" />
        </div>
      </div>
    </div>
  );
}
