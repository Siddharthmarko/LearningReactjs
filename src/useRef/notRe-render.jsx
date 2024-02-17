import React, { useRef } from "react";
export default function NoRender() {
    // Its effect render while change its value like state
    // but when component render by anyreason you can see that update value

    const ref = useRef(0);
    function handleClick() {
        ref.current = ref.current + 1;
    }
    return (
        <>
            <button onClick={handleClick} >click me {ref.current}</button>
        </>
    )
}