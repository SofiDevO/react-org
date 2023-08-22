import { useState } from "react";
import "./App.css";
import Header from "./componentes/header/Header.js";
import Formulario from "./componentes/formulario/Formulario.js";
import MiOrg from "./componentes/MiOrg";
import Equipo from "./componentes/Equipo";

function App() {
	const [mostrarFormulario, actualizarMostrar] = useState(false)

	const cambiarMostrar = ()=>{
		actualizarMostrar(!mostrarFormulario)
	}
	/* Lista de equipos */
	const equipos = [
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
    ]

	return (
		<div>
			<Header />
			{mostrarFormulario && <Formulario equipos={equipos.map((patata)=> patata.titulo)}/>}
			<MiOrg cambiarMostrar={cambiarMostrar}/>
			{
				equipos.map((equipo)=> <Equipo datos={equipo} key={equipo.titulo}/>)
			}
		</div>
	);
}

export default App;
