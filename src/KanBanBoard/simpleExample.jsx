import React, { useRef, useState } from "react"
const styles = {
    div: {
        margin: '0.5em 0',
        padding: '2em',
    },
    target: {
        border: '1px solid black',
        padding: '0.5rem',
    },
    source: {
        border: '1px solid black',
        padding: '0.5rem',
    },
    dragging: {
        backgroundColor: 'pink',
    },
};
export default function SimpleExample() {
    const [ele, setEle] = useState();

    function handleDragStart(e) {
        console.log('drag start')
        e.dataTransfer.clearData();
        setEle(e.target);
    }
    function handleDragOver(e) {
        console.log("drag over");
        e.preventDefault();
    }
    function handleDragend() { }
    function handleDrop(e) {
        console.log("drop");
        e.preventDefault();
        e.target.appendChild(ele);
    }


    return (
        <>
            <div style={styles.div} >
                <p
                    id="1"
                    onDragStart={(e) => handleDragStart(e)}
                    style={styles.source}
                    draggable
                >
                    Select this element, drag it to the drop zone and then release the selection
                    to move the element. </p>
            </div>
            <div
                onDrop={(e) => handleDrop(e)}
                onDragOver={(e) => handleDragOver(e)}
                style={styles.target}
            >
                Dro zone</div>
        </>
    )
}
