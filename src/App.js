import './App.css';

//import Comps
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';


import { Route, Routes } from 'react-router-dom';
import ProductCards from './Components/ProductCards';
import { useSelector } from 'react-redux';


const App = () => {

  // const category = useSelector(state => state.categories)

  // console.log(category)

  return (
    <>
      {/* <ProductCards /> */}
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/category/:category' element={<ProductCards />} />
      </Routes>
      <Footer />
    </>

  );
}

export default App;
