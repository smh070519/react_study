import React, { useState } from 'react';

const Colors = () => {
    const [result,setResult] = useState("");
    const [color,setColor] = useState("") 
    const red = () =>{
        setColor("red")
    }
    const blue = () =>{
        setColor("blue")
    }

    const onChangeValue = (e) =>{
        setColor(e.target.value=="핑크색"?"black":color)
        setResult(e.target.value)
    }

    return (
        <div>
            <p style={{color}}>{result}</p>
            <button onClick={red}>빨간색</button>
            <button onClick={blue}>파란색</button>
            <input type="text" onChange={onChangeValue} />
        </div>
    );
};

export default Colors;