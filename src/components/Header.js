import React from 'react'

function Header({modeClick, mode }) {
    return (
        <header>
            <h2>Shopster</h2>
            <button onClick={modeClick}>{ mode } Mode</button>
        </header>
    )
}

export default Header