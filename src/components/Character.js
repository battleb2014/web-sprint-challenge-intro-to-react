// Write your Character component here
import React from 'react';
import '../styles/character.css'

const Character = (props) => {
    console.log(props.info);
    return (
        <div className = 'character' >
                <h3>{ props.info.name }</h3>
                <p>Birth Year: { props.info.birth_year }</p>
                <p>Height: { props.info.height }</p>
                <p>Mass: { props.info.mass }</p>
        </div>
    )
}

export default Character;