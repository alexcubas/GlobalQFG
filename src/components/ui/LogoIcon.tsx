import React, { ComponentPropsWithoutRef } from "react";

interface LogoIconProps extends ComponentPropsWithoutRef<"div"> {
  nomeArquivo: string;
}

const LogoIcon: React.FC<LogoIconProps> = ({ nomeArquivo, ...rest }) => {
  const src = `/Logos/${nomeArquivo}`;

  return (
    <div className="flex items-center justify-center">
      <img
        src={src}
        alt={nomeArquivo}
        className="w-8 h-8 object-fill"
        {...rest}
      />
    </div>
  );
};

export default LogoIcon;
