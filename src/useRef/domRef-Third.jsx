import { forwardRef, useRef } from "react";

export default function DomRefThird(){
    let ref = useRef(null);
    function handleClick(){
        console.log(ref);
        ref.current.focus();
    }
    return (
        <>
            {/* <ItWillFail ref={ref} /> */}
            <MyInput ref={ref}/>
            <button onClick={() => handleClick()} >button</button>
        </>
    )
}
function passToForwardRef(props, ref){
    return (
    <>
        <input {...props} ref={ref}/>
    </>)
}
export const MyInput = forwardRef(passToForwardRef);

export function ItWillFail(props){
    return (
    <>
        <input  {...props}/>
    </>)
}