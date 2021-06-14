import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
    const [valid, setValid] = useState(true);
    const [count, setCount] = useState(0);

    console.log('rendering in progress');
    function handleClick() {
        // setCount((cnt) => cnt + 1);
        setTimeout(() => {
            setCount((cnt) => cnt + 1);
            console.log(count);
            setValid((val) => !val);
        });
        // new Promise((resolve) => {
        //     setCount((cnt) => cnt + 1);
        //     setValid((val) => !val);
        //     resolve();
        // });
        // requestAnimationFrame(() => {
        //     setCount((cnt) => cnt + 1);
        //     setValid((val) => !val);
        // });
    }

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
                <button onClick={handleClick}>Increment</button>
                <div>
                    {valid.toString()} - {count}
                </div>
            </header>
        </div>
    );
}

export default App;
