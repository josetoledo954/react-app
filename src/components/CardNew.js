const CardNew = (props) => {
  return (
    <>
        <div>Componente CardNew</div>
        {props.otroComponente({nombre : "nombre", edad : "edad"})}
    </>
  )
}
export default CardNew