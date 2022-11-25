import React from 'react'

export default function Jogo(props){

	return(
		<>
			<div className='jogo'>
				<img src = {`./assets/forca${props.forcaImg}.png`}/>
				<div className='lado-esquerdo'>
					<button className='escolher hover-anim' onClick={props.escolherPalavra}>Escolher Palavra</button>
					<div className={props.classe}>{props.palavraEncripted}</div>
				</div>
			</div>
		</>
	)
}