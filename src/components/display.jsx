import React from "react";
import '../stylesheets/dispaly.css'

function Display (props){
    return(
        <input disabled type="text" className="dispaly" value={props.value} />
    )
}


export default Display