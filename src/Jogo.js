import React from 'react'
import palavras from './palavras';

export default function Jogo(){

	const [forcaImg, setForcaImg] = React.useState(0);
	const [palavra, setPalavra] = React.useState("");
	const [palavraEncripted, setEncripted] = React.useState([]);

	function escolherPalavra(){
		const palavraSecreta = palavras[Math.floor(Math.random()*palavras.length)];
		setPalavra(palavraSecreta);
		const arrayCrypto = Array(palavraSecreta.length);
		arrayCrypto.fill('_');
		setEncripted(arrayCrypto);
		console.log(palavra);
	}

	return(
		<>
			<div className='jogo'>
				<img src = {`./assets/forca${forcaImg}.png`}/>
				<div className='lado-esquerdo'>
					<button className='escolher hover-anim' onClick={escolherPalavra}>Escolher Palavra</button>
					<div className='palavra'>{palavraEncripted}</div>
				</div>
			</div>
		</>
	)
}