
import React, { useState } from 'react'
import "../Styles/RollingDice.css"
import Dice from './Dice'

let array = [];
for (let i = 0; i < 10; i++) {
    array.push(0);
}

const RollingDice = () => {
    const [freezedDice, setFreezedDice] = useState([]);
    const [flag, setFlag] = useState(0);
    const [freezedNum, setFreezedNum] = useState([]);

    console.log("freezedNum", freezedNum)
    console.log("freezedNumArray", freezedNum)
    const change = () => {
        setFlag(!flag);
    }



    return (
        <>
            <div className="body-container">
                <div className='main-container'>
                    <div className='black-container'>
                        <div className='inner-container'>
                            <div className='tanzies'>
                                <h1>Tanzies</h1>
                                <p>
                                    Roll until all dice are the same. Click each die to freeze it at its current value between rolls.
                                </p>
                            </div>

                            <div className='dice-box'>
                                {
                                    array.map((_, index) => {
                                        return (
                                            <Dice
                                                key={index}
                                                flag={flag}
                                                id={index}
                                                freeze={setFreezedDice}
                                                isFreezed={freezedDice.includes(index)}
                                                num={setFreezedNum}
                                                freezedNum={freezedNum}
                                            />
                                        )
                                    })
                                }
                            </div>

                            <div className='btnDiv'>
                                <button className="btn" onClick={change}>Roll</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}



export default RollingDice


