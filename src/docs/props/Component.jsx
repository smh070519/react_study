import React from 'react';

const Component = (props) => {
    console.log(props)
    return (
        <div>
            <p>제이름은 : {props.name}</p>
            <p>제 나이는 : {props.age}</p>
        </div>
    );
};

export default Component;