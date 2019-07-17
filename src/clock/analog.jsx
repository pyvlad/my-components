import React from 'react'

const AnalogDisplay = (props) => {
    let timeObj = new Date(props.time)
    
    // -90 to turn it to 12 o'clock (by default it's 15'), e.g. rotate(-25deg):
    let secondsRotate = (timeObj.getSeconds()/60)*360 - 90
    let minutesRotate = (timeObj.getMinutes()/60)*360 - 90
    let hoursRotate = (timeObj.getHours()/12 + timeObj.getMinutes()/60/12)*360 - 90

    let clockStyle = {
        position: "relative",
        width: props.clockSize,
        height: props.clockSize, 
        borderRadius: props.clockSize / 2,
        backgroundColor: props.bgColor,
        borderColor: props.arrColor,
        borderStyle: "solid",
        margin: "auto"
    }

    return (
        <div style={clockStyle}>
            <ClockArrow clockSize={props.clockSize} rotate={hoursRotate} 
                {...props.configs.hours} />
            <ClockArrow clockSize={props.clockSize} rotate={minutesRotate} 
                {...props.configs.minutes} />
            <ClockArrow clockSize={props.clockSize} rotate={secondsRotate} 
                {...props.configs.seconds} />
        </div>
    )
}


const ClockArrow = (props) => {
    const topOffset = (deg) => -Math.cos(deg * Math.PI/180)
    const leftOffset = (deg) => Math.sin(deg * Math.PI/180)

    let arrowStyle = {
        position: "absolute",
        top: props.clockSize / 2 + topOffset(props.rotate) * props.width / 2,
        left: props.clockSize / 2 + leftOffset(props.rotate) * props.width / 2,
        width: props.length,
        height: props.width,
        transform: `rotate(${props.rotate}deg)`,
        transformOrigin: "0% 0%",
        backgroundColor: props.color,
        borderRadius: props.width / 2
    }
    
    let arrowTip = ""
    if (props.tip) {
        arrowTip = <i style={{
            position: "absolute",
            top: props.width / 2, // TODO: this is roughly estimated
            left: props.length - props.width * 3, // 3 = 2*padding + 2*border
            padding: props.width,
            display: "inline-block",
            transform: "rotate(-45deg)", 
            transformOrigin: "0% 0%",
            
            border: `solid ${props.color}`, 
            borderTopWidth: 0,
            borderRightWidth: props.width / 2,
            borderBottomWidth: props.width / 2,
            borderLeftWidth: 0
        }}></i>
    }
    return (
        <div style={arrowStyle}>{arrowTip}</div>
    )
}

export default AnalogDisplay