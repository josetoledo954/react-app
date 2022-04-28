import { useEffect, useState } from "react"
import StarshipDetail from "./StarshipDetail"

const StarshipsContainer = () => {

    const [starchips, setstarchips] = useState([])

    useEffect(() => {
        getStarships()
    }, [])
    
    const getStarships = () => {
        const URL = "https://swapi.dev/api/starships"

        fetch(URL)
            .then(res => res.json() )
            .then(data => {
                // console.log(data.results);
                setstarchips(data.results)
                // data.results.forEach(e => {
                //     console.log(e.name);
                // });
            } )
        }

    return (
        <div>
            {starchips.map ( s => <StarshipDetail key = {s.url} starship={s}/> )}
        </div>
    )
}
export default StarshipsContainer