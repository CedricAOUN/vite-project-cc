import { Container, Row, Col } from 'react-bootstrap'
import './App.scss'
import Dish from './components/Dish/Dish'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

const DISHES = [
  { name: 'Tacos à l’unité', price: 3, imgUrl: 'https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg', isNew: true, stock: 12 },
  { name: 'Enchiladas', price: 12, imgUrl: 'https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg', stock: 0 },
  { name: 'Mole poblano', price: 15, imgUrl: 'https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg', stock: 5 },
];

const dishesInStock = DISHES.filter(dish => dish.stock > 0);

function App() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Row>
            {dishesInStock.map((dish, index) => {
                return (
                <Col md={3} lg key={index}>
                  <Dish name={dish.name} price={dish.price} imgUrl={dish.imgUrl} isNew={dish.isNew}/>
                </Col>
                )
              })}
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App
