import React from "react";
import { Image } from "@nextui-org/react";
import Logo from "../Image/Logo.png";

const EncuestaLogo = () => {
  return (
    <Image
      width={190}
      height={150}
      src={Logo}
      alt="Encuesta Logo"
      objectFit="cover"
    />
  );
};

export default EncuestaLogo;
