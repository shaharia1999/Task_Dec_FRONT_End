
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './compunent/Home/Home';
import Navber from './compunent/Navber/Navber';



function App() {
  return (
    <div>
      <Navber></Navber>
     <Routes>
        <Route path="/"element={<Home/>}></Route>
      
     </Routes>
     
    </div>
  );
}

export default App;
