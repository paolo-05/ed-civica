import { Outlet } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

const Layout = () => {
  return (
    <div style={{}}>
      <Navbar variant="dark" expand="lg" stycky="top">
        <Container>
          <Navbar.Brand href="#" style={{ fontFamily: "Alfa Slab One" }}>
            {"Paura del Cambiamento".toUpperCase()}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/" style={{ color: "var(--main-color)" }}>
                HOME
              </Nav.Link>
              <Nav.Link
                href="/porta-narrativa"
                style={{ color: "var(--main-color)" }}
              >
                PORTA NARRATIVA
              </Nav.Link>
              <Nav.Link href="/citt" style={{ color: "var(--main-color)" }}>
                CITTADINANZA DIGITALE
              </Nav.Link>
              <Nav.Link href="/aforisma" style={{ color: "var(--main-color)" }}>
                AFORISMA
              </Nav.Link>
              <Nav.Link href="/logo" style={{ color: "var(--main-color)" }}>
                LOGO
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
};

export default Layout;
