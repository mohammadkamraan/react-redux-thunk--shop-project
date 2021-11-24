import './App.css';

//import Comps
import Navbar from './Components/Navbar';
import MikiKala from './Components/MikiKala';
import CategoryCards from './Components/CategoryCards';
import LoginSection from './Components/LoginSection';
import Footer from './Components/Footer';


function App() {
  return (
    <div>
      <Navbar />
      <MikiKala />
      <CategoryCards />
      <LoginSection />
      <Footer />
    </div>
  );
}

export default App;
