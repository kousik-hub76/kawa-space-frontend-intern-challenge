import { Router } from 'react-router';
import './App.css';
import Cards from './components/Cards';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (

    <div className="App">
      <Navbar />

      <Cards />
    </div>

  );
}

export default App;
