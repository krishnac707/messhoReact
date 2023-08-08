import logo from './logo.svg';
// import './App.css';
import Header from './components/header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import Register from './components/register/Register';
import Login from './components/login/Login';
import AddProduct from './components/add-product/AddProduct';
import SingleProduct from './components/single-product/SingleProduct';
import Updateproduct from './components/update-product/Updateproduct';
import Cart from './components/cart/Cart';
import Mens from './components/mens/Mens';
import Womens from './components/womens/Womens';
import Kids from './components/kids/Kids';
import UpdateProfile from './components/update-profile/UpdateProfile';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/add-product' element={<AddProduct />} />
        <Route exact path='/single-product/:id' element={<SingleProduct />} />
        <Route exact path='/update-product/:id' element={<Updateproduct />} />
        <Route exact path='/cart' element={<Cart />} />
        <Route exact path='/mens' element={<Mens />} />
        <Route exact path='/womens' element={<Womens />} />
        <Route exact path='/kids' element={<Kids />} />
        <Route exact path='/profile-update' element={<UpdateProfile />} />
      </Routes> 
      <Footer></Footer>
    </>
  );
}

export default App;
