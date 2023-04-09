import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Notfound from './components/Notfound/Notfound';
import { Route, Routes } from 'react-router';  
import Footer from './components/Footer/Footer';



function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/carts' element={<Home></Home>} />
        <Route path='/products' element={<Home></Home>} />
        <Route path='/products/:productId' element={<Home></Home>} />
        <Route path='*' element={<Notfound></Notfound>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
