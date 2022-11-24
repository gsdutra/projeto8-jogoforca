import React from 'react'

export default function Chute(){

    const [inputValue, setInput] = React.useState("");

    function chutar(){
        alert(inputValue);
    }

    return(
        <div className="chute">
            <span className="texto">
                Já sei a palavra!
            </span>
            <input className='input' value={inputValue} onChange={(e)=>setInput(e.target.value)}/>
            <button className="letras hover-anim chutar" onClick={chutar}>Chutar</button>
        </div>
    )
}