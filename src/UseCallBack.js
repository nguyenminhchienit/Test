import { useEffect, useState, memo } from "react"

function UseCallBack({onIncrease}){
    console.log("render");
    return (
        <div>
            <h1>Takis</h1>
            <button onClick={onIncrease}>Increase</button>
        </div>
    )
}

export default memo(UseCallBack)