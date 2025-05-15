import React,{useState} from 'react';

export default function CardTwelve(){

    let idx = 1;

    const [idxState,setidxState] = useState(idx);
    

    const handleClick = () =>{
       
        setidxState(idxState + 1);
    }

    return(
        <div>
            <p>{idxState}</p>
            <button onClick={handleClick}>Come Click</button>
        </div>
    )
}