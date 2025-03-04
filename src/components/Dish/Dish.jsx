import { Card, Badge, Button } from "react-bootstrap"
import './dish.scss'

function Dish({ name, imgUrl, price, isNew }) {
  const handleClick = (name) => {
    alert(`Le plat ${name} est maintenant dans votre panier`);
  }

  return (
    <Card>
      <Card.Img src={imgUrl} alt={`Image de ${name}`} />
      {isNew && <Badge bg='primary' className='position-absolute top-0 end-0 m-2'>Nouveau</Badge>}
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {price}€
        </Card.Text>
        <Button variant="primary" onClick={() => handleClick(name)}>Ajouter au panier</Button>
      </Card.Body>
    </Card>
  )
}

export default Dish