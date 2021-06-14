import logo from './logo.svg';
import './App.css';
import React from 'react';
import { flushSync } from 'react-dom';

class App extends React.Component {
    constructor() {
        super();
        this.state = { valid: false, count: 0 };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        setTimeout(() => {
            flushSync(() => {
                this.setState(({ count }) => ({
                    count: count + 1
                }));
            });
            console.log(this.state.count);
            flushSync(() => {
                this.setState(({ valid }) => ({
                    valid: !valid
                }));
            });
        });
    }

    render() {
        console.log('rendering in progress');
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                    <button onClick={this.handleClick}>Increment</button>
                    <div>
                        {this.state.valid.toString()} - {this.state.count}
                    </div>
                </header>
            </div>
        );
    }
}

export default App;
