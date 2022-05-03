import { useEffect, useState } from "react";

const CountriesContainer = () => {

    const countriesList = ["mexico", "argentina", "autralia", "colombia", "peru", "costa rica", "venezuela"]

    const [countries, setCountries] = useState ([])

    useEffect(() => {
        console.log("semonton el componenete");
        console.log("listade paises", countriesList);

        const promises = new Promise( (resolve, reject) => {
            const rand = Math.random() 

            console.log("numero random", rand);

            setTimeout( () => {

                if (rand >= 0.5) {
                    resolve(countriesList)
                } else {
                    reject("promesa rejected")
                }
            }, 5000)

        })
        
        promises
            .then( (result) => {
                console.log("la promesa fue saisfecha",  result);
                setCountries(result)
            })
            .catch( (err) => {
                console.log("la promesa fue rejected", err);
            })

            console.log("se completo la ejecucion del useEfect");
    }, [])

    return (
        <div class="border-solid border-current border-2" >
            <h1>CountriesContainer</h1>
            {countries.map( (c, i) => <li key={i}>{c}</li> )}
        </div>
    
    )
}

export default CountriesContainer