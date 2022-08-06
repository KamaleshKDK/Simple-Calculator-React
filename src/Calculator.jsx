import React, { useState } from 'react'

function Calculator() {
    const [number1, setNumber1] = useState();
    const [number2, setNumber2] = useState();
    const [operation, setOperation] = useState("add");
    const [total, setTotal] = useState(0);

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
            <h1>Calculator</h1>
            <div>
                <label>Number 1 :
                    <input
                        type="number"
                        value={number1}
                        placeholder="Enter a Number"
                        onChange={(e) => setNumber1(e.target.value)}
                    />
                </label>

                <label>Number 2 :
                    <input
                        type="number"
                        value={number2}
                        placeholder="Enter a Number"
                        onChange={(e) => setNumber2(e.target.value)}
                    />
                </label>
                <select>
                    <option onChang={() => setOperation("add")} value="add">Add</option>
                    <option onChang={() => setOperation("sub")} value="sub">Sub</option>
                    <option onChang={() => setOperation("mul")} value="mul">Mul</option>
                    <option onChang={() => setOperation("div")} value="div">Div</option>
                </select>
                <br></br>
                <button onClick={calculating}>Calculate</button>
                <button onClick={Clear}>Clear</button>
                <h3 >Total : {total}</h3>
            </div>
        </>
    )
}

export default Calculator