const Footer = () => {
  return (
    <div className="footer">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="var(--secondary)"
          fillOpacity="1"
          d="M0,160L48,154.7C96,149,192,139,288,154.7C384,171,480,213,576,218.7C672,224,768,192,864,181.3C960,171,1056,181,1152,192C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <div
        style={{
          color: "#000",
          background: "var(--main-color)",
          textAlign: "center",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-7">
              <div
                className="card"
                style={{
                  background: "var(--main-color)",
                  borderColor: "var(--main-color)",
                }}
              >
                <div className="card-body">
                  <a href="#top">
                    <h2
                      style={{
                        fontFamily: "Alfa Slab One",
                        color: "var(--bluerde)",
                      }}
                    >
                      PAURA DEL CAMBIAMENTO
                    </h2>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div
                className="card"
                style={{
                  background: "var(--main-color)",
                  borderColor: "var(--main-color)",
                }}
              >
                <div className="card-body">
                  <h4>Links utili:</h4>
                  <ul className="senza">
                    <li>
                      <a href="/divisione-lav">
                        🛠️{" | "} Divisione del lavoro
                      </a>
                    </li>
                    <li>
                      <a href="https://www.galileicrema.edu.it/">
                        📇 | Realizzato in I.I.S. Galileo Galilei
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <h6 style={{ textAlign: "center", color: "#000" }}>
            designed by Paolo Bianchessi with{" "}
            <i className="bx bxs-heart" style={{ color: "#ff0000" }}></i>
          </h6>
          <br /> <br /> <br /> <br /> <br />
        </div>
      </div>
    </div>
  );
};
export default Footer;
