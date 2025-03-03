function Dish({ name, imgUrl, price }) {
  return (
    <div>
      <h3>{name}</h3>
      <img src={imgUrl} alt={`Image de ${name}`} />
      <p>Prix: {price}€</p>
    </div>
  )
}

export default Dish