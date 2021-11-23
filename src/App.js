import './App.css';

//import Comps
import Navbar from './Components/Navbar';
import MikiKala from './Components/MikiKala';
import ImgCarousel from './Components/ImgCarousel';


function App() {
  return (
    <div className="App">
      <Navbar />
      <MikiKala />
      <ImgCarousel />
    </div>
  );
}

export default App;
