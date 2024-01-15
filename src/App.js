import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Signup from './components/Signup';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Signup/>
      <Home />
      <Footer />
    </div>
  );
}

export default App;
