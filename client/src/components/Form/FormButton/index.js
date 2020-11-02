import React from 'react'

export default function FormButton(props) {
    return (
        <div className={`${props.size ? "col-" + props.size : ""} form-group`}>
            <button
                onClick={props.function}
                name={props.value}
                type="button"
                className="btn btn-primary mt-4">
                    {props.text}
            </button>
        </div>
    )
}
