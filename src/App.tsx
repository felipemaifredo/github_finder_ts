import './App.css';
import {  HashRouter, Routes, Route,  } from 'react-router-dom';
import Home from './Routes/home';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <h1>Github Finder</h1>
          <Routes>
            <Route path='/' element={<Home />}/>
          </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
