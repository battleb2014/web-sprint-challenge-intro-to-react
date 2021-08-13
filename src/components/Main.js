import React from 'react';
import Header from './Header';
import Characters from './Characters';
import '../styles/main.css';

const Main = ( props ) => {

    return (
    <div className = 'main'>
        <Header />
        <Characters roster = { props.roster } toggleStats = { props.toggleStats } />
    </div>
    )
}

export default Main;