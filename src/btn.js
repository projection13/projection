import React from 'react';

const Btn = (props) => {
    const btn = {
        color : '#eee',
        fontSize : '16px',
        backgroundColor : '#111',
        borderRadius : '30px',
        padding : '8px 40px' 
    }

    return <>
        <button style={btn}>{props.btn}</button>
    </>
}

export default Btn;