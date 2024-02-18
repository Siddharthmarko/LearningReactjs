import React from "react";

export default function Column({data, set, ele}) {
    function handleDragStart(e) {
        set(e.target);
    }
    
    function handleDragOver(e) {
        e.preventDefault();
    }
    
    function handleDrop(e) {
        e.preventDefault();
        e.target.appendChild(ele);
    }
    let box = (data.boxes.length !== 0) ?
        data.boxes.map((innerData) => {
            return <div
                key={innerData.id}
                id={innerData.id}
                draggable
                onDragStart={(e) => handleDragStart(e)}
                className="w-64 h-24 bg-white border border-black flex-col justify-center items-center gap-2.5 flex"
            >
                <div className="bg-white justify-start items-start gap-2.5 inline-flex">
                    <div className="text-black text-xl font-normal font-['Inter']">{innerData.box}</div>
                </div>
            </div>
        })

        : '';


    return (
        <>
            <div
                key={data.id}
                id={data.id}
                onDrop={(e) => handleDrop(e)}
                onDragOver={(e) => handleDragOver(e)}
                className="h-full pt-5 border flex-col justify-start items-start gap-2.5 flex"
            >
                <div className="pb-8">
                    <div className="w-64 h-12 px-3 border border-black flex-col justify-center items-start gap-2.5 flex">
                        <div className="justify-center items-center gap-2.5 inline-flex">
                            <div className="text-black text-lg font-normal font-['Inter']">{data.column}</div>
                        </div>
                    </div>
                </div>
                {box}
            </div>
            
        </>
    );
}
