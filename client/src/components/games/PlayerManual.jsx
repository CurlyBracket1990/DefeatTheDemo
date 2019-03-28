import React, { PureComponent } from 'react'
import './PlayerManual.css'

export default class PlayerManual extends PureComponent {


    render() {
        return <div className="playermanual">
        <h2>What is your goal:</h2>
        <p>
            Your goal is to defeat all the enemys before you run out of moves.<br />
            This means you have to work together with your teammate and think smart about who is fighting which enemy.
        </p>

        <h2>Game rules:</h2>
        <ul>
            
            <li>1. You can't attack your teammate. (duh)</li>
            <li>2. You can only defeat enemys that are not facing towards you.</li>
            <li>3. If you try to attack an enemy that is facing towards you, you lose your turn and the total moves will go down</li>
            <li>4. You can't move diagonaly.</li>
        </ul>
        </div>
    }

}