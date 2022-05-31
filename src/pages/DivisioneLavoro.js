import Footer from "../components/Footer";

const Lavoro = () => {
  document.title = "Paura del Cambiamento - Divisione del lavoro";
  return (
    <div style={{ color: "var(--main-color)" }}>
      <h1 className="top">{"Divisione del lavoro".toUpperCase()}</h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col" className="tr">
              Cosa ha fatto
            </th>
            <th scope="col">
              <a href="/" className="tr">
                Home
              </a>
            </th>
            <th scope="col">
              <a href="/porta-narrativa" className="tr">
                Porta Narrativa
              </a>
            </th>
            <th scope="col">
              <a href="/citt" className="tr">
                Cittadinanza Digitale
              </a>
            </th>
            <th scope="col">
              <a href="/aforisma" className="tr">
                Aforisma
              </a>
            </th>
            <th scope="col">
              <a href="/logo" className="tr">
                Logo
              </a>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Mattia Belloni</th>
            <td>No</td>
            <td>No</td>
            <td>Si</td>
            <td>No</td>
            <td>Si</td>
          </tr>
          <tr>
            <th scope="row">Paolo Bianchessi{" (Group Manager)"}</th>
            <td>Si + stile del sito</td>
            <td>No</td>
            <td>No</td>
            <td>No</td>
            <td>Si</td>
          </tr>
          <tr>
            <th scope="row">Stefano Bona</th>
            <td>Si</td>
            <td>No</td>
            <td>Si</td>
            <td>No</td>
            <td>No</td>
          </tr>
          <tr>
            <th scope="row">Erik Bonazzoli</th>
            <td>No</td>
            <td>Si</td>
            <td>No</td>
            <td>Si</td>
            <td>No</td>
          </tr>
        </tbody>
      </table>
      <div className="container">
        Come si può vedere dalla tabella ognuno di noi ha svolto il proprio
        lavoro e durante le ore di riunione fatte in classe ci siamo scambiati
        opinioni e critiche. Il codice del sito è disponibile{" "}
        <a
          style={{ color: "var(--link)", textDecoration: "underline" }}
          href="https://github.com/paolo-05/ed-civica"
          rel="noreferrer"
          target="_blank"
        >
          qui.
        </a>{" "}
        Per la realizzazione di questo progetto è stata utilizzato il framework
        in javascript{" "}
        <a
          style={{ color: "var(--link)", textDecoration: "underline" }}
          href="https://it.reactjs.org/"
          rel="noreferrer"
          target="_blank"
        >
          React
        </a>
        , che consente il routing fra le pagine e{" "}
        <a
          style={{ color: "var(--link)", textDecoration: "underline" }}
          href="https://getbootstrap.com/"
          rel="noreferrer"
          target="_blank"
        >
          Boostrap
        </a>
        , che invece ci ha consentito di creare una pagina completamente
        responsive senza partire da zero. Il design della pagina deriva da una
        serie di scelte per ottimizzare la leggibilità e per coinvolgere
        graficamente l'utente finale, la scelta dello sfondo, dei font, delle
        immagini e dei colori della barra di scorrimento (nascosta), a nostro
        parere, rendono più immersivo il sito che altrimenti sarebbe stato
        piatto. Il testo che si scrive da solo nella pagina dell'
        <a
          style={{ color: "var(--link)", textDecoration: "underline" }}
          href="/"
          rel="noreferrer"
          target="_blank"
        >
          aforisma
        </a>
        , è stato creato tramite delle funzioni javascript. Sono presenti
        inoltre degli svg (immagini vettoriali), ad esempio quello a fondo
        pagina, che a loro volta danno un senso di tridimensionalità che senza
        di esssa, magari usando un tag <code>{" <hr /> "}</code>non si avrebbe.
        Il sito è stato caricato su heroku, un servizio gratuito abbastanza
        decente che consente un limitato traffico, ma per ciò che interessa a
        noi basta e avanza.
      </div>
      <Footer />
    </div>
  );
};

export default Lavoro;
