export default function Letras(props){
    return(
        <div className={props.classe} onClick={()=>props.clicked(props.letra)} disabled={props.disabled} data-test="letter">{props.letra.toLocaleUpperCase()}</div>
    )
}