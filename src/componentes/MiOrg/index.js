import { useState } from "react"
import "./MiOrg.css"


const MiOrg = (props)=>{

    console.log(props) 

    return <section className="orgSection">
       <div className="orgCaja">
            <div className="tituloContainer">
                <h3 className="title">Mi organización </h3>
            </div>
            <img src="/img/btn_plus.svg" alt="add" onClick={props.cambiarMostrar}/>
       </div>
        </section>
}

export default MiOrg