import { Nav, Navbar, Container } from "react-bootstrap"
import './header.scss'
import logo from '../../assets/logo.png'

function Header({ cartCount }) {
  return (
    <>
      <header className="bg-body-tertiary">
        <Container>
          <Navbar expand="lg">
            <Navbar.Brand href="/"><img src={logo} alt='site logo' /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/cart">Panier: {cartCount}</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </header>
    </>
  )
}

export default Header