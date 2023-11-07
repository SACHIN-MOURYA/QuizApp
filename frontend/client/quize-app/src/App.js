import './App.css';
import Home from './component/Home';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from './component/Login'
import Signup from './component/Signup';
import Navber from './component/Navber';
import Quizeapp from './component/Quizeapp'
// import AppContext from 'react-bootstrap';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navber/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/ >}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/quizeapp' element={<Quizeapp/>}/>
            <Route/>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
