import React from "react"

const Jsx01 = () => {
    return(
        <React.Fragment>
            <p>나의 첫 컴포넌드1!</p>
        </React.Fragment>
    )
}

const Jsx02 = () => {
    return(
        <>
            <p>나의 첫 컴포넌드2!</p>
        </>
    )
}

const Jsx03 = () => {
    return(
        <>
            <p>나의 첫 컴포넌드3!</p>
        </>
    )
}

export {Jsx02, Jsx03};
export default Jsx01