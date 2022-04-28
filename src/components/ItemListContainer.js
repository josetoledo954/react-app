import ItemCount from "./ItemCount"
import ItemList from "./ItemList"

const ItemListContainer = (props) => {
  return (
    <div class="border-solid border-current border-2 bg-red">
      <div>{props.greeting}</div> 
      <ItemCount stock = "5" />
      <ItemList/>
    </div>
  )
}

export default ItemListContainer