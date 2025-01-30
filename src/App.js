import logo from './logo.svg';
import './App.css';
import navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Mangekyou_Sharingan_Shisui.svg/800px-Mangekyou_Sharingan_Shisui.svg.png" className="App-logo" alt="logo" />
        <p>
          Mangekyou<code> Sharingan</code> Kotoamutsukami
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Uchiha Shisui
        </a>
      </header>
    </div>
  );
}

export default App;
