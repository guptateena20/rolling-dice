import React, { useState, useEffect } from 'react'

const Dice = ({ flag, id, freeze, isFreezed, num, freezedNum }) => {
    const [value, setValue] = useState(null);
    const [color, setColor] = useState(false);


    useEffect(() => {
        if (!isFreezed) {
            getRandomValue();
        }
    }, [flag, isFreezed]);

    const getRandomValue = () => {
        const randomValue = Math.ceil(Math.random() * 6);
        setValue(randomValue);
    };

    const handleFreeze = () => {
        if (freezedNum.length === 0) {
            freeze((freezedDice) => [...freezedDice, id]);
            setColor(true);
            num([value])
        }
        if (freezedNum.includes(value)) {
            freeze((freezedDice) => [...freezedDice, id]);
            setColor(true);
        }
    };

    return (
        <>
            <button className="dice" onClick={handleFreeze}
                style={{ backgroundColor: color ? "#20B2AA" : null }}
            >
                {value}
            </button>
        </>
    )
}




export default Dice
