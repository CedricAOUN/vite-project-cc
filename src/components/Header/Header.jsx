import { Nav, Navbar, Container } from "react-bootstrap"
import './header.scss'

function Header() {
  return (
    <>
      <header className="bg-body-tertiary">
        <Container>
          <Navbar expand="lg">
            <Navbar.Brand href="/"><img src='https://cdn.pixabay.com/photo/2018/03/26/14/18/man-3262834_960_720.png' alt='site logo' /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="/">Home</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </header>
    </>
  )
}

export default Header