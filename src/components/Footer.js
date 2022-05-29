const Footer = () => {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fillOpacity="0"
          d="M0,160L48,154.7C96,149,192,139,288,154.7C384,171,480,213,576,218.7C672,224,768,192,864,181.3C960,171,1056,181,1152,192C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>

      <div style={{ color: "var(--text-color)" }}>
        <div>
          <div className="container">
            <div className="row">
              <div className="col-sm">
                <h6>
                  Sito web realizzato da Paolo Bianchessi, in collaborazione con
                  Mattia Belloni, Stefano Bona ed Erik Bonazzoli
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
