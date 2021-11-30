import './App.css';

//import Comps
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import ProductCards from './Components/ProductCards';
import ProductCard from './Components/ProductCard';
import PageNotFound from './Components/PageNotFound';

import { Route, Routes } from 'react-router-dom';



const App = () => {



  return (
    <>
      <Navbar />
      <Routes>
        <Route path='*' element={<PageNotFound />} />
        <Route path='/' exact element={<Home />} />
        <Route path='/category/:category' element={<ProductCards />} />
        <Route path='/product/:id' element={<ProductCard />} />
      </Routes>
      <Footer />
    </>

  );
}

export default App;
