import { Card, Badge } from "react-bootstrap"
import './dish.scss'

function Dish({ name, imgUrl, price, isNew }) {
  return (
    <Card>
      <Card.Img src={imgUrl} alt={`Image de ${name}`} />
      {isNew && <Badge bg='primary' className='position-absolute top-0 end-0 m-2'>Nouveau</Badge>}
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