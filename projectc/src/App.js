import logo from './logo.svg';
import './App.css';

function App() {
  const handleNameChange = () => {
    const names = ["Bob", "Alice", "Charlie"];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="logo" alt="logo" />
        <p>
          Hello {handleNameChange()}!
        </p>
      </header>
    </div>
  );
}

export default App;
