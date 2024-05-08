import { useState } from "react"

export default function Counter(){

    const countHandler=()=>{
        const newCount=count+1;
        setCount(newCount);
    }

    const subHandler=() =>{
        const removeCount=count-1;
        setCount(removeCount);
    }

const[count,setCount] =useState(0);
    return(
        <div className="counter">
               <h3>Counter:{count}</h3>
               <button className="remove1" onClick={countHandler}>Add</button>
               <button className="remove2" onClick={subHandler}>Sub</button>
        </div>
    )
}