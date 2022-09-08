const ItemDetail = ( {item: {titulo, precio}} ) => {
    return (
      <div className="m-5">
          <div>{ titulo }</div>
          <div>{ precio }</div>
      </div>
    )
  }
  export default ItemDetail
  