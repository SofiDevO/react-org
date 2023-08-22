import "./Equipo.css"
const Equipo  = (props) => {

    const {titulo, colorPrimario, colorSecundario} = props.datos
    const fondo = {
        backgroundColor: props.datos.colorSecundario
    }
    const eestiloTitulo = {borderColor: colorPrimario}
    

    return <section className="equipo" style={fondo}>
        <h3 style={eestiloTitulo} >{titulo} </h3>
        <div className="colaboradores"></div>
    </section>
}

export default Equipo;