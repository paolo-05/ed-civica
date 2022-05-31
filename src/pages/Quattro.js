import { Image } from "react-bootstrap";
import Footer from "../components/Footer";

const Quattro = () => {
  document.title = "Paura del Cambiamento - Logo";
  return (
    <>
      <h1 className="top">LOGO</h1>

      <div className="container">
        <div className="row">
          <div className="col-sm">
            <h3>Come l'abbiamo creato:</h3>
            <ul>
              <li>Abbiamo disegnato con l'Ipad l'albero</li>
              <li>Successivamente l'abbiamo esportato in formato png</li>
              <li>
                Infine tramite l'ausilio di Photoshop abbiamo ritagliato le
                parti bianche per lasciare così solo le parti che ci
                interessavano
              </li>
            </ul>
          </div>
          <div className="col-sm">
            <Image fluid="true" src="/logo512.png" />
          </div>
          <div className="col-sm">
            <h3>Perché abbiamo scelto questo logo</h3>
            <p>
              L'albero rappresenta il percorso di crescita di una persona{" "}
              {
                "(da quando nasciamo - pianta piccola, a quanto arriviamo in età adulta - pianta cresciuta)"
              }
              . Durante il corso delle stagioni l'albero cambia aspetto, come
              noi cambiamo umore.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Quattro;
