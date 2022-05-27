import { Outlet, Link } from "react-router-dom";
import Button from "react-bootstrap/Button"


const Layout = () => {
  return (
    <div>
          <nav className="navbar navbar-dark navbar-expand-lg bg-dark" style={{
            color: "var(--main-color)",
            borderTopWidth: 6,
            borderTopStyle: "solid",
            borderColor: "var(--main-color)",
            background: "#23272a",
          }}>
        <div className="container-fluid">
            <Link className="navbar-brand" to="#"  style={{color : "var(--main-color)", fontFamily: "Alfa Slab One"}}>Paura del cambiamento</Link>
            <Button className="navbar-toggler"  data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </Button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/porta-narrativa">Porta Narrativa</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/citt">Cittadinanza Digitale</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/aforisma">Aforisma</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/logo">Logo</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
      <Outlet />
    </div>
  )
};

export default Layout;