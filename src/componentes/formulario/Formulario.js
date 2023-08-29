import { useState } from "react";
import "./Formulario.css";
import CampoTexto from "../campoTexto";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";
const Formulario = (props) => {
    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")
    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")
    const {registrarColaborador, crearEquipo} =props
    


    const botonEvent = (e)=>{
        e.preventDefault();
        console.log('Manejar envio')
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosAEnviar);
    }

    const manejarNuevoEquipo = (e)=>{
        e.preventDefault()
        crearEquipo({titulo , colorPrimario: color})
    }


	return <section className="formulario">
        <form onSubmit={botonEvent}>
            <h2>Completa el formulario para crear el colaborador.</h2>
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
                equipos={props.equipos}
            />
            <Boton>
                Crear
            </Boton>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Completa el formulario para crear un equipo</h2>
            <CampoTexto 
                titulo="Título" 
                placeholder="Ingresar título"
                required 
                valor={titulo}
                setValor={actualizarTitulo}                 
            />
            <CampoTexto 
                titulo="Color" 
                placeholder="Ingresar el color en Hex"
                required 
                valor={color} 
                setValor={actualizarColor}
            />
            <Boton>
                registrar equipo
            </Boton>
        </form>
    </section>;
};

export default Formulario;
