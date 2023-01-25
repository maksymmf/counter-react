import { useState } from 'react';

function CounterFunction () {
    const [count, setState] = useState(0);

    const handleIncrement = () => {
        setState(prevState => prevState + 1);
    }

    const handleDecrement = () => {
        setState(prevState => prevState - 1);
    }

    const handleReset = () => {
        setState(0);
    }

    return (
        <div>
            <h4>Functional Component</h4>
            <h1>{count}</h1>
            <div className='button-wrapper'>
                <button onClick={handleIncrement}>Increment</button>
                <button onClick={handleDecrement}>Decrement</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
    )
}

export default CounterFunction