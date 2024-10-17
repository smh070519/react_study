import React from "react"


const Jsx03 = () => {
    const name = "성민혁"
    const message = "환영합니다"

    return(
        <React.Fragment>
            이름: {name}, 
            <p style={{color:"red"}}>{message}</p>  
        </React.Fragment>
    )
}

export default Jsx03