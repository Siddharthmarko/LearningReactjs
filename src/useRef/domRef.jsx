import { useRef } from "react"

export default function DomRef() {
    let inputRef = useRef(null);
    
    function handleclick(){
        // matlb ref us input refernce save kiya
        console.log(inputRef);
        inputRef.current.focus();
    }
    return(
        <>
            <input type="text" ref={inputRef} />
            <button onClick={() => handleclick()} >btn</button>
        </>
    )
}