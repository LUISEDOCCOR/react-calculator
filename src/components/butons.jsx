import React from "react";
import '../stylesheets/buttons.css'

function Button (props){       
    // return isNaN(value)  = no es un numero
    // .trimEnd() =>  borra el esapcio final
    return(
        <button className={`${props.important ? 'red big' : 'blue small'}`} onClick={()=> props.callback(props.children)}>
            {props.children}
        </button>
    )
}

export default Button