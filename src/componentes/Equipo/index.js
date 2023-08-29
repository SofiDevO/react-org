

import "./Equipo.css";
import Colaborador from "../Colaborador";
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) => {
	const { titulo, colorPrimario } = props.datos;
	const estiloFondo = { backgroundColor: hexToRgba(colorPrimario, 0.6)};
	const estiloTitulo = { borderColor: colorPrimario };
	const { colaboradores, eliminarColaborador, actualizarColor } = props;

	

	return <>
				{
					colaboradores.length > 0 && (
						<section className="equipo" style={estiloFondo}>
							<input
								type="color"
								className="input-color"
								value={hexToRgba(colorPrimario, 0.6)}
								onChange={(event)=>{ 
									actualizarColor(event.target.value, titulo)
								}}
								
							/>
							<h3 style={estiloTitulo}>{titulo} </h3>
							<div className="colaboradores">
								{colaboradores.map((colaborador, index) => (
									<Colaborador
										datos={colaborador}
										key={index}
										colorPrimario={colorPrimario}
										eliminarColaborador={eliminarColaborador}
									/>
								))}
							</div>
						</section>
					)
				}
			</>
	
};

export default Equipo;
