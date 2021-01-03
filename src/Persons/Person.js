import React from 'react'
import './Person.css'
const Person = (props) => {
    return (
        <div className="Person">
            <p> This is {props.name} and his age is {props.age} </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name} />
        </div>
    )
}

export default Person

