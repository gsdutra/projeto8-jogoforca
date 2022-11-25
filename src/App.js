import React from "react";
import Jogo from "./Jogo.js"
import Letras from "./Letras.js"
import Chute from "./Chute.js"
import palavras from './palavras';

export default function App(){

	const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

	const [forcaImg, setForcaImg] = React.useState(0);
	const [palavraArray, setPalavraArray] = React.useState([]);
	const [palavraEncripted, setEncripted] = React.useState([]);
	const [letrasSelecionadas, setLetrasSel] = React.useState(alfabeto);
	const [winLoseState, setWinLose] = React.useState("palavra");

	function noFunction(){}

	function escolherPalavra(){
		setLetrasSel([]);
		setForcaImg(0);
		setWinLose("palavra");
		const palavraSecreta = palavras[Math.floor(Math.random()*palavras.length)];
		const arrayCrypto = Array(palavraSecreta.length);
		arrayCrypto.fill('_');
		setEncripted(arrayCrypto);
		setPalavraArray(palavraSecreta.split(''));
		console.log(palavraSecreta);
	}

	function chutarLetra(lt){

		const tempArray = [...letrasSelecionadas];
		tempArray.push(lt);
		setLetrasSel(tempArray);

		if (palavraArray.includes(lt)){
			const newEncriptedArray = [...palavraEncripted];
			for (let i=0 ; i<palavraArray.length; i++){
				if (palavraArray[i] === lt){
					newEncriptedArray[i] = lt.toLocaleUpperCase();
				}
			}
			setEncripted(newEncriptedArray);

			checkWinGame(newEncriptedArray);
		}
		else{
			const sum = forcaImg + 1;
			setForcaImg(sum);
			checkLoseGame(sum);
		}

	}

	function checkWinGame(arr){
		if (!arr.includes('_') && arr!==[]){
			setWinLose("palavra green");
			setLetrasSel(alfabeto);
		}
	}

	function checkLoseGame(n){
		if (n===6){
			setLetrasSel(alfabeto);
			setEncripted(palavraArray);
			setWinLose("palavra red");
		}
	}

	return(
		<>
			<Jogo
				forcaImg = {forcaImg}
				palavraEncripted = {palavraEncripted}
				classe = {winLoseState}
				escolherPalavra = {escolherPalavra}
			/>
			<div className="bottom">
				<div className="letras-container">
					{alfabeto.map((element)=>
						<Letras
							classe = {!letrasSelecionadas.includes(element)?"letras hover-anim":"letras letra-clicada"}
							letra={element}
							clicked={!letrasSelecionadas.includes(element)?chutarLetra:noFunction}
						/>
						)
					}
				</div>
				<Chute/>
			</div>
		</>
	)
}