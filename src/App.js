import { Route, Routes } from 'react-router-dom';
import About from './About/About';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import CheckOut from './Pages/CheckOut/CheckOut';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import RequiredAuth from './Pages/RequiredAuth/RequiredAuth';
import Login from './Pages/LoginPage/Login';
import SignUp from './Pages/SignUpPage/SignUp';
import Blogs from './Pages/Blogs/Blogs';
import Footer from './Pages/Footer/Footer';

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
      <Route path="/blogs" element={<Blogs></Blogs>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/signup" element={<SignUp></SignUp>}></Route>

        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
