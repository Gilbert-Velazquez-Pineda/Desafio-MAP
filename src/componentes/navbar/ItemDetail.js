import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Item from "./Item"

const ItemDetail = () => {
  
  const [char, setChar] = useState({})
  const { id } = useParams()
  
  

  useEffect(() => {
    
    fetch('catalago.json')
      .then( res => res.json() )
      .then( data => {
        setChar(data)
      })
  }, [id])

 
  console.log(char);
  
  

  return (
    <Item item={char}/>
  )
  
}
export default ItemDetail