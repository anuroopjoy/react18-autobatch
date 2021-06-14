import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
    const [valid, setValid] = useState(true);
    const [count, setCount] = useState(0);

    console.log('rendering in progress');
    function handleClick() {
        setTimeout(() => {
            setCount((cnt) => cnt + 1);
            console.log(count);
            setValid((val) => !val);
        })
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <button onClick={handleClick}>Increment</button>
                <div>
                    {valid.toString()} - {count}
                </div>
            </header>
        </div>
    );
}

export default App;
