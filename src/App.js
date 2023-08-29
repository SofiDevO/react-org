import { useState } from "react";
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
		equipo:"Front End",
		foto:"https://github.com/SofiDevO.png",
		nombre:"Angela Sofía Osorio",
		puesto: "Beta One"
	},
	{
		equipo:"Programación",
		foto:"https://github.com/harlandlohora.png",
		nombre:"Harland Lohora",
		puesto: "Instructor"
	},
	{
		equipo:"Data Science",
		foto:"https://github.com/harlandlohora.png",
		nombre:"Harland Lohora",
		puesto: "Instructor"
	},
	{
		equipo:"Móvil",
		foto:"https://github.com/harlandlohora.png",
		nombre:"Harland Lohora",
		puesto: "Instructor"
	},
	{
		equipo:"Devops",
		foto:"https://github.com/harlandlohora.png",
		nombre:"Harland Lohora",
		puesto: "Instructor"
	},
	{
		equipo:"Ux y Diseño",
		foto:"https://github.com/harlandlohora.png",
		nombre:"Harland Lohora",
		puesto: "Instructor"
	}
]) 


const [equipos, actualizarEquipos] = useState( [
	{
		titulo: "Programación",
		colorPrimario: "#57C278 ",
		colorSecundario: "#D9F7E9"
	},
	{
		titulo: "Front End",
		colorPrimario: "#82CFFA",
		colorSecundario: "#E8F8FF"
	},
	{
		titulo: "Data Science",
		colorPrimario: "#A6D157",
		colorSecundario: "#F0F8E2"
	},
	{
		titulo: "Devops",
		colorPrimario: "#E06B69",
		colorSecundario: "#FDE7E8"
	},
	{
		titulo: "Ux y Diseño",
		colorPrimario: "#DB6EBF",
		colorSecundario: "#FAE9F5"
	},
	{
		titulo:"Móvil",
		colorPrimario: "#FFBA05",
		colorSecundario: "#D9F7E9"
	},
	{
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
		actualizarColaboradores([...colaboradores, colaborador])
	}

	/* Eliminar colaborador */

	const eliminarColaborador = ()=>{
		console.log("Eliminar colaborador")	
	}


	/* Actualizar color de equipo */

	const actualizarColor  = (color, titulo)=>{
		console.log("Actualizar: ", color, titulo )
		const equiposActualizados = equipos.map((equipo)=>{
			if(equipo.titulo === titulo){
				equipo.colorPrimario = color
			}
			return equipo;
		})
		actualizarEquipos(equiposActualizados)
	}



	return (
		<div>
			<Header />
			{
				mostrarFormulario && <Formulario 
					equipos={equipos.map((patata)=> patata.titulo)}
					registrarColaborador ={registrarColaborador}
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
