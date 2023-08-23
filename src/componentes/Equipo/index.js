

import "./Equipo.css";
import Colaborador from "../Colaborador";
const Equipo = (props) => {
	const { titulo, colorPrimario, colorSecundario } = props.datos;
	const estiloFondo = { backgroundColor: colorSecundario };
	const estiloTitulo = { borderColor: colorPrimario };
	const { colaboradores } = props;

	console.log(colaboradores.length > 0);

	return (
		<>
			{colaboradores.length > 0 && (
				<section className="equipo" style={estiloFondo}>
					<h3 style={estiloTitulo}>{titulo} </h3>
					<div className="colaboradores">
						{colaboradores.map((colaborador, index) => (
							<Colaborador
								datos={colaborador}
								key={index}
								colorPrimario={colorPrimario}
							/>
						))}
					</div>
				</section>
			)}
		</>
	);
};

export default Equipo;
