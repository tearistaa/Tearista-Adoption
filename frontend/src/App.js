import './App.css';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <div className='app'>
      <Navbar />

      <div className='content'>
        <Home />
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
