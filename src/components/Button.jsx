import React from 'react';
import {Button as ButtonM} from '@material-ui/core';

const buttonStyle = {
    backgroundColor: 'green',
    color: 'white',
}

console.log('sdfsge');

function Button({ styleCustom, ...props }){
    return (
        <ButtonM {...props} className='button' variant='contained' style={styleCustom && buttonStyle}>
            {props.children}
        </ButtonM>
    )
}

export default Button;