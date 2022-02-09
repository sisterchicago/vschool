import React from 'react'
import './Dice.css'

class DiceBox extends React.Component {
    constructor() {
        super()
        this.state = {
            num1: 0,
            num2: 0,
            num3: 0,
            num4: 0,
            num5: 0
        }
        this.diceNum = this.diceNum.bind(this)
    }

    rollDice() {
        return (Math.floor(Math.random() * 6))
    }

    diceNum() {
        this.setState(() => {
            return {
                num1: this.rollDice(),
                num2: this.rollDice(),
                num3: this.rollDice(),
                num4: this.rollDice(),
                num5: this.rollDice()
                }
        }
        )
    }

    render(){
        return(
            <div className='dice'>
                <p className='num'>{this.state.num1}</p>
                <p className='num'>{this.state.num2}</p>
                <p className='num'>{this.state.num3}</p>
                <p className='num'>{this.state.num4}</p>
                <p className='num'>{this.state.num5}</p>

                <button className='button' onClick={this.diceNum}>Roll Dice</button>
            </div>
        )
    }
}
  


export default DiceBox 