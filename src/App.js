import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Saludo from './components/Saludo';
import CardNew from './components/CardNew';
import Contador from './components/Contador';
import ItemListContainer from './components/ItemListContainer';
import CountriesContainer from './components/CountriesContainer';
import StarshipsContainer from './components/swapi/StarshipsContainer';
import MoviesList from './components/movies/MoviesList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MovieDetail from './components/movies/MovieDetail';



function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/contador' element={<Contador/>} />
        <Route path='/pelicula/:movieId' element={<MovieDetail/>} />
        <Route></Route>
      </Routes>
    </BrowserRouter>

    // <div className="App">
    //   <NavBar/>
    //   <h1>usando react</h1>
    //   <CardNew otroComponente={Saludo}> </CardNew>
    //   <Saludo nombre = "nombre" edad = "edad" />
    //   <ItemListContainer greeting="contenedor de items" />
    //   <CountriesContainer/>
    //   <StarshipsContainer/>
    //   <MoviesList/>
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
