import React  from 'react';
import Component2 from './Component2';

const Contaniner = () => {
    const name = "성민혁"
    const age = 20;
    const printName = (name) =>{
        console.log(name)
    }
    return (
        <div>
            {/* <Component name={name} age={age} /> */}
            <Component2 printName={printName}>
                <span>성민혁</span>
            </Component2>
        </div>
    );
};

export default Contaniner;