import { Card, Badge, Button } from "react-bootstrap"
import './dish.scss'
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

function Dish({ name, imgUrl, price, isNew }) {
  const { addToCart } = useContext(CartContext);

  return (
    <Card>
      <Card.Img src={imgUrl} alt={`Image de ${name}`} />
      {isNew && <Badge bg='primary' className='position-absolute top-0 end-0 m-2'>Nouveau</Badge>}
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {price}€
        </Card.Text>
        <Button variant="primary" onClick={addToCart}>Ajouter au panier</Button>
      </Card.Body>
    </Card>
  )
}

export default Dish