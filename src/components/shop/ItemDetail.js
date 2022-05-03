import ItemCount from "../ItemCount";

const ItemDetail = () => {

    const [cond, setCond] = useState(false)

    const onAdd = () => {
        console.log("se agrego");
    }

    return (
    <div>
        {cond ? <strong>verdaero</strong> : <strong>falso</strong>}
        {cond && <strong>se muestra</strong>}
        {!cond && <strong>se muestra</strong>}
        <ItemCount onAdd={onAdd}/>
    </div>
  )
}

export default ItemDetail