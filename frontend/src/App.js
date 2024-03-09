import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero/Hero'
import {BrowserRouter, Routes,  Route} from 'react-router-dom'
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Hero/>
        <Routes>
          <Route path='/' element={<shop/>}></Route>
          <Route path='/mens' element={<shopCategory category="men"/>}></Route>
          <Route path='/womens' element={<shopCategory category="women"/>}></Route>
          <Route path='/kids' element={<shopCategory category="kid" />}></Route>
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product/>} />
          </Route>
          <Route path='/cart' element={<Cart/>} />
          <Route path='/login' element={<LoginSignup/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
