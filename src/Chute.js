import React from 'react'

export default function Chute(props){

    return(
        <div className="chute">
            <span className="texto">
                Já sei a palavra!
            </span>
            <input className='input' value={props.valor.toLowerCase()} onChange={(e)=>props.changeValue(e.target.value)}/>
            <button className="letras hover-anim chutar" onClick={props.funcaoChute}>Chutar</button>
        </div>
    )
}