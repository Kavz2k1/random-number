import React from "react"
import { useState } from "react"
import "./index.css"
function Random()
{
    const [minVal, setMinVal] = useState()
    const [maxVal, setMaxVal] = useState()
    const [random, setrandom] = useState()

    const handlemin=(evnt)=>
    {
        setMinVal (+evnt.target.value)
    }
    const handlemax=(evnt)=>
        {
            setMaxVal (+evnt.target.value)
        }
    function randomNumb()
    {
        setrandom(Math.floor(Math.random()*(maxVal-minVal +1) +minVal))
    }
    return(
        <div className ="main">
            <div className = "cont">
                <div className = "random">
                    <p>Random Number is: <span>{random}</span></p>
                </div>
                <div className ="num-cont">
                    <div>
                   <p>From:</p>
                        <input type = "number"value = {minVal} onChange = {handlemin}></input>
                    </div>
                    <div>
                       <p>To:</p>
                        <input type = "number" value = {maxVal} onChange = {handlemax}></input>
                    </div>
                </div>
                <br></br>
                <button onClick={randomNumb}>Generate</button>
            </div>
        </div>
    )
}
export default Random