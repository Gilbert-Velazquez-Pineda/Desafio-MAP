const ItemDetail = ( {item: {id, titulo}} ) => {
    return (
      <div className="m-5">
         <h1>{id}</h1>
         <h1>{titulo}</h1>
         
         
      </div>
    )
  }
  export default ItemDetail
  