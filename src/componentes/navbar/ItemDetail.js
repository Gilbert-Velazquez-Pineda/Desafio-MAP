import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Item from "./Item";
import products from "./productsData"

const ItemDetail = () => {
  
  const [item, setItem] = useState([])
  const { id } = useParams() //traer el id del ItemListContainer


  /* //prueba con json
  const [Test, setTest] = useState([])
   

    useEffect(() => {
        fetch ( 'catalago.json')
        .then (response =>  response.json() )
        .then (data => {
             setTest (data) 
       })
        
    }, [id])

    //se obtienen los datos del json */

  

  useEffect(() => {
    getItem().then( data => {
        ( console.log(data))
        if (data) {
            setItem(data)
        }
    })
  }, [])
  
  // getItem con Promise
  const getItem = () => {
    return new Promise( resolve => {
      setTimeout(() => {
        resolve( products.find( p => p.id == id ) )

      }, 2000);
    })
  }

  return (

    <Item item={item}/>
  )
}
export default ItemDetail