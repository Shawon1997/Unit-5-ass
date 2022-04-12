import { useState,useEffect } from 'react'
export const Todos=()=>{
    const [todos,Todos]=useState([])
    const [text,setTex]=useState([])
    //console.log(todos)
    useEffect(()=>{
getdata()
    },[])
    const getdata=async()=>{
        const data=await fetch("http://localhost:3004/user").then((d)=>d.json())
            Todos(data) 
            console.log(data)      
    }
    return <div>
        <input onChange={(e)=>setTex(e.target.value)} type="text" placeholder="Enter your todos"></input>
        <button onClick={()=>{
const payload={
    name:text,
    status:false
};
fetch("http://localhost:3004/user",
{method: "POST",
headers:{
    "content-type":"application/json"
},
body:JSON.stringify(payload)
}).then(()=>getdata())
        }}>Add this</button>
        {todos.map((e)=>(
            <h4 className='todo'>{e.name}</h4>
        ))}
    </div>
}