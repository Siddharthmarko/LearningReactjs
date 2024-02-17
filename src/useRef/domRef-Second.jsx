import { useRef } from "react";

let arr = [
    'item 1',
    'item 2',
    'item 3',
]

export default function DomRefSecond(){
    let obj = useRef(null);
    function handleClick(id){
        
    }
    return (
        <>
            <button onClick={() => handleClick(0)} ></button>
            <button onClick={() => handleClick(1)} ></button>
            <button onClick={() => handleClick(2)} ></button>
        </>
    )
}