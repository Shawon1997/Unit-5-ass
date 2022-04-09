//import logo from "./logo.svg";
import "./App.css";

function App() {

    let arr=[{
        heading:"Mobile Operating System",
    list:["Android","Blackberry","iphone","windows Phone"]},{
        heading:"Mobile Manufactures",
list:["samsung","HTC","Micromax","Apple"]
    }]
    return <div className="App">{
        
        arr.map((el)=>{
            return <Check el={el}>

            </Check>
       
    })}
    </div>
        }
      
function Check({el})
{
    return <div>
        <h1>
            {el.heading}
        </h1>
        <ul>{el.list.map((elm)=>{
            return <li className="App1">{elm}</li>
        })}</ul>
    </div>
}
    export default App;