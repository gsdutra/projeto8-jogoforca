export default function Letras(props){
    return(
        <div className={props.classe} onClick={()=>props.clicked(props.letra)} data-test="letter">{props.letra.toLocaleUpperCase()}</div>
    )
}