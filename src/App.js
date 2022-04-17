import { Route, Routes } from 'react-router-dom';
import About from './About/About';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import CheckOut from './Pages/CheckOut/CheckOut';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
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
      <Route path="/about" element={<About></About>}></Route>

        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
