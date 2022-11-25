export default function Letras(props){
    return(
        <div className={props.classe} onClick={()=>props.clicked(props.letra)} >{props.letra.toLocaleUpperCase()}</div>
    )
}