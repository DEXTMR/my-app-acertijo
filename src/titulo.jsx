import Imagen from './pregunta.png';


function Titulo(){
    return(
        <div>
            <h1>EL ACERTIJO</h1>
            <hr/>
             <img src={Imagen} alt="Logo" id='logo' />
        </div>
    )
}
export default Titulo;