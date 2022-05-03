import React from 'react'

const Vocales = () => {

    const entrada = (e) =>{
        console.log("se puso input", e.key);
        const vocales = "aeiou"
        if (vocales.search(e.key) !=-1) {
          e.preventDefault();
        }
      }
      

  return (
    <div>
         <input onKeyDown={entrada} type="text" className="border-solid border-current border-2"></input>
    </div>
  )
}

export default Vocales