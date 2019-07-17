import React from 'react'

const DigitalDisplay = (props) => {
    let style = {
        margin:"auto", 
        padding: 10, 
        textAlign: "center"
    }
    return <div style={style}>{props.time}</div>
}

export default DigitalDisplay