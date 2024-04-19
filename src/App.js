import './App.css';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Gallery from './components/Gallery';
import {Home} from './components/Home';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <NavBar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact-us' element={<ContactUs />}/>
          <Route path='/gallery' element={<Gallery />}/>
        </Routes>
      {/* <NavBar /> */}
    </>
  );
}

export default App;
