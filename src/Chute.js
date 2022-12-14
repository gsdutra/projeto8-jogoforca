import React from 'react'

export default function Chute(props){

    return(
        <div className="chute">
            <span className="texto">
                Já sei a palavra!
            </span>
            
            <input className='input' value={props.valor.toLowerCase()} onChange={(e)=>props.changeValue(e.target.value)} disabled={props.disabled} data-test="guess-input"/>

            <button className="letras hover-anim chutar" onClick={props.funcaoChute} disabled={props.disabled} data-test="guess-button">Chutar</button>
        </div>
    )
}