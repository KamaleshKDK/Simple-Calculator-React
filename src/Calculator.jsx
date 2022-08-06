import React, { useState } from 'react'
import "./style.css"

function Calculator() {
    const [number1, setNumber1] = useState();
    const [number2, setNumber2] = useState();
    const [operation, setOperation] = useState("add");
    const [total, setTotal] = useState();

    const calculating = () => {
        if (operation == "add") {
            setTotal(parseInt(number1) + parseInt(number2))
        }
        if (operation == "sub") {
            setTotal(parseInt(number1) - parseInt(number2))
        }
        if (operation == "mul") {
            setTotal(parseInt(number1) * parseInt(number2))
        }
        if (operation == "div") {
            setTotal(parseInt(number1) / parseInt(number2))
        }
    }
    const Clear = () => {
        setNumber1(0);
        setNumber2(0);
        setTotal(0)
    }
    return (
        <>
            <div className='container-fluid'>
                <h1 className='title'>CALCULATOR</h1>
                <input
                    type="number"
                    value={number1}
                    placeholder="Enter a Number"
                    onChange={(e) => setNumber1(e.target.value)}
                    required
                />
                <br />
                <input
                    type="number"
                    value={number2}
                    placeholder="Enter a Number"
                    onChange={(e) => setNumber2(e.target.value)}
                    required
                />
                <br />
                <select className='select'>
                    <option onChang={() => setOperation("add")} value="add">Add ( + )</option>
                    <option onChang={() => setOperation("sub")} value="sub">Substract ( - )</option>
                    <option onChang={() => setOperation("mul")} value="mul">Multiple ( * )</option>
                    <option onChang={() => setOperation("div")} value="div">Division ( / )</option>
                </select>
                <br></br>
                <button onClick={calculating} className="calculate">Calculate</button>
                <button onClick={Clear} className="btn">Clear</button>
                <input className='total' value={total} placeholder="Total" />
            </div>
        </>
    )
}

export default Calculator