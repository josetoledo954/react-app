import ItemCount from "./ItemCount"

const ItemListContainer = (props) => {
  return (
    <div class="border-solid border-current border-2 bg-red">
      <div>{props.greeting}</div> 
      <ItemCount stock = "5" />
    </div>
  )
}

export default ItemListContainer