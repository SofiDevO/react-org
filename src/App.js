import { useState } from "react";
import "./App.css";
import Header from "./componentes/header/Header.js";
import Formulario from "./componentes/formulario/Formulario.js";
import MiOrg from "./componentes/MiOrg";


function App() {
	const [mostrarFormulario, actualizarMostrar] = useState(false)

	const cambiarMostrar = ()=>{
		actualizarMostrar(!mostrarFormulario)
	}
	return (
		<div>
			<Header />
			{mostrarFormulario && <Formulario/>}
			<MiOrg cambiarMostrar={cambiarMostrar}/>
			
		</div>
	);
}

export default App;
