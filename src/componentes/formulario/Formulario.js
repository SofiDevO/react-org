import { useState } from "react";
import "./Formulario.css";
import CampoTexto from "../campoTexto";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";
const Formulario = () => {
    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")


    const botonEvent = (e)=>{
        e.preventDefault();
        console.log('Manejar envio')
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        console.log(datosAEnviar);
    }


	return <section className="formulario">
        <form onSubmit={botonEvent}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto 
                titulo="Nombre" 
                placeholder="Ingresar Nombre"
                required 
                valor={nombre}
                setValor={actualizarNombre}                 
            />
            <CampoTexto 
                titulo="Puesto" 
                placeholder="Ingresar puesto"
                required 
                valor={puesto} 
                setValor={actualizarPuesto}
            />
            <CampoTexto 
                titulo="Foto"  
                placeholder="Ingresar enlace de foto" 
                required 
                valor={foto} 
                setValor={actualizarFoto}
            />
            <ListaOpciones 
                valor={equipo}
                actualizarEquipo={actualizarEquipo}
            />
            <Boton>
                Crear
            </Boton>
        </form>
    </section>;
};

export default Formulario;
