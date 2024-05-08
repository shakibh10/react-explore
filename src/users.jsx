import { useEffect, useState } from "react"

export default function Users(){
    const[users,setUsers]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data=>setUsers(data));
    },[])
    return(
        <div className="">
                <h3>Users:{users.length}</h3>
        </div>
    )
}