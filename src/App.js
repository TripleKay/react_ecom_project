import './App.css';
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import Product from './components/Product/Product';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Banner></Banner>

      <div className='container py-5'>
        <h2 class="text-2xl font-medium text-gray-800 uppercase mb-6 text-start">recomended for you</h2>
        <div className='grid grid-cols-4 gap-6'>
          <Product></Product>
          <Product></Product>
          <Product></Product>
          <Product></Product>
          <Product></Product>
        </div>
      </div>

    </div>
  );
}

export default App;
