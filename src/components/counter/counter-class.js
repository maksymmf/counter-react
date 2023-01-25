import { Component } from 'react';

class CounterClass extends Component {

    state = {
        count: 0
    }

    handleIncrement = () => {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }

    handleDecrement = () => {
        this.setState(prevState => {
            return {
                count: prevState.count - 1
            }
        })
    }

    handleReset = () => {
        this.setState({ count: 0 });
    }

    render () {
        return (
            <div>
                <h4>Class Component</h4>
                <h1>{this.state.count}</h1>
                <div className='button-wrapper'>
                    <button onClick={this.handleIncrement}>Increment</button>
                    <button onClick={this.handleDecrement}>Decrement</button>
                    <button onClick={this.handleReset}>Reset</button>
                </div>
            </div>
        )
    }
}

export default CounterClass