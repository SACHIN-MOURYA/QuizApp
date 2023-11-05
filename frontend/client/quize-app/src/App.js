import './App.css';
import Home from './component/Home';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from './component/Login'
import Signup from './component/Signup';
import Navber from './component/Navber';
// import AppContext from 'react-bootstrap';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navber/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route/>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
