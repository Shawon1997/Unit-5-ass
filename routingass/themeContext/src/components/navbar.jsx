import { ThemeContext } from "../context/themecontext"
import {useContext} from "react"
export const Navbar=()=>{
    const {istheme,handlechange}=useContext(ThemeContext)
    //const {theme,handlechange}=useContext(ThemeContext)
    return <div style={{background:{istheme?"black":"red"}}}>
        <button onClick={()=>{
            handlechange(true)
            //console.log(istheme)
        }}>Change theme</button>
    </div>
}