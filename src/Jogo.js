import React from 'react'

export default function Jogo(){

	const [forcaImg, setForcaImg] = React.useState(0);

	return(
		<>
			<div className='jogo'>
				<img src = {`./assets/forca${forcaImg}.png`}/>
				<div className='lado-esquerdo'>
					<button className='escolher hover-anim'>Escolher Palavra</button>
					<div className='palavra'>_ _ _ _ _ _ _ _ _</div>
				</div>
			</div>
		</>
	)
}