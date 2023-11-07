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
		equipo:"Programación",
		foto:"https://github.com/SofiDevO.png",
		nombre:"Angela Sofía Osorio",
		puesto: "One Helper",
		fav:true
	},
	{
		id: uuidv4(),
		equipo:"Programación",
		foto:"https://github.com/nerddiana.png",
		nombre:"Diana Nerd ",
		puesto: "FullStack Developer",
		fav:false
	},
	{
		id: uuidv4(),
		equipo:"Programación",
		foto:"https://github.com/harlandlohora.png",
		nombre:"Harland Lohora",
		puesto: "Instructor",
		fav:true
	},
	{
		id: uuidv4(),
		equipo:"Front End",
		foto:"https://github.com/SofiDevO.png",
		nombre:"Angela Sofía Osorio",
		puesto: "frontend Developer",
		fav:true
	},
	{
		id: uuidv4(),
		equipo:"Front End",
		foto:"https://www.show.news/__export/1648679767591/sites/debate/img/2022/03/30/dwayne-1.jpg_423682103.jpg",
		nombre:"La Roca",
		puesto: "Be La Roca",
		fav:true
	},
	{
		id: uuidv4(),
		equipo:"Front End",
		foto:"https://e.radio-grpp.io/normal/2019/11/15/523252_864504.jpg",
		nombre:"Tony Stark",
		puesto: "Genius, Millionaire, Playboy, Philanthropist",
		fav:true
	},
	{
		id: uuidv4(),
		equipo:"Data Science",
		foto:"https://i0.wp.com/wipy.tv/wp-content/uploads/2020/08/profesor-hulk.jpg?fit=1000%2C600&ssl=1",
		nombre:"Professor Hulk",
		puesto: "Professor",
		fav:false
	},
	{
		id: uuidv4(),
		equipo:"Data Science",
		foto:"https://1.bp.blogspot.com/-Gn7cboCduPE/Xv-XzNUfTbI/AAAAAAAAHqY/XWSNyfd77WwUv1uTIFPhPA7rHQibDUCDwCK4BGAsYHg/s690/Screenshot_13.jpg",
		nombre:"Eliot  Alderson",
		puesto: "Data scientist",
		fav:true
	},
	{
		id: uuidv4(),
		equipo:"Devops",
		foto:"https://upload.wikimedia.org/wikipedia/en/thumb/9/97/Doc_Brown.JPG/220px-Doc_Brown.JPG",
		nombre:"Emmet Brown",
		puesto: "Instructor",
		fav:false
	},
	{
		id: uuidv4(),
		equipo:"Devops",
		foto:"https://e.radio-grpp.io/normal/2019/11/15/523252_864504.jpg",
		nombre:"Tony Stark",
		puesto: "Genius, Millionaire, Playboy, Philanthropist",
		fav:true
	},
	{
		id: uuidv4(),
		equipo:"Devops",
		foto:"https://i0.wp.com/wipy.tv/wp-content/uploads/2020/08/profesor-hulk.jpg?fit=1000%2C600&ssl=1",
		nombre:"Professor Hulk",
		puesto: "Professor",
		fav:false
	},
	{
		id: uuidv4(),
		equipo:"Ux y Diseño",
		foto:"https://github.com/harlandlohora.png",
		nombre:"Harland Lohora",
		puesto: "Instructor",
		fav:true
	},
	{
		id: uuidv4(),
		equipo:"Ux y Diseño",
		foto:"https://e.radio-grpp.io/normal/2019/11/15/523252_864504.jpg",
		nombre:"Tony Stark",
		puesto: "Genius, Millionaire, Playboy, Philanthropist",
		fav:true
	},
	{
		id: uuidv4(),
		equipo:"Móvil",
		foto:"https://github.com/harlandlohora.png",
		nombre:"Harland Lohora",
		puesto: "Instructor",
		fav:true
	},
	{
		id: uuidv4(),
		equipo:"Móvil",
		foto:"https://hips.hearstapps.com/hmg-prod/images/globos-de-oro-gambito-de-dama-mejor-serie-1614275645.jpg?crop=1.00xw:0.667xh;0,0.0207xh&resize=1200:*",
		nombre:"Beth Harmond ",
		puesto: "Instructor",
		fav:true
	},
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
	/* Like */
	const like = (id)=> {
		console.log(" like", id)
		const colaboradoresLikeados = colaboradores.map((colaborador) => {
			if(colaborador.id === id){
				colaborador.fav = !colaborador.fav
			}
			return colaborador
		})
		actualizarColaboradores(colaboradoresLikeados)
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
					like={like}
					/>
				)
			}
			<Footer/>
		</div>
		
	);
}

export default App;
