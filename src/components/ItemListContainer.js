import ItemCount from "./ItemCount"
import ItemList from "./ItemList"

const ItemListContainer = (props) => {
  
  // const onAdd = (count) => {
  //   console.log(`agregaste ${count} productos al carrito `);
  // }
  return (
    <div class="border-solid border-current border-2 bg-red">
      <div>{props.greeting}</div> 
      {/* <ItemCount stock = {5} initial = {1} onAdd = {onAdd} /> */}
      <ItemList/>
    </div>
  )
}

export default ItemListContainer