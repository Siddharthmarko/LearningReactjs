import React, { useRef } from "react"
import { useState } from "react"

export  function useThis(newVar) {

    return { current: newVar }
}

// change obj and you wil see 
// ref maintain that it will stay changle 

export default function FuncOne(){
    const [next, setNext] = useState();
    let obj = useThis('store pahla');
    // let obj = useRef('in the ref');
    // console.log(newObj)
    console.log('chane in oen ', obj);
    return<>
        <button onClick={() => setNext('two')} >To Second</button>
        <button onClick={() => setNext('three')} >To Second</button>
        {(next === 'two') ? <FuncTwo data={obj} />: ''}
        {(next === 'three') ? <FuncThree data={obj} />: ''}
    </>
}

export function FuncTwo({data}){
    // let newObj = useRef();
    // console.log(newObj)
    data.current = 'in second';
    return <>
        <h1>Second</h1>
    </>
}

export function FuncThree({data}){
    data.current = 'in Thired';
    // let newObj = useRef();
    // console.log(newObj)
    return <>
        <h1>Three</h1>
    </>
}