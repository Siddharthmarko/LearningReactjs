import React , {useState} from "react"
import Column from "./column"
import { v4 as uuidv4 } from 'uuid';
let obj =  [
    {
        column: 'Pahla',
        id: crypto.randomUUID(),
        boxes: [{ id: crypto.randomUUID(), box: 'pahla box' }, { id: crypto.randomUUID(), box: 'DUSRA box' } ]
    },
    {
        column: 'DUSRA',
        id: crypto.randomUUID(),
        boxes: [{ box: 'CHOUTHA box' }, { box: 'THEESRA box'} ]

    },
]
export default function BoardView(){  
    const [ele, setEle] = useState(null);

    let data = obj.map((e) => {
        return <Column set={setEle} ele={ele} key={e.id} id={e.id} data={e} ></Column>
    }) 
    return (<>
        <div>
            <h1 className="text-center py-3 text-lg" >Board view</h1>
        </div>
        <div className="w-screen h-screen px-6 bg-white border border-black flex-row gap-9 justify-start items-start inline-flex">
          {data}
        </div>
    </>)
}