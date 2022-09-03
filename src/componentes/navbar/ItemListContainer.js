import { useEffect, useState } from "react"

function ItemListContainer() {

    const [items, setItem] = useState([])

    useEffect(() => {
        getChars()
        
    }, [])

    const getChars = () => {
        
        fetch ( 'catalago.json')
         .then (response =>  response.json() )
         .then (data => {
              setItem (data)
               console.log(data);
        })
    }

    return (
        <>
            <div className="text-6xl font-bold text-center ">Catalago</div>
            {items.map ( item => 
              <div key= {item.id}>
                 <h1 className="text-2xl font-bold text-left">{item.titulo}</h1>
                 <div className="text-2xl">Id: {item.id}</div>
                 <img src={item.imagen} width='150' alt='no cargo'/>
                 <h3>{item.precio}</h3>
                 <br/>
              </div> 
            )}
        </>
    )
}
  export default ItemListContainer