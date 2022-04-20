//import "./button.css"
import styled from "styled-components"
//export const Button=({children,onClick})=>{
//    return <div>
//        <button onClick={onClick} className="child">{children}</button>
//    </div>
//}
const Button=styled.button `
background-color: ${(props)=>props.bg=="true"?"red":"green"};
color: ${(props)=>props.color==="true"?"yellow":"white"};border: none;
margin: 10px;padding: 10px;
border-radius: ${(props)=>props.color==="true" || props.bg==="true"?"10px":"0px"};
&:hover{background-color:rgb(06, 12, 24);
zoom:110%;
box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;}
`

export { Button }