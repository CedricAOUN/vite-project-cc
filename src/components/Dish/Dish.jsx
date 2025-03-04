import { Card } from "react-bootstrap"
import './dish.scss'

function Dish({ name, imgUrl, price }) {
  return (
    <Card>
      <Card.Img src={imgUrl} alt={`Image de ${name}`} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {price}€
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Dish