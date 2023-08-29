import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./App.css";
import Header from "./componentes/header/Header.js";
import Formulario from "./componentes/formulario/Formulario.js";
import MiOrg from "./componentes/MiOrg";
import Equipo from "./componentes/Equipo";
import Footer from "./componentes/Footer";

function App() {
	const [mostrarFormulario, actualizarMostrar] = useState(false)
	const [colaboradores, actualizarColaboradores] = useState([
		{
		id: uuidv4(),
		equipo:"Front End",
		foto:"https://github.com/SofiDevO.png",
		nombre:"Angela Sofía Osorio",
		puesto: "Beta One"
	},
	{
		id: uuidv4(),
		equipo:"Programación",
		foto:"https://github.com/harlandlohora.png",
		nombre:"Harland Lohora",
		puesto: "Instructor"
	},
	{
		id: uuidv4(),
		equipo:"Data Science",
		foto:"https://github.com/harlandlohora.png",
		nombre:"Harland Lohora",
		puesto: "Instructor"
	},
	{
		id: uuidv4(),
		equipo:"Móvil",
		foto:"https://github.com/harlandlohora.png",
		nombre:"Harland Lohora",
		puesto: "Instructor"
	},
	{
		id: uuidv4(),
		equipo:"Devops",
		foto:"https://github.com/harlandlohora.png",
		nombre:"Harland Lohora",
		puesto: "Instructor"
	},
	{
		id: uuidv4(),
		equipo:"Ux y Diseño",
		foto:"https://github.com/harlandlohora.png",
		nombre:"Harland Lohora",
		puesto: "Instructor"
	}
]) 


const [equipos, actualizarEquipos] = useState( [
	{	

		id: uuidv4(),
		titulo: "Programación",
		colorPrimario: "#57C278 ",
		colorSecundario: "#D9F7E9"
	},
	{
		id: uuidv4(),
		titulo: "Front End",
		colorPrimario: "#82CFFA",
		colorSecundario: "#E8F8FF"
	},
	{		
		id: uuidv4(),
		titulo: "Data Science",
		colorPrimario: "#A6D157",
		colorSecundario: "#F0F8E2"
	},
	{
		id: uuidv4(),
		titulo: "Devops",
		colorPrimario: "#E06B69",
		colorSecundario: "#FDE7E8"
	},
	{
		id: uuidv4(),
		titulo: "Ux y Diseño",
		colorPrimario: "#DB6EBF",
		colorSecundario: "#FAE9F5"
	},
	{
		id: uuidv4(),
		titulo:"Móvil",
		colorPrimario: "#FFBA05",
		colorSecundario: "#D9F7E9"
	},
	{
		id: uuidv4(),
		titulo:  "Innovación y gestión",
		colorPrimario: "#FFF5D9",
		colorSecundario: "#FFEEDF"
	}
])

	const cambiarMostrar = ()=>{
		actualizarMostrar(!mostrarFormulario)
	}

	/* registrar colaborador */
	const registrarColaborador = (colaborador)=>{
		console.log("Nuevo colaborador", "=>", colaborador )
		/* spread operator */
		actualizarColaboradores([...colaboradores, colaborador ])
	}

	/* Eliminar colaborador */

	const eliminarColaborador = (id)=>{
		console.log("Eliminar colaborador, ", id);
		const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
		actualizarColaboradores(nuevosColaboradores)	
	}


	/* Actualizar color de equipo */

	const actualizarColor  = (color, id)=>{
		console.log("Actualizar: ", color, id )
		const equiposActualizados = equipos.map((equipo)=>{
			if(equipo.id === id){
				equipo.colorPrimario = color
			}
			return equipo;
		})
		actualizarEquipos(equiposActualizados)
	}

	/* Crear equipo */
	const crearEquipo = (nuevoEquipo)=>{
		console.log(nuevoEquipo)
		actualizarEquipos([...equipos, {...nuevoEquipo,id: uuidv4()}])
	}


	return (
		<div>
			<Header />
			{
				mostrarFormulario && <Formulario 
					equipos={equipos.map((patata)=> patata.titulo)}
					registrarColaborador ={registrarColaborador}
					crearEquipo = {crearEquipo}
					/>
			}
			<MiOrg cambiarMostrar={cambiarMostrar}/>
			{
				equipos.map((equipo)=> <Equipo 
					datos={equipo} 
					key={equipo.titulo}
					colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
					eliminarColaborador ={eliminarColaborador}
					actualizarColor={actualizarColor}
					/>
				)
			}
			<Footer/>
		</div>
		
	);
}

export default App;
