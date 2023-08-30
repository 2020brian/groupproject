import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import Rout from './components/Rout';

function App() {
  return (

    <>
    <BrowserRouter>
    <Navbar />
    <Rout />
    </BrowserRouter>
     
     
    </>
  );
}

export default App;
