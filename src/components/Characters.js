import React from 'react';
import Character from './Character';
import '../styles/characters.css';

const Characters = (props) => {

    return (
        <div className = 'characters'>
            {
                props.roster.map(((char, index) => {
                    console.log(index);
                    return <Character
                                key = { index }
                                info = { char }
                                toggleStats = { props.toggleStats }
                            />
                }))
            }
        </div>
    )
}

export default Characters;