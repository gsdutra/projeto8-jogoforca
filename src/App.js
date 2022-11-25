import Jogo from "./Jogo.js"
import Letras from "./Letras.js"
import Chute from "./Chute.js"

export default function App(){

	const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

	function teste(){
		alert(1);
	}

	return(
		<>
			<Jogo/>
			<div className="bottom">
				<div className="letras-container">
					{alfabeto.map((element)=>
						<Letras letra={element.toLocaleUpperCase()}/>
						)
					}
				</div>
				<Chute/>
			</div>
		</>
	)
}