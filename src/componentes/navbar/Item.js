import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from '../paginas/ItemCount';



const ItemDetail = ( {item: {id, titulo, imagen, precio, stock}} ) => {
  
    return (
      <>
      <div className="grid h-screen place-items-center ">  
      <Card style={{ width: '18rem'}} >
        <Card.Img variant="top" src={imagen} />
        <Card.Body>
          <Card.Title className='text-center' >{titulo}</Card.Title>
          <Card.Body className='text-center'><strong>Precio: ${precio} MXN</strong></Card.Body>
          <ItemCount stock={stock}/>
          <Card.Text>
             Stock: {stock} pzas
          </Card.Text>
           <Button href='ItemListContainer' variant="secondary" className='absolute bottom-4 right-8 h-10 w-20'>Atras</Button>
        </Card.Body>
    </Card>
    
    </div>
    </>
    )
  }
  export default ItemDetail
  