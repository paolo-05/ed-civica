import Footer from "../components/Footer";

const Quattro = () => {
  document.title = "Paura del Cambiamento - Logo";
  return (
    <>
      <h1>Logo</h1>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <img src="logo512.png" alt="logo" style={{ borderRadius: 30 }} />
          </div>
          <div className="col-sm">
            <p>Abbiamo crato questo logo con Photoshop, usando effetti 3D</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Quattro;
