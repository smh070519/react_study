import React,{useRef, useState} from 'react';

const Name = () => {
    const [result, setResult] = useState('');
    useRef();
    const onChangeToResult = (e)=>{
        setResult(e.target.value)
    }

    const sorryBtn = ()=>{
        setResult(result+"님")
    }
    return (
        <div>
            <p>{result}</p> 
            <input type="text" onChange={onChangeToResult} />     
            <button>버튼</button>  
        </div>
    );
};

export default Name;