import { useState } from 'react'

export default function Counter({ count, increment })
{
    // State variable
    const [counter, setCounter] = useState(0)

    // New State countByTwo
    // const [countByTwo, setCountByTwo] = useState(0)

    const handlePlusOne = () =>
    {
        setCounter(prevCount => prevCount + 1)
    }

    const handlePlusTwo = () =>
    {
        setCounter(prevCount => prevCount + 2)
    }

    const handleTimesThree = () =>
    {
        setCounter(prevCount => prevCount * 3)
    }

    const handleSquare = () =>
    {
        setCounter(prevCount => prevCount ** 2)
    }

    const handleMaxInteger = () =>
    {
        setCounter(Number.MAX_SAFE_INTEGER)
    }

    const handleMaxValue = () =>
    {
        setCounter(Number.MAX_VALUE)
    }

    const handleMinInteger = () =>
    {
        setCounter(Number.MIN_SAFE_INTEGER)
    }

    const handleMinValue = () =>
    {
        setCounter(Number.MIN_VALUE)
    }

    const handleReset = () =>
    {
        setCounter(0)
    }

    // const handleCountByTwo = () =>
    // {
    //     setCountByTwo(prevCount => prevCount + 2)
    //     console.log('countByTwo: ', countByTwo)
    // }

    return (
        <div>
            {
                count === undefined && (
                    <>
                        <h2>Counter: {counter}</h2>
                        {/* <h2>CountByTwo: {countByTwo}</h2> */}

                        <div>
                            <button onClick={handlePlusOne}>+1</button>
                            <button onClick={handlePlusTwo}>+2</button>
                            <button onClick={handleTimesThree}>x3</button>
                            <button onClick={handleSquare}>^2</button>
                            <button onClick={handleMaxInteger}>BEEG</button>
                            <button onClick={handleMaxValue}>MAX BEEG</button>
                            <button onClick={handleMinInteger}>smol</button>
                            <button onClick={handleMinValue}>moar smol</button>
                        </div>
                        <div>
                            <button onClick={handleReset}>RESET</button>
                        </div>
                        {/* <button onClick={handleCountByTwo}>Count by two</button> */}
                    </>
                )
            }
            {
                count !== undefined && (
                    <>
                        <h2>Counter: {count}</h2>
                        <button onClick={increment}>+1</button>
                    </>
                )
            }
        </div>
    )
}
