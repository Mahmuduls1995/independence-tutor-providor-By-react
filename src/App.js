import { Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import CheckOut from './Pages/CheckOut/CheckOut';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home/Home';
import RequiredAuth from './Pages/RequiredAuth/RequiredAuth';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/checkout" element={
        <RequiredAuth>
          <CheckOut></CheckOut>
        </RequiredAuth>
        }></Route>
        <Route ></Route>
      </Routes>
    </div>
  );
}

export default App;
