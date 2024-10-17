import React, { useState } from 'react';

const Sound = () => {

    const [sound,setSound] = useState("??");

    const dog = () =>{
        setSound("멍멍🐶")
    }
    const cat = () =>{
        
        setSound("야옹😺")
    }
    return (
        <div>
            <p>{sound}</p>
            <button onClick={dog}>강아지 버튼</button>
            <button onClick={cat}>고양이 버튼</button>
            
        </div>
    );
};

export default Sound;