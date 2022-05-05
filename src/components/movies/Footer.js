import { useContext } from "react"
import { DarkModeContext } from "../../context/darkModeContext"

const Footer = () => {

const darkMode = useContext(DarkModeContext)

  return (
      <>
        <div>Footer</div>
        <strong> DarkMode: {darkMode ? "TRUE" : "FALSE" }</strong>
      </>
  )
}

export default Footer