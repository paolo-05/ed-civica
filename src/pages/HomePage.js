import Footer from "../components/Footer";
import { Image } from "react-bootstrap";

const Home = () => {
  document.title = "Paura del Cambiamento - Home";
  return (
    <div>
      <header>
        <h1>LA PAURA DEL CAMBIAMENTO</h1>
      </header>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <Image
              style={{ borderRadius: "10px" }}
              fluid="true"
              src="./assets/not-changing.jpg"
              className="img-responsive"
              alt="Not changing"
            />
          </div>
          <div className="col-sm">
            <p>
              In Breve: La metathesiofobia, o più comunemente chiamata dagli
              esperti “paura del nuovo”, indica un estremo terrore per i
              cambiamenti. Questa diffusa fobia spinge i metathesiofobici ad
              evitare categoricamente tutto ciò che possa rappresentare una
              scelta o un cambiamento nella vita quotidiana.
            </p>
          </div>
        </div>
      </div>
      <header>
        <h1>{"Il cambiamento secondo Aristotele".toUpperCase()}</h1>
      </header>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <p>
              Uno dei più grandi filosofi e scienziati greci sosteneva che il
              movimento è la pura rappresentazione della vita e che non possa
              esserci uno sviluppo senza di esso. Qualunque corpo esistente è in
              continuo cambiamento senza alcuna esclusione. Per far sì che si
              abbia un adeguato sviluppo bisogna comprendere il cambiamento come
              parte naturale di noi stessi e di ciò che ci circonda. Non
              affrontare le sfide della vita con le scelte annesse
              significherebbe non muoversi, rimanere immobili, non mutare. Il
              non mutamento non può portare ad uno sviluppo, che tratti di un
              corpo celeste, un essere vivente o il pensiero stesso. Ogni
              individuo presto o tardi che sia si ritroverà ad affrontare una
              scelta e quindi un cambiamento, questa fase della vita è
              indiscutibile tanto quando indispensabile per lo sviluppo naturale
              delle cose e non permetterlo sarebbe non permettere alla vita
              stessa di procedere.
            </p>
          </div>
          <div className="col-sm">
            <div className="img-container">
              <Image
                style={{ borderRadius: "10px" }}
                fluid="true"
                src="https://www.thedifferentgroup.com/wp-content/uploads/2020/12/joshua-hoehne-rIUx_Q9_axw-unsplash_Fotor.jpg"
                alt="trust"
                className="img-responsive"
              />
            </div>
          </div>
        </div>
      </div>
      <header>
        <h1>{"Cosa ci spinge a cambiare".toUpperCase()}</h1>
      </header>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="img-container">
              <Image
                style={{ borderRadius: "10px" }}
                fluid="true"
                src="https://www.thedifferentgroup.com/wp-content/uploads/2020/12/change-generic-1_Fotor.jpg"
                alt="trust"
                className="img-responsive"
              />
            </div>
          </div>
          <div className="col-sm">
            <p>
              Uno dei primi elementi che influisce sull'origine di questa fobia
              è l'autostima. Con questo termine si indica l'agglomerato
              complessivo dei giudizi che abbiamo di noi stessi. Il livello di
              autostima di un individuo è fondamentale perchè determina la
              percezione che esso avrà della scelta incombente, e quindi, del
              risultato finale. Gli individui con una bassa autostima si
              percepiscono come scarsi nell'affrontare anche le scelte meno
              complicate, portandoli ad affrontare le sfide e le decisioni con
              pessimismo. La correlazione tra cambiamento e scelta è pressochè
              nulla, poichè da ogni scelta deriva un cambiamento, dunque, è il
              soggetto stesso così facendo ad auto-precludersi delle possibilità
              di miglioramento. Un'altra importante causa è il timore di dover
              “intraprendere una strada ignota” abbandonando quella che si
              riconosce come sicura per una nuova del quale si sa poco o niente,
              abbandonando così facendo quella che potrebbe essere considerata
              una parte del proprio ego.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
