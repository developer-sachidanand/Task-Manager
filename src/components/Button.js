import React from 'react'
import PropTypes from 'prop-types';

function Button({text,color,onClick}) {
    return <button style = {{backgroundColor:color}} className='btn'
            onClick = {onClick}
    
    >{text}</button>
}

Button.defaultProps = {
    color:'steelblue'
}

Button.protoTypes = {
    text:PropTypes.string.isRequired,
    color:PropTypes.string.isRequired,
    onClick:PropTypes.func.isRequired
}

export default Button
