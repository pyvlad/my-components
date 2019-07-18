import React from 'react'

var ProgressBar = (props) => {
    let value = isNaN(props.percentLeft) ? 0 : props.percentLeft
    return (
    <div>
        <div className="progress">
            <div className="progress-bar notransition" 
                role="progressbar" 
                style={{width: value+"%"}}
                aria-valuenow={value}
                aria-valuemin="0"
                aria-valuemax="100">
            </div>
        </div>
    </div>
    )
}

export default ProgressBar