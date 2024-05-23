import {
  Flex,
  useBreakpointValue,
  Text,
  Input,
  Textarea,
  FormControl,
  Button,
  Link,
  useToast,
  Image,
} from "@chakra-ui/react";
import InputCard from "../patterns/inputCard";
import { useEffect, useState } from "react";
import TextAreaCard from "../patterns/textAreaCard";
import ImageWithText from "../patterns/ImageWithText";
import ButtonGradient from "../patterns/ButtonGradient";
import TextWithGradient from "../patterns/textWithGradient";
import emailjs from "emailjs-com";
import { TfiEmail } from "react-icons/tfi";

export default function FaleConoscoBlock() {
  const [Nome, setNome] = useState("");
  const [Email, setEmail] = useState("");
  const [Celular, setCelular] = useState("");
  const [Mensagem, setMensagem] = useState("");

  const isWideVersion = useBreakpointValue({
    base: true,
    sm: true,
    md: false,
    lg: false,
    xlg: false,
  });
  const toast = useToast();

  const showToast = (message: string, status: "success" | "error") => {
    toast({
      title: message,
      status: status,
      duration: 3000, // Defina a duração padrão aqui
      isClosable: true, // Permitir fechar o toast
      // Outras configurações padrão que você deseja
    });
  };

  const whatsappUrl =
    "https://wa.me/41999731035?text=" +
    encodeURIComponent("Olá, gostaria de mais informações!");

  const validateEmail = (email: any) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone: any) => {
    return /^\d{10,11}$/.test(phone); // Valida números de telefone com 10 ou 11 dígitos
  };

  const sendEmail = (e: any) => {
    e.preventDefault(); // Impede o comportamento padrão do formulário
    if (!Nome || !Email || !Celular || !Mensagem) {
      showToast("Todos os campos são obrigatórios!", "error");
      return;
    }
    if (!validateEmail(Email)) {
      showToast("Por favor, insira um e-mail válido.", "error");
      return;
    }
    if (!validatePhone(Celular)) {
      showToast("Por favor, insira um número de telefone válido.", "error");
      return;
    }

    const templateParams = {
      from_name: Nome,
      from_email: Email,
      to_name: "TudoLimpo",
      message: Mensagem,
      reply_to: Celular,
    };

    emailjs
      .send(
        "service_r2lm3kr",
        "template_tj6o08k",
        templateParams,
        "TWxVITD9P9VCKdi98"
      )
      .then(
        (result) => {
          showToast("Email enviado!", "success");
        },
        (error) => {
          showToast("Erro ao enviar email. Tente novamente...", "error");
        }
      );
  };
  return (
    <Flex
      id="Contato"
      direction={"column"}
      textColor={"white"}
      align={"center"}
      w={"70%"}
    >
      <Flex gap="15px" fontSize={isWideVersion ? "25px" : "55px"}>
        <TextWithGradient text="FALE" fontWeight={"bold"} />
        <TextWithGradient text="CONOSCO" />
      </Flex>
      <Flex
        bg={"pink1"}
        my={isWideVersion ? "30px" : "60px"}
        w={isWideVersion ? "full" : "1280px"}
        h={isWideVersion ? "auto" : "500px"}
        py={isWideVersion ? "20px" : "00px"}
        direction={"column"}
        justify={"center"}
        align={"center"}
        borderRadius={isWideVersion ? "20px" : "76px"}
      >
        <Flex
          w="90%"
          justify={"space-evenly"}
          direction={isWideVersion ? "column" : "row"}
        >
          <Flex
            direction={"column"}
            gap={"20px"}
            w={isWideVersion ? "full" : "40%"}
            fontSize={isWideVersion ? "12px" : "16px"}
            mb={isWideVersion ? "20px" : "0px"}
          >
            <Text fontSize={isWideVersion ? "18px" : "55px"}>Contato</Text>
            <Flex
              justify={"space-between"}
              direction={[
                "column",
                "row",
                "column",
                "column",
                "column",
                "column",
              ]}
              gap={["20px", "0px", "20px", "20px", "20px", "20px"]}
            >
              <Flex
                gap={"10px"}
                align={"center"}
                fontSize={isWideVersion ? "12px" : "20px"}
              >
                <Image
                  src={"/Icons/phoneIcon.png"}
                  alt={"phoneicon"}
                  w={isWideVersion ? "20px" : "30px"}
                  h={isWideVersion ? "20px" : "30px"}
                />
                <Text>(41) 3014-8922</Text>
              </Flex>
              <Link
                href={whatsappUrl}
                isExternal
                textDecoration="none"
                _hover={{ textDecoration: "none" }}
              >
                <Flex
                  gap={"10px"}
                  align={"center"}
                  fontSize={isWideVersion ? "12px" : "20px"}
                >
                  <Image
                    src={"/Icons/WhatsIcon.png"}
                    alt={"whatsicon"}
                    w={isWideVersion ? "20px" : "30px"}
                    h={isWideVersion ? "20px" : "30px"}
                  />
                  <Text>(41) 99973-1035</Text>
                </Flex>
              </Link>
            </Flex>
            <Link
              textDecoration="none"
              _hover={{ textDecoration: "none" }}
              href="mailto:contato@tudolimpocuritiba.com.br?subject=Assunto%20Interessante&body=Olá!%20Estou%20interessado%20em%20seus%20serviços."
            >
              <Flex
                gap={"10px"}
                align={"center"}
                fontSize={isWideVersion ? "12px" : "20px"}
              >
                <TfiEmail size={isWideVersion ? "20px" : "30px"} />
                <Text>contato@tudolimpocuritiba.com.br</Text>
              </Flex>
            </Link>
          </Flex>
          <FormControl
            w={isWideVersion ? "full" : "40%"}
            as="form"
            onSubmit={sendEmail}
          >
            <Flex direction={"column"} gap={"20px"} align={"center"}>
              <InputCard
                placeholder="Nome*"
                value={Nome}
                onChange={(e) => setNome(e.target.value)}
              />
              <InputCard
                placeholder="E-mail*"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <InputCard
                placeholder="Celular*"
                value={Celular}
                onChange={(e) => setCelular(e.target.value)}
              />
              <TextAreaCard
                placeholder="Mensagem*"
                value={Mensagem}
                onChange={(e) => setMensagem(e.target.value)}
              />
              <Flex onClick={sendEmail}>
                <ButtonGradient
                  isSubmit={true}
                  text={"Enviar"}
                  width="120px"
                  height="60px"
                  backGround="#DF4076"
                />
              </Flex>
            </Flex>
          </FormControl>
        </Flex>
      </Flex>
    </Flex>
  );
}
