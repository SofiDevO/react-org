import "./ListaOpciones.css"
const ListaOpciones = (props)=>{
    const equipos=[
        "Programación",
        "Front End",
        "Data Science",
        "Devops",
        "Ux y Diseño",
        "Móvil",
        "Innovación y gestión"
    ]

    const manejarCambio = (e)=>{
        console.log("cambio", e.target.value)
        props.actualizarEquipo(e.target.value)
    }

    return <div className="lista-opciones">
        <label>Equipo</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue=""hidden >Seleccionar Equipo</option>
            {equipos.map((equipo, index)=> <option key={index} value={equipo} >{equipo} </option>)}
        </select>
    </div>
}

export default ListaOpciones;
