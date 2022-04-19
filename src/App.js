import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Saludo from './components/Saludo';
import CardNew from './components/CardNew';
import Contador from './components/Contador';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <h1>usando react</h1>
      <CardNew otroComponente={Saludo}> </CardNew>
      <Saludo nombre = "nombre" edad = "edad" />
      <Contador stock = "5" />
      <ItemListContainer/>
      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
