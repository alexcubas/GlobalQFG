import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html className="scroll-smooth" style={{ scrollBehavior: "smooth" }}>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta
            name="description"
            content="Na Tudo Limpo, somos especialistas em limpeza e conservação para condomínios, espaços comerciais e corporativos em Curitiba, PR. Garantimos que cada canto do seu espaço reflita profissionalismo e dedicação."
          />
          <meta
            name="keywords"
            content="limpeza, conservação, condomínios, comerciais, corporativos, Curitiba, PR"
          />
          <meta name="author" content="Tudo Limpo" />
          <meta name="robots" content="index, follow" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200;400;700&family=Poppins:wght@300;400;800&display=swap"
            rel="stylesheet"
          />

          {/* Open Graph Meta Tags */}
          <meta
            property="og:title"
            content="Tudo Limpo - Especialistas em Limpeza e Conservação"
          />
          <meta
            property="og:description"
            content="Na Tudo Limpo, somos especialistas em limpeza e conservação para condomínios, espaços comerciais e corporativos em Curitiba, PR. Garantimos que cada canto do seu espaço reflita profissionalismo e dedicação."
          />
          <meta property="og:image" content="/Icons/TL_LogoFull.png" />
          <meta property="og:url" content="https://tudo-limpo.vercel.app/" />
          <meta property="og:type" content="website" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
