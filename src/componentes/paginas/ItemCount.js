import { useState } from 'react';
import { Button } from 'react-bootstrap';



function ItemCount ({stock}) {
    console.log(stock);
    const [count, setCount,] = useState (1)
    

    return (
        <>
        <div class="flex items-stretch">
        <button className="btn btn-dark mx-3" onClick={() => setCount(count + 1)} disabled={count === stock}>+</button>
        <h5 className='py-1'> Cantidad: {count} </h5>
        <button className="btn btn-dark mx-3"  onClick={() => setCount(count - 1)} disabled={count === 0}>-</button>
       </div>
        
       <div class="flex items-center">
       <Button className="btn btn-primary mx-3 my-2" href='CartWidget'  disabled={count === 0}>Comprar</Button>
       <button className="btn btn-danger mx-3 my-2" onClick={() => setCount(0)}>Limpiar</button>
       </div>
        </>
    );


}

export default ItemCount;