import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./Formulario.css";
import Campo from "../campo";
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
            id: uuidv4(),
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
            <Campo 
                titulo="Nombre" 
                placeholder="Ingresar Nombre"
                required 
                valor={nombre}
                setValor={actualizarNombre}                 
            />
            <Campo 
                titulo="Puesto" 
                placeholder="Ingresar puesto"
                required 
                valor={puesto} 
                setValor={actualizarPuesto}
            />
            <Campo 
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
            <Campo 
                titulo="Título" 
                placeholder="Ingresar título"
                required 
                valor={titulo}
                setValor={actualizarTitulo}                 
            />
            <Campo 
                titulo="Color" 
                placeholder="Ingresar el color en Hex"
                required 
                valor={color} 
                setValor={actualizarColor}
               type = {"color"}
            />
            <Boton>
                registrar equipo
            </Boton>
        </form>
    </section>;
};

export default Formulario;
