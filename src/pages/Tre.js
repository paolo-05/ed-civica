import Typewriter from "typewriter-effect";
import Footer from "../components/Footer";

const Tre = () => {
  const aforisma = "Sii il cambiamento che vuoi vedere nel mondo  ~ Ghandi";
  const spiegazione =
    "Con questa sua celebre frase Gandhi afferma che per cambiare le " +
    "ingiustizie presenti nel mondo, il quale secondo molti viene guidato " +
    "solo ed esclusivamente dalle persone più potenti o dal flusso naturale " +
    "degli eventi, è necessario innanzitutto cambiare la propria persona in " +
    "meglio. Naturalmente per fare ciò è necessaria un'approfondita " +
    "conoscenza di noi stessi, oltre alla capacità di saper cogliere i bisogni " +
    "delle persone che ci circondano. Solo in questo modo il mondo potrà " +
    "cambiare secondo i nostri desideri.";
  document.title = "Paura del Cambiamento - Aforisma";
  return (
    <>
      <h1 className="top">AFORISMA</h1>
      <div className="center">
        <Typewriter
          options={{ loop: true }}
          onInit={(typewriter) => {
            typewriter

              .typeString(aforisma)
              .pauseFor(200)
              .deleteAll()
              .changeDelay(50)
              .typeString(spiegazione)
              .deleteAll()
              .start();
          }}
        />
      </div>
      <Footer />
    </>
  );
};
export default Tre;
