import './App.css';

//import Comps
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';


import { Route, Routes } from 'react-router-dom';


const App = () => {



  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
      </Routes>
      <Footer />
    </>

  );
}

export default App;
