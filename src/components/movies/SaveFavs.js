import { useEffect } from "react"
import { useFavContext } from "../../context/favContext"
import FavoritesList from "./FavoritesList"
import {addDoc, collection, doc, getFirestore, updateDoc, writeBatch} from "firebase/firestore"

const SaveFavs = () => {

const {favorites} = useFavContext()

useEffect(() => {
  console.log(favorites);
}, [])


const saveFavs  = async() => { 
  
  const user = {
    name: 'nombre 1',
    phone: '12345',
    email:'asdfg@asdfg.com'
  }

  const favsToSave = {
    user: user,
    favs: favorites,
    total: favorites.length
  }

  // const favsWithoutImg = favorites.map(({id, title}) => ({id, title}))

  console.log(favsToSave);

  const db = getFirestore()
  const favsCollection = collection(db, 'favs')

  const response = await addDoc(favsCollection, favsToSave)
  console.log(response);
  console.log(response.id);



 }

const updateFavs = async () => {
  const idDoc = '7C2B3E337XXkIJjhtN85'

  const db = getFirestore()
  const favsDoc = doc(db, 'favs', idDoc )
  try {
    await updateDoc(favsDoc, {total: 100})
  } catch (error) {
    console.log('verificar');
  }
  const response = await updateDoc(favsDoc, {total: 100})
  console.log(response);
}
 
const batchUpdate = () => {
  const db = getFirestore()
  const batch = writeBatch(db)

  const doc1 = doc(db, 'favs', '1C9du31jOWhdALZkdOWA')
  batch.update(doc1, {total: 50})
  
  const doc2 = doc(db, 'favs', 'COT4g6SOlbyloOS2MtUZ')
  batch.update(doc2, {total: 50})
  
  const doc3 = doc(db, 'favs', 'HuCgmPbeVwr4E7UJvV7I')
  batch.delete(doc3)

  batch.commit()

}

  return (
    <div>
      {favorites.length > 0 ? <FavoritesList/> : 'agregar favoritos' }
      
      <button onClick={saveFavs} className="border-solid border-current border-2">salvar lista de favoritos</button>
      <button onClick={updateFavs} className="border-solid border-current border-2">actualizar lista de favoritos</button>
      <button onClick={batchUpdate} className="border-solid border-current border-2">batch</button>
    </div>
  )
}

export default SaveFavs