import React, {useRef, useState} from "react";
export default function StopWatch(){    
    const ref = useRef(0);
    const [state, setState] = useState('');

    function startFunc(){
    ref.current = setInterval(() => {
                setState(Date.now());
        }, 100)
    }
    return(
        <>
            <h1>{state}</h1>
            <button onClick={startFunc} >start</button>
            <button onClick={() => clearInterval(ref.current)} >stop</button>
        </>
    )
}