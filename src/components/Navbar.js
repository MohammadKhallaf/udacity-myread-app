import { Nav, Navbar as BNavbar, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <BNavbar bg="dark" variant="dark">
        <Container fluid className="mx-3">
          <BNavbar.Brand href="#">My Book Shelf</BNavbar.Brand>
          <Nav className="ms-auto ">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/search" className="nav-link">
              Search
            </NavLink>
          </Nav>
        </Container>
      </BNavbar>
    </header>
  );
};

export default Navbar;
