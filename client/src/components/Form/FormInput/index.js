import React from 'react'

export default function FormInput(props) {
    return (
        <div className={`${props.off ? "offset-" + props.off : ""} ${props.size ? "col-" + props.size : ""} form-group`}>
            <label htmlFor={props.value}>{props.value}</label>
            <input 
            type="text"
            className="form-control"
            id={props.value}
            name={props.value}
            onChange={props.function}
            placeholder={props.placeholder}
            >
            </input>
        </div>
    )
}
