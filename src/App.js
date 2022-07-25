
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './compunent/Home/Home';
import Login from './compunent/Login/Login';
import Navber from './compunent/Navber/Navber';
import Services from './compunent/Services/Services';


function App() {
  return (
    <div>
      <Navber></Navber>
     <Routes>
        <Route path="/"element={<Home/>}></Route>
        <Route path="/service"element={<Services/>}></Route>
        <Route path="/login"element={<Login/>}></Route>
     </Routes>
     
    </div>
  );
}

export default App;
