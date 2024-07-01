import logo from './logo.svg';
import './App.css';

function App() {
    const clickCustomTrigger = () => {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event: "test",
            message: "hello"
        });
    };

    const clickAnotherCustomTrigger = () => {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event: "test 2",
            message: "Hello world"
        });
    };

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
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
                <button onClick={clickCustomTrigger} className="custom-trigger">Trigger</button>
                <button onClick={clickAnotherCustomTrigger} className="custom-trigger">Trigger another event</button>
            </header>
        </div>
    );
}

export default App;
