import { Flex, Text } from "@chakra-ui/react";
import styles from "../../styles/radioStyle.module.css"; // Importando o CSS Module

export default function RadioPlayer() {
  return (
    <Flex
      direction="column"
      align="center"
      w="100%"
      p={4}
      borderRadius="md"
      boxShadow="md"
    >
      <audio className={styles.audioPlayer} controls>
        <source src="https://hts01.kshost.com.br:8012/live" type="audio/mpeg" />
        Seu navegador não suporta o elemento de áudio.
      </audio>
    </Flex>
  );
}
