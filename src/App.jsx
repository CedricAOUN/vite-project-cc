import { Container, Row, Col } from 'react-bootstrap'
import './App.scss'
import Dish from './components/Dish/Dish'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

function App() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Row>
            <Col md={3} lg><Dish name='Tacos à l’unité' price={3} imgUrl='https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg' /></Col>
            <Col md={3} lg><Dish name='Enchiladas' price={12} imgUrl='https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg' /></Col>
            <Col md={3} lg><Dish name='Mole poblano' price={15} imgUrl='https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg' /></Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App
