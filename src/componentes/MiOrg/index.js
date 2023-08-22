import { useState } from "react"
import "./MiOrg.css"


const MiOrg = (props)=>{

    console.log(props) 

    return <section className="orgSection">
       <div className="orgCaja">
            <h3 className="title">Mi organización </h3>
       </div>
            <img className="btnMostrar" src="/img/btn_plus.svg" alt="add" onClick={props.cambiarMostrar}/>
        </section>
}

export default MiOrg