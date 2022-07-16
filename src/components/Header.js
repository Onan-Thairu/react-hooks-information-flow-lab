import React from 'react'

function Header({onDarkModeClick, mode }) {
    return (
        <header>
            <h2>Shopster</h2>
            <button onClick={onDarkModeClick}>{ mode } Mode</button>
        </header>
    )
}

export default Header