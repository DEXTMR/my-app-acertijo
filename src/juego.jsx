import React from "react";

function Juego(props){
    // creamos variables para almacenar numero del usuario y numero elejido por la maquina
    let [numeroUsuario,setNumeroUsuario]= React.useState(0);
    let [numeroMaquina,setNumeroMaquina]=React.useState(Math.floor(Math.random() * props.limite)+1);
    
    function comprobarNumeroUsuario (evento){
            setNumeroUsuario(evento.target.value);
    }
    function comprobarNumeroMaquina(){
          if(numeroUsuario==numeroMaquina){
            alert("Adivinaste!!");
          }else{
            alert("Fallaste, la respuesta era "+numeroMaquina)
          }
          setNumeroMaquina(Math.floor(Math.random()* props.limite)+1);
    }
    return(
        <div>
            <p>Elije un numero del 1 al 10</p>
            <input type="number" min={1} max={10}
            onChange={comprobarNumeroUsuario} placeholder="Ingresa tu respuesta"></input>
            <br/>
            <button onClick={comprobarNumeroMaquina}>Adivinar</button>
        </div>
    );
}

export default Juego;