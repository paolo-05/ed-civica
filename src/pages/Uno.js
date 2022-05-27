import Footer from "../components/Footer";

const Uno = () => {
  document.title = "Paura del Cambiamento - Porta Narrativa";
  return (
    <>
      <header>
        <h1 className="grigio">Porta Narrativa</h1>
      </header>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/51RR6UyJQpL._SY458_BO1,204,203,200_.jpg"
              style={{ borderRadius: 30 }}
            />
          </div>
          <div className="col-sm">
            <h2>Trama</h2>
            <p>
              un bambino di un piccolo villaggio considerava suoi amici tutti
              gli animali. Un giorno giunse sul posto un circo gigantesco.
              Essendo molto curioso, il ragazzo implorò la sua famiglia di
              andare a vedere lo spettacolo. Ciò che lo colpì maggiormente fu la
              visione di un elefante. A differenza degli altri animali
              quest'ultimo non era tenuto in gabbia, bensì veniva semplicemente
              incatenato ad un palo. Il bambino non riusciva a comprendere il
              motivo per cui l'elefante non si fosse ancora liberato. Dopo
              numerosi dubbi e perplessità giunse alla conclusione che la
              creatura non fosse ancora scappata, in quanto essa stessa aveva
              rinunciato alla fuga a causa dei continui fallimenti passati.
            </p>
          </div>
          <h2>Significato Metaforico</h2>
          <div>
            <p>
              la figura dell'elefante incatenato viene vista come i limiti che
              una persona si pone a causa delle continue frustrazioni accumulate
              nel corso della sua vita. Infatti, tenendo in considerazione tali
              eventi negativi, un individuo smette in un qualunque suo intento
              proprio a causa dei fallimenti passati. Con questo racconto lo
              scrittore vuole far prendere coscienza del fatto che gli ostacoli
              che si incontrano quotidianamente non devono essere motivo di
              rinuncia, bensì un punto di slancio per potersi migliorare.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Uno;
