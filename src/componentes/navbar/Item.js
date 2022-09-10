import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemDetail = ( {item: {id, titulo, imagen, precio, descripcion}} ) => {
    return (
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imagen} />
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Body><strong>${precio} MXN</strong></Card.Body>
        <Card.Text>
          {descripcion}
        </Card.Text>
        <Button variant="primary">Comprar</Button>  <Button href='/Catalago' variant="secondary">Atras</Button>
      </Card.Body>
    </Card>
    )
  }
  export default ItemDetail
  