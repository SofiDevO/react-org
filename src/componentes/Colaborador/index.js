import "./Colaborador.css"
import { TiDeleteOutline } from "react-icons/ti";

const Colaborador = (props)=>{
    const{nombre, puesto, foto, equipo} =props.datos
    const{colorPrimario,eliminarColaborador} =props
    return <div className="colaborador">
        <span onClick={eliminarColaborador}><TiDeleteOutline/></span>
        <div className="encabezado" style={{backgroundColor:colorPrimario}}>
            <img src={foto} alt={nombre}/>
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
        </div>
    </div>
}



export default Colaborador