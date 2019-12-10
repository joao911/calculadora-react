import React from 'react'
import './Buttom.css'


export default props=>{
let classes = 'buttom'
classes  += props.operation ? 'operation ' : ''
classes  += props.double ? '--double ' :''
classes  += props.triple ? '--triple ' :''

return (
    <button
    onClick={e =>props.click && props.click(props.label)}
    className={classes}>
        {props.label}
    </button>
)
}
    