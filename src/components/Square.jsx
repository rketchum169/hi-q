import React from 'react'
import '../assets/css/square.css'

const Square = (props) => {
    const selected = (props.selectedRow && props.selectedCol) ? 'selected': ''
    const classes = `Square ${props.square} ${selected}`
    return (
        <button className={classes}></button>
    )
}

export default Square