

import "./Formulario.css";
import CampoTexto from "../campoTexto";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";
const Formulario = () => {
    const botonEvent = (e)=>{
        e.preventDefault();
        console.log('Manejar envio', e)
    }
	return <section className="formulario">
        <form onSubmit={botonEvent}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto titulo="Nombre" placeholder="Ingresar Nombre"/>
            <CampoTexto titulo="Puesto" placeholder="Ingresar puesto"/>
            <CampoTexto titulo="Foto"  placeholder="Ingresar enlace de foto"/>
            <ListaOpciones/>
            <Boton>
                Crear
            </Boton>
        </form>
    </section>;
};

export default Formulario;
