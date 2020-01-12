import React from 'react'
import './style.css'

function Header(props) {
    return (
        <header>
            <div className="title" >Hog Memory Game</div>
            <div className="scoreboard">Hog Score: {props.score} | Total Score: {props.totalScore}</div>
        </header>

    )
}

export default Header